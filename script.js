var pass = document.getElementById('password');
var confirm_pass = document.getElementById('cpassword');

function validate_password() {
    if (pass.value != confirm_pass.value) {
        confirm_pass.setCustomValidity("Error: Passwords don't match. Please try again.");
        pass.style.outlineColor = "#FF0000";
        confirm_pass.style.outlineColor = "#FF0000";
    }
    else{
        pass.style.outlineColor = "#3cd33c";
        confirm_pass.style.outlineColor = "#3cd33c";
    }
}

confirm_pass.addEventListener("input", validate_password)
