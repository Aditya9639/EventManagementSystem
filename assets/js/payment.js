function bookedPopup() {
    // Check if all form fields are filled
    const formFields = document.querySelectorAll('form input');
    let allFieldsFilled = true;

    formFields.forEach(field => {
        if (field.value.trim() === '') {
            allFieldsFilled = false;
            return;
        }
    });

    if (!allFieldsFilled) {
        alert("Please fill in all the fields before booking.");
        return;
    }

    const popup = document.getElementById('popup');
    popup.style.display = 'flex';

    setTimeout(() => {
        popup.style.display = 'none';
        window.location.href = "./index.html";
    }, 3000);
}
