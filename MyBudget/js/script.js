// My Budget - Main JavaScript


// ==============================
// INCOME TOTALS
// ==============================

let incomeTotal = 0;
let giftTotal = 0;
let cardTotal = 0;


function updateIncomeSummary() {

    const incomeDisplay = document.getElementById("income-total");
    const giftDisplay = document.getElementById("gift-total");
    const cardDisplay = document.getElementById("card-total");
    const spendableDisplay = document.getElementById("spendable-total");

    if (incomeDisplay) {
        incomeDisplay.textContent =
            "$" + incomeTotal.toFixed(2);
    }

    if (giftDisplay) {
        giftDisplay.textContent =
            "$" + giftTotal.toFixed(2);
    }

    if (cardDisplay) {
        cardDisplay.textContent =
            "$" + cardTotal.toFixed(2);
    }

    if (spendableDisplay) {

        let spendableTotal =
            incomeTotal + giftTotal + cardTotal;

        spendableDisplay.textContent =
            "$" + spendableTotal.toFixed(2);
    }
}


// Add regular income
const incomeForm =
    document.getElementById("income-form");

if (incomeForm) {

    incomeForm.addEventListener("submit", function(event) {

        event.preventDefault();

        let amount =
            parseFloat(
                document.getElementById("income-amount").value
            );

        if (!isNaN(amount) && amount >= 0) {

            incomeTotal += amount;

            updateIncomeSummary();

            this.reset();
        }
    });
}


// Add money gift
const giftForm =
    document.getElementById("gift-form");

if (giftForm) {

    giftForm.addEventListener("submit", function(event) {

        event.preventDefault();

        let amount =
            parseFloat(
                document.getElementById("gift-amount").value
            );

        if (!isNaN(amount) && amount >= 0) {

            giftTotal += amount;

            updateIncomeSummary();

            this.reset();
        }
    });
}


// Add gift card or prepaid card
const cardForm =
    document.getElementById("card-form");

if (cardForm) {

    cardForm.addEventListener("submit", function(event) {

        event.preventDefault();

        let amount =
            parseFloat(
                document.getElementById("card-balance").value
            );

        if (!isNaN(amount) && amount >= 0) {

            cardTotal += amount;

            updateIncomeSummary();

            this.reset();
        }
    });
}


updateIncomeSummary();


// ==============================
// ACCOUNT - CREATE ACCOUNT
// ==============================

const createAccountForm =
    document.getElementById("create-account-form");

if (createAccountForm) {

    createAccountForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const username =
            document.getElementById("username").value.trim();

        const email =
            document.getElementById("email").value.trim();

        const password =
            document.getElementById("password").value;

        const confirmPassword =
            document.getElementById("confirm-password").value;


        if (username === "" ||
            email === "" ||
            password === "" ||
            confirmPassword === "") {

            alert("Please complete all required account information.");

            return;
        }


        if (password !== confirmPassword) {

            alert("Passwords do not match.");

            return;
        }


        alert("Account created successfully.");

        this.reset();
    });
}


// ==============================
// ACCOUNT - LOGIN INFORMATION
// ==============================

const loginInformationForm =
    document.getElementById("login-information-form");

if (loginInformationForm) {

    loginInformationForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const username =
            document.getElementById("username").value.trim();

        const email =
            document.getElementById("email").value.trim();

        const password =
            document.getElementById("password").value;

        const confirmPassword =
            document.getElementById("confirm-password").value;


        if (username === "" ||
            email === "" ||
            password === "" ||
            confirmPassword === "") {

            alert("Please complete all login information.");

            return;
        }


        if (password !== confirmPassword) {

            alert("Passwords do not match.");

            return;
        }


        alert("Login information saved.");

        this.reset();
    });
}


// ==============================
// ACCOUNT - PERSONAL INFORMATION
// ==============================

const personalInformationForm =
    document.getElementById("personal-information-form");

if (personalInformationForm) {

    personalInformationForm.addEventListener("submit", function(event) {

        event.preventDefault();

        alert("Personal information saved.");

        this.reset();
    });
}


// ==============================
// ACCOUNT - CURRENCY PREFERENCE
// ==============================

const currencyForm =
    document.getElementById("currency-form");

if (currencyForm) {

    currencyForm.addEventListener("submit", function(event) {

        event.preventDefault();

        alert("Currency preference saved.");

    });
}


// ==============================
// ACCOUNT - PROFILE PICTURE
// ==============================

const profilePictureForm =
    document.getElementById("profile-picture-form");

if (profilePictureForm) {

    profilePictureForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const picture =
            document.getElementById("profile-picture");

        if (!picture.files.length) {

            alert("Please choose a profile picture.");

            return;
        }

        alert("Profile picture saved.");

    });
}


// ==============================
// ACCOUNT - LOG OUT
// ==============================

const logoutButton =
    document.getElementById("logout-button");

if (logoutButton) {

    logoutButton.addEventListener("click", function() {

        const confirmLogout =
            confirm("Do you want to log out?");

        if (confirmLogout) {

            alert("You have been logged out.");

        }
    });
}


// ==============================
// ACCOUNT - DEACTIVATE
// ==============================

const deactivateButton =
    document.getElementById("deactivate-button");

if (deactivateButton) {

    deactivateButton.addEventListener("click", function() {

        const confirmDeactivate =
            confirm(
                "Do you want to deactivate your account?"
            );

        if (confirmDeactivate) {

            alert("Your account has been deactivated.");

        }
    });
}


