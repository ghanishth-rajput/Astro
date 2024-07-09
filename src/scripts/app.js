import { populateFields } from '../scripts/formHandlers.js';
import { createNewEntry } from '../scripts/createEntry.js';
import { documentMapper } from '../scripts/documentMapper.js';
import { generateImage } from '../scripts/generateImage.js';
import { resetForm } from '../scripts/resetForm.js';
import { formatDOB } from '../scripts/utils.js';
// FontAwesome setup
import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { faMars, faVenus } from '@fortawesome/free-solid-svg-icons';

library.add(faMars, faVenus);
dom.watch();


const documentForm = document.getElementById("documentForm");
const documentTypeSelect = document.getElementById("documentType");
const documentFieldsDiv = document.getElementById("documentFields");
const container = document.querySelector(".container");
const resetButton = document.getElementById("resetButton");

console.log("documentForm:", documentForm);
console.log("documentTypeSelect:", documentTypeSelect);
console.log("documentFieldsDiv:", documentFieldsDiv);
console.log("container:", container);

const handleSubmit = (event) => {
    event.preventDefault();

    const selectedDocumentType = documentTypeSelect.value;
    const documentNumberInput = documentForm.querySelector("#documentNumber_" + selectedDocumentType);
    const holdingPersonNameInput = documentForm.querySelector("#holdingPersonName_" + selectedDocumentType);
    const DOBInput = documentForm.querySelector("#DOB_" + selectedDocumentType);
    const genderInput = documentForm.querySelector('input[name="gender"]:checked');

    if (!documentNumberInput || !holdingPersonNameInput || !DOBInput || !genderInput) {
        console.error("One or more inputs are undefined.");
        return;
    }

    const documentNumber = documentNumberInput.value;
    const holdingPersonName = holdingPersonNameInput.value;
    const DOB = DOBInput.value;
    const gender = genderInput.value;

    createNewEntry(selectedDocumentType, documentNumber, holdingPersonName, DOB, gender);
    resetForm();
};

documentForm.addEventListener("submit", handleSubmit);

documentTypeSelect.addEventListener("change", () => {
    const selectedDocumentType = documentTypeSelect.value.toLowerCase();
    const mappedDocumentType = documentMapper.get(selectedDocumentType);
    console.log("mappedDocumentType:", mappedDocumentType);

    let documentFieldsHTML = "";

    if (mappedDocumentType) {
        documentFieldsHTML = populateFields(mappedDocumentType);
    }

    documentFieldsDiv.innerHTML = documentFieldsHTML;
    documentFieldsDiv.style.display = "block";
});

container.addEventListener("click", (event) => {
    if (event.target.classList.contains("delete-btn")) {
        deleteItem(event);
    } else if (event.target.classList.contains("edit-btn")) {
        editItem(event);
    } else if (event.target.classList.contains("view-btn")) {
        viewItem(event);
    }
});

resetButton.addEventListener("click", resetForm);

function deleteItem(event) {
    const item = event.target.closest(".item");
    item.remove();
}

function editItem(event) {
    const item = event.target.closest(".item");
    const documentType = item.querySelector("div:nth-child(2)").textContent.trim();
    const documentNumber = item.querySelector("div:nth-child(3)").textContent.trim();
    const holdingPersonName = item.querySelector("div:nth-child(4)").textContent.trim();
    const DOB = item.querySelector("div:nth-child(5)").textContent.trim();
    const gender = item.querySelector("div:nth-child(6)").textContent.trim();

    console.log("editItem - documentType:", documentType);
    console.log("editItem - documentNumber:", documentNumber);
    console.log("editItem - holdingPersonName:", holdingPersonName);
    console.log("editItem - DOB:", DOB);

    documentTypeSelect.value = documentType;
    const documentNumberInput = documentForm.querySelector("#documentNumber_" + documentType);
    if (documentNumberInput) {
        documentNumberInput.value = documentNumber;
    }
    const holdingPersonNameInput = documentForm.querySelector("#holdingPersonName_" + documentType);
    if (holdingPersonNameInput) {
        holdingPersonNameInput.value = holdingPersonName;
    }
    const DOBInput = documentForm.querySelector("#DOB_" + documentType);
    if (DOBInput) {
        DOBInput.value = DOB;
    }
    const genderInput = documentForm.querySelector('input[name="gender"][value="' + gender + '"]');
    if (genderInput) {
        genderInput.checked = true;
    }

    documentTypeSelect.dispatchEvent(new Event('change'));
}
function viewItem(event) {
    const item = event.target.closest(".item");
    const documentType = item.querySelector("div:nth-child(2)").textContent.trim();
    const documentNumber = item.querySelector("div:nth-child(3)").textContent.trim();
    const holdingPersonName = item.querySelector("div:nth-child(4)").textContent.trim();
    const DOB = item.querySelector("div:nth-child(5)").textContent.trim();
    let gender = '';

    // Check for gender icon
    const genderIconElement = item.querySelector("div:nth-child(6) i");
    if (genderIconElement) {
        // Retrieve gender from icon class
        if (genderIconElement.classList.contains("fa-mars")) {
            gender = "male";
        } else if (genderIconElement.classList.contains("fa-venus")) {
            gender = "female";
        }
    }

    console.log("viewItem - documentType:", documentType);
    console.log("viewItem - documentNumber:", documentNumber);
    console.log("viewItem - holdingPersonName:", holdingPersonName);
    console.log("viewItem - DOB:", DOB);
    console.log("viewItem - gender:", gender);

    generateImage(documentType, documentNumber, holdingPersonName, DOB, gender);
}
