// generateImage.js
// FontAwesome setup
// In both createEntry.js and generateImage.js
import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { faMars, faVenus } from '@fortawesome/free-solid-svg-icons';

library.add(faMars, faVenus);
dom.watch();

import { documentMapper } from './documentMapper.js';
import { formatDOB } from './utils.js';

export function generateImage(documentType, documentNumber, holdingPersonName, DOB, gender) {
    let genderText = '';
    if (gender === 'male') {
        genderText = 'Male';
    } else if (gender === 'female') {
        genderText = 'Female';
    } else {
        genderText = 'Unknown'; // Handle other cases as needed
    }

    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    const canvasWidth = 600;
    const canvasHeight = 400;

    const mappedDocumentType = documentMapper.get(documentType.toLowerCase());
    let backgroundImageUrl = '';

    switch (mappedDocumentType) {
        case 'Aadhaar':
            backgroundImageUrl = '/assets/images/gery.jpg';
            break;
        case 'DrivingLicense':
            backgroundImageUrl = '/assets/images/gery.jpg';
            break;
        case 'PAN':
            backgroundImageUrl = '/assets/images/gery.jpg';
            break;
        default:
            console.log("Document Type is unrecognized:", documentType);
            return;
    }

    const backgroundImage = new Image();
    backgroundImage.src = backgroundImageUrl;
    backgroundImage.onload = () => {
        canvas.width = canvasWidth;
        canvas.height = canvasHeight;
        const scaleFactor = Math.min(canvas.width / backgroundImage.width, canvas.height / backgroundImage.height);
        const width = backgroundImage.width * scaleFactor;
        const height = backgroundImage.height * scaleFactor;
        const offsetX = (canvas.width - width) / 2;
        const offsetY = (canvas.height - height) / 2;

        context.drawImage(backgroundImage, offsetX, offsetY, width, height);

        context.fillStyle = '#333';
        context.font = 'bold 22px Arial';
        context.textAlign = 'left';

        const formattedDOB = formatDOB(DOB);

        let text = '';
        if (mappedDocumentType === "Aadhaar") {
            text = `--Aadhaar Card--\n#: ${documentNumber}\nName: ${holdingPersonName}\nDOB: ${DOB}\nGender: ${genderText}`;
        } else if (mappedDocumentType === "DrivingLicense") {
            text = `--Driving License--\n#: ${documentNumber}\nName: ${holdingPersonName}\nDOB: ${DOB}\nGender: ${genderText}`;
        } else if (mappedDocumentType === "PAN") {
            text = `--PAN Card--\n#: ${documentNumber}\nName: ${holdingPersonName}\nDOB: ${DOB}\nGender: ${genderText}`;
        } else {
            console.log("Document Type is unrecognized:", documentType);
        }

        const lines = text.split('\n');
        lines.forEach((line, index) => {
            context.fillText(line, 20, 50 + index * 50);
        });

        const image = canvas.toDataURL("image/png");

        const newWindow = window.open();
        newWindow.document.write('<img src="' + image + '" />');
    };
}