// ==============================
// ACCOUNT - DELETE
// ==============================

const deleteButton =
    document.getElementById("delete-account-button");

if (deleteButton) {

    deleteButton.addEventListener("click", function() {

        const confirmDelete =
            confirm(
                "Are you sure you want to permanently delete your account?"
            );

        if (confirmDelete) {

            alert("Your account has been deleted.");

        }
    });
}


// ==============================
// SETTINGS - NOTIFICATIONS
// ==============================

const notificationForm =
    document.getElementById("notification-form");

if (notificationForm) {

    notificationForm.addEventListener("submit", function(event) {

        event.preventDefault();

        alert("Notification preferences saved.");

    });
}


// ==============================
// SETTINGS - SECURITY
// ==============================

const securityForm =
    document.getElementById("security-form");

if (securityForm) {

    securityForm.addEventListener("submit", function(event) {

        event.preventDefault();

        alert("Security settings saved.");

    });
}


// ==============================
// SETTINGS - DISPLAY
// ==============================

const displayForm =
    document.getElementById("display-form");

if (displayForm) {

    displayForm.addEventListener("submit", function(event) {

        event.preventDefault();

        alert("Display preferences saved.");

    });
}


// ==============================
// SETTINGS - DATE & TIME
// ==============================

const dateTimeForm =
    document.getElementById("date-time-form");

if (dateTimeForm) {

    dateTimeForm.addEventListener("submit", function(event) {

        event.preventDefault();

        alert("Date and time settings saved.");

    });
}


// ==============================
// SETTINGS - PRIVACY
// ==============================

const privacyForm =
    document.getElementById("privacy-form");

if (privacyForm) {

    privacyForm.addEventListener("submit", function(event) {

        event.preventDefault();

        alert("Privacy settings saved.");

    });
}


// ==============================
// SETTINGS - BUDGET
// ==============================

const budgetPreferencesForm =
    document.getElementById("budget-preferences-form");

if (budgetPreferencesForm) {

    budgetPreferencesForm.addEventListener("submit", function(event) {

        event.preventDefault();

        alert("Budget preferences saved.");

    });
}


// ==============================
// LEAVING THE SITE
// ==============================

window.addEventListener("beforeunload", function(event) {

    event.preventDefault();

    event.returnValue = "";

});


// ==============================
// EXTERNAL LINKS
// ==============================

const links =
    document.querySelectorAll("a");

links.forEach(function(link) {

    link.addEventListener("click", function(event) {

        const destination =
            new URL(link.href, window.location.href);

        if (destination.origin !== window.location.origin) {

            const leaveSite =
                confirm(
                    "You are about to leave My Budget. You may not be logged out! Do you want to continue?"
                );

            if (!leaveSite) {

                event.preventDefault();
    // ==============================
// GOALS - ADD GOAL
// ==============================

const goalForm =
    document.getElementById("goal-form");

if (goalForm) {

    goalForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const goalName =
            document.getElementById("goal-name").value.trim();

        const goalAmount =
            parseFloat(
                document.getElementById("goal-amount").value
            );

        const goalProgress =
            parseFloat(
                document.getElementById("goal-progress").value
            );


        if (goalName === "") {

            alert("Please enter a goal name.");

            return;
        }


        if (isNaN(goalAmount) || goalAmount < 0) {

            alert("Please enter a valid goal amount.");

            return;
        }


        if (isNaN(goalProgress) || goalProgress < 0) {

            alert("Please enter a valid current progress amount.");

            return;
        }


        if (goalProgress > goalAmount) {

            alert("Current progress cannot be greater than the goal amount.");

            return;
        }


        alert("Goal added successfully.");

        this.reset();
    });
}


// ==============================
// GOALS - EDIT GOAL
// ==============================

const editGoalButton =
    document.getElementById("edit-goal-button");

if (editGoalButton) {

    editGoalButton.addEventListener("click", function() {

        alert("Goal editing selected.");

    });
}


// ==============================
// GOALS - UPDATE PROGRESS
// ==============================

const updateProgressButton =
    document.getElementById("update-progress-button");

if (updateProgressButton) {

    updateProgressButton.addEventListener("click", function() {

        alert("Goal progress update selected.");

    });
}


// ==============================
// GOALS - COMPLETE GOAL
// ==============================

const completeGoalButton =
    document.getElementById("complete-goal-button");

if (completeGoalButton) {

    completeGoalButton.addEventListener("click", function() {

        const confirmComplete =
            confirm("Mark this goal as completed?");

        if (confirmComplete) {

            alert("Goal marked as completed.");

        }
    });
}


// ==============================
// GOALS - DELETE GOAL
// ==============================

const deleteGoalButton =
    document.getElementById("delete-goal-button");

if (deleteGoalButton) {

    deleteGoalButton.addEventListener("click", function() {

        const confirmDelete =
            confirm("Are you sure you want to delete this goal?");

        if (confirmDelete) {

            alert("Goal deleted.");

        }
    });
}


// ==============================
// GOALS - SEARCH
// ==============================

const searchGoalsButton =
    document.getElementById("search-goals-button");

if (searchGoalsButton) {

    searchGoalsButton.addEventListener("click", function() {

        const searchValue =
            document.getElementById("search-value").value.trim();

        if (searchValue === "") {

            alert("Please enter something to search for.");

            return;
        }

        alert("Searching goals for: " + searchValue);

    });
}

            }
        }
    });
});
