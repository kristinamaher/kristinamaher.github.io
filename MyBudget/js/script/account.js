// ============================================================
// MY BUDGET - ACCOUNT SCRIPT
// ============================================================

// ============================================================
// ACCOUNT - CREATE ACCOUNT
// ============================================================

const createAccountForm =
    document.getElementById("create-account-form");


if (createAccountForm) {

    createAccountForm.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();


            const usernameElement =
                document.getElementById("username");

            const emailElement =
                document.getElementById("email");

            const passwordElement =
                document.getElementById("password");

            const confirmPasswordElement =
                document.getElementById("confirm-password");


            const username =
                usernameElement
                    ? usernameElement.value.trim()
                    : "";

            const email =
                emailElement
                    ? emailElement.value.trim()
                    : "";

            const password =
                passwordElement
                    ? passwordElement.value
                    : "";

            const confirmPassword =
                confirmPasswordElement
                    ? confirmPasswordElement.value
                    : "";


            if (
                username === "" ||
                email === "" ||
                password === "" ||
                confirmPassword === ""
            ) {

                alert(
                    "Please complete all required account information."
                );

                return;

            }


            if (password !== confirmPassword) {

                alert(
                    "Passwords do not match."
                );

                return;

            }


            alert(
                "Account created successfully."
            );


            this.reset();

        }
    );

}


// ============================================================
// ACCOUNT - LOGIN INFORMATION
// ============================================================

const loginInformationForm =
    document.getElementById(
        "login-information-form"
    );


if (loginInformationForm) {

    loginInformationForm.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();


            const usernameElement =
                document.getElementById("username");

            const emailElement =
                document.getElementById("email");

            const passwordElement =
                document.getElementById("password");

            const confirmPasswordElement =
                document.getElementById("confirm-password");


            const username =
                usernameElement
                    ? usernameElement.value.trim()
                    : "";

            const email =
                emailElement
                    ? emailElement.value.trim()
                    : "";

            const password =
                passwordElement
                    ? passwordElement.value
                    : "";

            const confirmPassword =
                confirmPasswordElement
                    ? confirmPasswordElement.value
                    : "";


            if (
                username === "" ||
                email === "" ||
                password === "" ||
                confirmPassword === ""
            ) {

                alert(
                    "Please complete all login information."
                );

                return;

            }


            if (password !== confirmPassword) {

                alert(
                    "Passwords do not match."
                );

                return;

            }


            alert(
                "Login information saved."
            );


            this.reset();

        }
    );

}


// ============================================================
// ACCOUNT - PERSONAL INFORMATION
// ============================================================

const personalInformationForm =
    document.getElementById(
        "personal-information-form"
    );


if (personalInformationForm) {

    personalInformationForm.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();


            alert(
                "Personal information saved."
            );


            this.reset();

        }
    );

}


// ============================================================
// ACCOUNT - CURRENCY PREFERENCE
// ============================================================

const currencyForm =
    document.getElementById("currency-form");


if (currencyForm) {

    currencyForm.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();


            alert(
                "Currency preference saved."
            );

        }
    );

}


// ============================================================
// ACCOUNT - PROFILE PICTURE
// ============================================================

const profilePictureForm =
    document.getElementById(
        "profile-picture-form"
    );


if (profilePictureForm) {

    profilePictureForm.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();


            const picture =
                document.getElementById(
                    "profile-picture"
                );


            if (
                !picture ||
                !picture.files ||
                !picture.files.length
            ) {

                alert(
                    "Please choose a profile picture."
                );

                return;

            }


            alert(
                "Profile picture saved."
            );

        }
    );

}


// ============================================================
// ACCOUNT - LOG OUT
// ============================================================

const logoutButton =
    document.getElementById(
        "logout-button"
    );


if (logoutButton) {

    logoutButton.addEventListener(
        "click",
        function() {

            const confirmLogout =
                confirm(
                    "Do you want to log out?"
                );


            if (confirmLogout) {

                alert(
                    "You have been logged out."
                );

            }

        }
    );

}


// ============================================================
// ACCOUNT - DEACTIVATE
// ============================================================

const deactivateButton =
    document.getElementById(
        "deactivate-button"
    );


if (deactivateButton) {

    deactivateButton.addEventListener(
        "click",
        function() {

            const confirmDeactivate =
                confirm(
                    "Do you want to deactivate your account?"
                );


            if (confirmDeactivate) {

                alert(
                    "Your account has been deactivated."
                );

            }

        }
    );

}


// ============================================================
// ACCOUNT - DELETE
// ============================================================

const deleteButton =
    document.getElementById(
        "delete-account-button"
    );


if (deleteButton) {

    deleteButton.addEventListener(
        "click",
        function() {

            const confirmDelete =
                confirm(
                    "Are you sure you want to permanently delete your account?"
                );


            if (confirmDelete) {

                alert(
                    "Your account has been deleted."
                );

            }

        }
    );

}
