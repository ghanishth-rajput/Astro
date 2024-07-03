export function resetForm() {
    console.log("resetForm called");
    const documentForm = document.getElementById("documentForm");
    if (documentForm) {
        documentForm.reset();
        console.log("Form reset");
    } else {
        console.error("Form not found");
    }
}