// Get form
let form = document.getElementById("form");

// ----------- NAME -----------
function validateName() {
    let name = document.getElementById("name").value;

    if (name.length < 5) {
        document.getElementById("nameError").innerText = "Name must be at least 5 characters";
        return false;
    }
    document.getElementById("nameError").innerText = "";
    return true;
}

// ----------- EMAIL -----------
function validateEmail() {
    let email = document.getElementById("email").value;

    if (!email.includes("@")) {
        document.getElementById("emailError").innerText = "Enter valid email";
        return false;
    }
    document.getElementById("emailError").innerText = "";
    return true;
}

// ----------- PHONE -----------
function validatePhone() {
    let phone = document.getElementById("phone").value;

    if (phone.length !== 10 || phone === "1234567890") {
        document.getElementById("phoneError").innerText = "Invalid phone number";
        return false;
    }
    document.getElementById("phoneError").innerText = "";
    return true;
}

// ----------- PASSWORD -----------
function validatePassword() {
    let password = document.getElementById("password").value;
    let name = document.getElementById("name").value.toLowerCase();

    if (password.length < 8 || password.toLowerCase() === "password" || password.toLowerCase() === name) {
        document.getElementById("passError").innerText = "Weak password";
        return false;
    }
    document.getElementById("passError").innerText = "";
    return true;
}

// ----------- CONFIRM PASSWORD -----------
function validateConfirm() {
    let password = document.getElementById("password").value;
    let confirm = document.getElementById("confirmPassword").value;

    if (password !== confirm) {
        document.getElementById("confirmError").innerText = "Passwords do not match";
        return false;
    }
    document.getElementById("confirmError").innerText = "";
    return true;
}

// ----------- FORM SUBMIT -----------
form.addEventListener("submit", function(e) {
    e.preventDefault();

    let valid =
        validateName() &&
        validateEmail() &&
        validatePhone() &&
        validatePassword() &&
        validateConfirm();

    if (valid) {
        alert("Form submitted successfully!");
    } else {
        alert("Please correct errors!");
    }
});

