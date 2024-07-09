import { formatDOB } from './utils.js';

// In both createEntry.js and generateImage.js
import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { faMars, faVenus } from '@fortawesome/free-solid-svg-icons';

library.add(faMars, faVenus);
dom.watch();

let entryCount = 0;
export function createNewEntry(selectedDocumentType, documentNumber, holdingPersonName, DOB, gender) {
    entryCount++; // Increment the counter for each new entry
    const tableBody = document.querySelector(".container");

    // Determine the gender icon
    let genderIcon = '';
    if (gender.toLowerCase() === 'male') {
        genderIcon = '<i class=" fa-mars"></i>'; // Male icon
    } else if (gender.toLowerCase() === 'female') {
        genderIcon = '<i class=" fa-venus"></i>'; // Female icon
    }

    // Format the date to DD/MM/YYYY
    const formattedDOB = formatDOB(DOB);

    tableBody.insertAdjacentHTML('beforeend', `
        <div class="item">
            <div>${entryCount}</div>
            <div>${selectedDocumentType}</div>
            <div>${documentNumber}</div>
            <div>${holdingPersonName}</div>
            <div>${formattedDOB}</div>
            <div>${genderIcon}</div>
            <div>
                <button class="view-btn" type="button">View</button>
                <button class="delete-btn" type="button">Delete</button>
                <button class="edit-btn" type="button">Edit</button>
            </div>
        </div>
    `);
}
