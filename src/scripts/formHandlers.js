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
             <label for="gender">Gender:</label>
           <!-- Radio buttons for gender -->
            <div class="gender-selection">
                <label>
                    <input type="radio" id="gender_male" name="gender" value="male" required>
                    male
                </label>
                <label>
                    <input type="radio" id="gender_female" name="gender" value="female" required>
                    female
                </label>
            </div>

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
             <label for="DOB_aadhaar">Date of Birth:</label>
            <input type="date" id="DOB_driving" name="DOB" required>
             <label for="gender">Gender:</label>
            <!-- Radio buttons for gender -->
            <div class="gender-selection">
                <label>
                    <input type="radio" id="gender_male" name="gender" value="male" required>
                    male
                </label>
                <label>
                    <input type="radio" id="gender_female" name="gender" value="female" required>
                    female
                </label>
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
                    <input type="radio" id="gender_male" name="gender" value="male" required>
                    male
                </label>
                <label>
                    <input type="radio" id="gender_female" name="gender" value="female" required>
                    female
                </label>
            </div>

        </div>
    `;
}

document.addEventListener('input', function(event) {
    const target = event.target;
    const documentType = document.getElementById('documentType').value.toLowerCase();

    if (target && target.matches('input[name="documentNumber"]')) {
        const inputValue = target.value.trim();
        let containsAlphabetic = false;

        
        for (let char of inputValue) {
            if (/[a-zA-Z]/.test(char)) {
                containsAlphabetic = true;
                break;
            }
        }

        
        if (containsAlphabetic) {
            target.style.fontWeight = '700'; 
        } else {
            target.style.fontWeight = '300'; 
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
    }
});

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
