// ============================================================
// MY BUDGET - ACCOUNT SCRIPT
// ============================================================


// ============================================================
// STORAGE
// ============================================================

const ACCOUNTS_STORAGE_KEY = "myBudgeyAccounts";
const CURRENT_ACCOUNT_KEY = "myBudgeyCurrentAccount";


// Get all stored accounts
function getAccounts() {

    const storedAccounts =
        localStorage.getItem(ACCOUNTS_STORAGE_KEY);

    if (!storedAccounts) {
        return {};
    }

    try {
        return JSON.parse(storedAccounts);
    } catch (error) {
        console.error("Unable to read stored accounts.", error);
        return {};
    }
}


// Save all accounts
function saveAccounts(accounts) {

    localStorage.setItem(
        ACCOUNTS_STORAGE_KEY,
        JSON.stringify(accounts)
    );
}


// Get the currently logged-in account
function getCurrentAccount() {

    const username =
        localStorage.getItem(CURRENT_ACCOUNT_KEY);

    if (!username) {
        return null;
    }

    const accounts = getAccounts();

    return accounts[username] || null;
}


// Set the current account
function setCurrentAccount(username) {

    localStorage.setItem(
        CURRENT_ACCOUNT_KEY,
        username
    );
}


// Remove the current account
function clearCurrentAccount() {

    localStorage.removeItem(
        CURRENT_ACCOUNT_KEY
    );
}


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
                document.getElementById("create-username");

            const emailElement =
                document.getElementById("create-email");

            const passwordElement =
                document.getElementById("create-password");

            const confirmPasswordElement =
                document.getElementById(
                    "create-confirm-password"
                );


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


            // Check required fields
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


            // Check passwords
            if (password !== confirmPassword) {

                alert(
                    "Passwords do not match."
                );

                return;
            }


            const accounts = getAccounts();

            const usernameKey =
                username.toLowerCase();


            // Check duplicate username
            if (accounts[usernameKey]) {

                alert(
                    "That username already exists."
                );

                return;
            }


            // Check duplicate email
            const emailExists =
                Object.values(accounts).some(
                    function(account) {

                        return (
                            account.email.toLowerCase() ===
                            email.toLowerCase()
                        );

                    }
                );


            if (emailExists) {

                alert(
                    "That email address is already registered."
                );

                return;
            }


            // Create new account
            const newAccount = {

                username: username,

                email: email,

                password: password,


                personal: {

                    firstName: "",

                    lastName: "",

                    phone: "",

                    country: "us"

                },


                preferences: {

                    currency: "usd",

                    travelMode: false

                },


                profilePicture: "",


                // Financial data
                goals: [],

                income: [],

                expenses: [],

                transactions: []

            };


            // Save account
            accounts[usernameKey] =
                newAccount;

            saveAccounts(accounts);


            // Make this the current account
            setCurrentAccount(usernameKey);


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


            const accounts = getAccounts();

            const usernameKey =
                username.toLowerCase();

            const account =
                accounts[usernameKey];


            if (!account) {

                alert(
                    "Account not found."
                );

                return;
            }


            if (
                account.email.toLowerCase() !==
                email.toLowerCase()
            ) {

                alert(
                    "The email address does not match this account."
                );

                return;
            }


            if (account.password !== password) {

                alert(
                    "Incorrect password."
                );

                return;
            }


            setCurrentAccount(usernameKey);


            alert(
                "Login information verified successfully."
            );

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


            const account =
                getCurrentAccount();


            if (!account) {

                alert(
                    "Please create or log into an account first."
                );

                return;
            }


            const firstNameElement =
                document.getElementById("first-name");

            const lastNameElement =
                document.getElementById("last-name");

            const phoneElement =
                document.getElementById("phone");

            const countryElement =
                document.getElementById("country");


            account.personal.firstName =
                firstNameElement
                    ? firstNameElement.value.trim()
                    : "";

            account.personal.lastName =
                lastNameElement
                    ? lastNameElement.value.trim()
                    : "";

            account.personal.phone =
                phoneElement
                    ? phoneElement.value.trim()
                    : "";

            account.personal.country =
                countryElement
                    ? countryElement.value
                    : "us";


            const accounts = getAccounts();

            const usernameKey =
                localStorage.getItem(
                    CURRENT_ACCOUNT_KEY
                );


            accounts[usernameKey] =
                account;

            saveAccounts(accounts);


            alert(
                "Personal information saved."
            );

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


            const account =
                getCurrentAccount();


            if (!account) {

                alert(
                    "Please create or log into an account first."
                );

                return;
            }


            const currencyElement =
                document.getElementById("currency");

            const travelModeElement =
                document.getElementById("travel-mode");


            account.preferences.currency =
                currencyElement
                    ? currencyElement.value
                    : "usd";


            account.preferences.travelMode =
                travelModeElement
                    ? travelModeElement.checked
                    : false;


            const accounts = getAccounts();

            const usernameKey =
                localStorage.getItem(
                    CURRENT_ACCOUNT_KEY
                );


            accounts[usernameKey] =
                account;

            saveAccounts(accounts);


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


            const account =
                getCurrentAccount();


            if (!account) {

                alert(
                    "Please create or log into an account first."
                );

                return;
            }


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


            const file =
                picture.files[0];


            const reader =
                new FileReader();


            reader.onload =
                function() {

                    account.profilePicture =
                        reader.result;


                    const accounts =
                        getAccounts();

                    const usernameKey =
                        localStorage.getItem(
                            CURRENT_ACCOUNT_KEY
                        );


                    accounts[usernameKey] =
                        account;

                    saveAccounts(accounts);


                    alert(
                        "Profile picture saved."
                    );

                };


            reader.readAsDataURL(file);

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
        function(event) {

            event.preventDefault();


            const confirmLogout =
                confirm(
                    "Do you want to log out?"
                );


            if (confirmLogout) {

                clearCurrentAccount();


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
        function(event) {

            event.preventDefault();


            const confirmDeactivate =
                confirm(
                    "Do you want to deactivate your account?"
                );


            if (!confirmDeactivate) {
                return;
            }


            const account =
                getCurrentAccount();


            if (!account) {

                alert(
                    "Please create or log into an account first."
                );

                return;
            }


            account.deactivated = true;


            const accounts =
                getAccounts();

            const usernameKey =
                localStorage.getItem(
                    CURRENT_ACCOUNT_KEY
                );


            accounts[usernameKey] =
                account;

            saveAccounts(accounts);

            clearCurrentAccount();


            alert(
                "Your account has been deactivated."
            );

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
        function(event) {

            event.preventDefault();


            const confirmDelete =
                confirm(
                    "Are you sure you want to permanently delete your account?"
                );


            if (!confirmDelete) {
                return;
            }


            const usernameKey =
                localStorage.getItem(
                    CURRENT_ACCOUNT_KEY
                );


            if (!usernameKey) {

                alert(
                    "Please create or log into an account first."
                );

                return;
            }


            const accounts =
                getAccounts();


            delete accounts[usernameKey];


            saveAccounts(accounts);

            clearCurrentAccount();


            alert(
                "Your account and its stored data have been deleted."
            );

        }
    );

}
