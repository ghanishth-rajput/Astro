export function createNewEntry(selectedDocumentType, documentNumber, holdingPersonName, DOB, gender) {
    const tableBody = document.querySelector(".container");

    tableBody.insertAdjacentHTML('beforeend', `
        <div class="item">
            <div># ${selectedDocumentType}</div>
            <div> ${documentNumber}</div>
            <div> ${holdingPersonName}</div>
            <div> ${DOB}</div>
             <div> ${gender}</div>
            <div>
                <button class="view-btn" type="button">View</button>
                <button class="delete-btn" type="button">Delete</button>
                <button class="edit-btn" type="button">Edit</button>
            </div>
        </div>
    `);
}
