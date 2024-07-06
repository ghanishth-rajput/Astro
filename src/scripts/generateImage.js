import { documentMapper } from './documentMapper.js';

export function generateImage(documentType, documentNumber, holdingPersonName, DOB, gender) {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    let canvasWidth = 600;
    let canvasHeight = 400;

    const mappedDocumentType = documentMapper.get(documentType.toLowerCase());
    let backgroundImageUrl = '';

    switch (mappedDocumentType) {
        case 'Aadhaar':
            backgroundImageUrl = '/assets/images/tricolour.jpg';
            break;
        case 'DrivingLicense':
            backgroundImageUrl = '/assets/images/image.jpg';
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
            text = `--Adhara Card--\n#: ${documentNumber}\nName: ${holdingPersonName}\nDOB: ${formattedDOB}\nGender: ${gender}`;
        } else if (mappedDocumentType === "DrivingLicense") {
            text = `--Driving License--\n#: ${documentNumber}\nName: ${holdingPersonName}\nDOB: ${formattedDOB}\nGender: ${gender}`;
        } else if (mappedDocumentType === "PAN") {
            text = `--PAN Card--\n#: ${documentNumber}\nName: ${holdingPersonName}\nDOB: ${formattedDOB}\nGender: ${gender}`;
        } else {
            console.log("Document Type is unrecognized:", documentType);
        }

        const lines = text.split('\n');
        lines.forEach((line, index) => {
            if (line.includes('Name:')) {
                const nameIndex = line.indexOf('Name:');
                context.font = 'bold 23px Arial';
                context.fillStyle = '#000';
                context.fillText(line.substring(0, nameIndex + 5), 20, 50 + index * 50);

                context.font = 'italic 22px Arial';
                context.fillStyle = '#333';
                context.fillText(line.substring(nameIndex + 5), 20 + context.measureText(line.substring(0, nameIndex + 5)).width, 50 + index * 50);
            } else if (line.includes('#:')) {
                const hashIndex = line.indexOf('#:');
                context.font = 'bold 23px Arial';
                context.fillStyle = '#000';
                context.fillText(line.substring(0, hashIndex + 2), 20, 50 + index * 50);

                context.font = 'italic 22px Arial';
                context.fillStyle = '#333';
                context.fillText(line.substring(hashIndex + 2), 20 + context.measureText(line.substring(0, hashIndex + 2)).width, 50 + index * 50);
            } else if (line.includes('DOB:')) {
                const dobIndex = line.indexOf('DOB:');
                context.font = 'bold 23px Arial';
                context.fillStyle = '#000';
                context.fillText(line.substring(0, dobIndex + 4), 20, 50 + index * 50);

                context.font = 'italic 22px Arial';
                context.fillStyle = '#333';
                context.fillText(line.substring(dobIndex + 4), 20 + context.measureText(line.substring(0, dobIndex + 4)).width, 50 + index * 50);
            } else if (line.includes('Gender: ')) {
                const genderIndex = line.indexOf('Gender: ');
                const genderLabel = line.substring(0, genderIndex + 7); 
                const genderValue = line.substring(genderIndex + 7); 
            
                
                context.font = 'bold 23px Arial';
                context.fillStyle = '#000';
                context.fillText(genderLabel, 20, 50 + index * 50);
            
                
                context.font = 'italic 22px Arial';
                context.fillStyle = '#333';
                context.fillText(genderValue, 20 + context.measureText(genderLabel).width, 50 + index * 50);
            }
             else {
                context.fillText(line, 20, 50 + index * 50);
            }
        });

        const image = canvas.toDataURL("image/png");

        const newWindow = window.open();
        newWindow.document.write('<img src="' + image + '" />');
    };
}

export function formatDOB(DOB) {
    const parts = DOB.split('-');
    return `${parts[2]}/${parts[1]}/${parts[0]}`;
}