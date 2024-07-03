import { populateFields } from '../scripts/formHandlers.js';
import { createNewEntry } from '../scripts/createEntry.js';
import { documentMapper } from '../scripts/documentMapper.js';
import { generateImage, formatDOB } from '../scripts/generateImage.js';
import { resetForm } from '../scripts/resetForm.js';

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
    console.log("selectedDocumentType:", selectedDocumentType);

    const documentNumberInput = documentForm.querySelector("#documentNumber_" + selectedDocumentType);
    const holdingPersonNameInput = documentForm.querySelector("#holdingPersonName_" + selectedDocumentType);
    const DOBInput = documentForm.querySelector("#DOB_" + selectedDocumentType);

    console.log("documentNumberInput:", documentNumberInput);
    console.log("holdingPersonNameInput:", holdingPersonNameInput);
    console.log("DOBInput:", DOBInput);

    if (!documentNumberInput || !holdingPersonNameInput || !DOBInput) {
        console.error("One or more inputs are undefined.");
        return;
    }

    const documentNumber = documentNumberInput.value;
    const holdingPersonName = holdingPersonNameInput.value;
    const DOB = DOBInput.value;

    createNewEntry(selectedDocumentType, documentNumber, holdingPersonName, DOB);
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
    const documentType = item.querySelector("div:nth-child(1)").textContent.split("#")[1].trim();
    const documentNumber = item.querySelector("div:nth-child(2)").textContent.trim();
    const holdingPersonName = item.querySelector("div:nth-child(3)").textContent.trim();
    const DOB = item.querySelector("div:nth-child(4)").textContent.trim();

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

    documentTypeSelect.dispatchEvent(new Event('change'));
}

function viewItem(event) {
    const item = event.target.closest(".item");
    const documentType = item.querySelector("div:nth-child(1)").textContent.split("#")[1].trim();
    const documentNumber = item.querySelector("div:nth-child(2)").textContent.trim();
    const holdingPersonName = item.querySelector("div:nth-child(3)").textContent.trim();
    const DOB = item.querySelector("div:nth-child(4)").textContent.trim();

    console.log("viewItem - documentType:", documentType);
    console.log("viewItem - documentNumber:", documentNumber);
    console.log("viewItem - holdingPersonName:", holdingPersonName);
    console.log("viewItem - DOB:", DOB);

    generateImage(documentType, documentNumber, holdingPersonName, DOB);
}