export function populateFields(selectedDocumentType) {
    let documentFieldsHTML = "";

    if (selectedDocumentType === "Aadhaar") {
        documentFieldsHTML = populateAadhaarFields();
    } else if (selectedDocumentType === "DrivingLicense") {
        documentFieldsHTML = populateDrivingLicenseFields();
    } else if (selectedDocumentType === "PAN") {
        documentFieldsHTML = populatePanCardFields();
    }

    return documentFieldsHTML;
}

function populateAadhaarFields() {
    return `
        <div class='formContainer' id='aadhaar'>
            <label for="documentNumber_aadhaar">Aadhaar Number:</label>
            <input type="text" id="documentNumber_aadhaar" name="documentNumber" required>
            <label for="holdingPersonName_aadhaar">Name:</label>
            <input type="text" id="holdingPersonName_aadhaar" name="holdingPersonName" required>
            <select id="gender" name="gender" required>
                <option value="MALE">MALE</option>
                <option value="FEMALE">FEMALE</option>
            </select>
            <label for="DOB_aadhaar">Date of Birth:</label>
            <input type="date" id="DOB_aadhaar" name="DOB" required>
            <label for="aadhaarAddress">Address:</label>
            <textarea id="aadhaarAddress" name="aadhaarAddress" required></textarea>
        </div>
    `;
}

function populateDrivingLicenseFields() {
    return `
        <div class='formContainer' id='driver'>
            <label for="documentNumber_drivingLicense">Driving License Number:</label>
            <input type="text" id="documentNumber_drivingLicense" name="documentNumber" required>
            <label for="holdingPersonName_drivingLicense">Name:</label>
            <input type="text" id="holdingPersonName_drivingLicense" name="holdingPersonName" required>
            <label for="DOB_drivingLicense">Date of issue:</label>
            <input type="date" id="DOB_drivingLicense" name="DOB" required>
            <label for="expiry">Date of Expiry:</label>
            <input type="date" id="DOE" name="DOE" required>
        </div>
    `;
}

function populatePanCardFields() {
    return `
        <div class='formContainer' id='pan'>
            <label for="documentNumber_panCard">PAN Card Number:</label>
            <input type="text" id="documentNumber_panCard" name="documentNumber" required>
            <label for="holdingPersonName_panCard">Name:</label>
            <input type="text" id="holdingPersonName_panCard" name="holdingPersonName" required>
            <label for="DOB_panCard">Date of Birth:</label>
            <input type="date" id="DOB_panCard" name="DOB" required>
            <label for="gender">Gender:</label>
            <select id="gender" name="gender" required>
                <option value="MALE">MALE</option>
                <option value="FEMALE">FEMALE</option>
            </select>
        </div>
    `;
}
