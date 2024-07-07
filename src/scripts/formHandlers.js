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
          

            <label for="DOB_aadhaar">Date of Birth:</label>
            <input type="date" id="DOB_aadhaar" name="DOB" required>
            <label for="aadhaarAddress">Address:</label>
            <textarea id="aadhaarAddress" name="aadhaarAddress" required></textarea>
               <label for="gender">Gender:</label>
           <!-- Radio buttons for gender -->
            <div class="gender-selection">
                <label>
                  <div class="gender-selection" style="display: flex; gap: 10px;">
                <label style="display: flex; align-items: center;">
                    <input type="radio" id="gender_male" name="gender" value="male" required checked>
                    male
                </label>
                <label style="display: flex; align-items: center;">
                    <input type="radio" id="gender_female" name="gender" value="female" required>
                    female
                </label>
            </div>
             <div class="button-container">
        <button type="submit" id="saveButton" class="save-btn">Save</button>
        <button type="button" id="resetButton" class="reset-btn">Reset</button>
      </div>
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
             <label for="DOB_aadhaar">Date of Birth:</label>
            <input type="date" id="DOB_driving" name="DOB" required>
             <label for="gender">Gender:</label>
            <!-- Radio buttons for gender -->
            <div class="gender-selection">
                <label>
                 <div class="gender-selection" style="display: flex; gap: 10px;">
                <label style="display: flex; align-items: center;">
                    <input type="radio" id="gender_male" name="gender" value="male" required checked>
                    male
                </label>
                <label style="display: flex; align-items: center;">
                    <input type="radio" id="gender_female" name="gender" value="female" required>
                    female
                </label>
            </div>
             <div class="button-container">
        <button type="submit" id="saveButton" class="save-btn">Save</button>
        <button type="button" id="resetButton" class="reset-btn">Reset</button>
      </div>

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
           <!-- Radio buttons for gender -->
            <div class="gender-selection">
                <label>
                 <div class="gender-selection" style="display: flex; gap: 10px;">
                <label style="display: flex; align-items: center;">
                    <input type="radio" id="gender_male" name="gender" value="male" required checked>
                    male
                </label>
                <label style="display: flex; align-items: center;">
                    <input type="radio" id="gender_female" name="gender" value="female" required>
                    female
                </label>
            </div>
             <div class="button-container">
        <button type="submit" id="saveButton" class="save-btn">Save</button>
        <button type="button" id="resetButton" class="reset-btn">Reset</button>
      </div>

        </div>
    `;
}


        
        switch (documentType) {
            case 'aadhaar':
                validateAadhaar(inputValue);
                break;
            case 'drivinglicense':
                validateDrivingLicense(inputValue);
                break;
            case 'pancard':
                validatePanCard(inputValue);
                break;
            default:
                
                break;
        }
    

function validateAadhaar(inputValue) {
    if (inputValue.length > 12) {
        alert('Aadhaar number should not exceed 12 digits.');
        
    }
}

function validateDrivingLicense(inputValue) {
    if (inputValue.length > 14) {
        alert('Driving License number should not exceed 14 digits.');
        
    }
}

function validatePanCard(inputValue) {
    if (inputValue.length > 10) {
        alert('PAN Card number should not exceed 10 characters.');
        
    }
}
