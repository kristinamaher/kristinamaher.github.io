// ============================================================
// MY BUDGET - SETTINGS SCRIPT
// ============================================================

// ============================================================
// STORAGE
// ============================================================

const ACCOUNTS_STORAGE_KEY =
    "myBudgetAccounts";

const CURRENT_ACCOUNT_KEY =
    "myBudgetCurrentAccount";

function getCurrentAccount() {

    const username =
        localStorage.getItem(
            CURRENT_ACCOUNT_KEY
        );

    if (!username) {
        return null;
    }

    const accounts =
        JSON.parse(
            localStorage.getItem(
                ACCOUNTS_STORAGE_KEY
            )
        ) || {};

    return accounts[username] || null;
}

function saveCurrentAccount(account) {

    const username =
        localStorage.getItem(
            CURRENT_ACCOUNT_KEY
        );

    if (!username) {
        return;
    }

    const accounts =
        JSON.parse(
            localStorage.getItem(
                ACCOUNTS_STORAGE_KEY
            )
        ) || {};

    accounts[username] =
        account;

    localStorage.setItem(
        ACCOUNTS_STORAGE_KEY,
        JSON.stringify(accounts)
    );
}

// ============================================================
// SETTINGS - NOTIFICATIONS
// ============================================================

const notificationForm =
    document.getElementById(
        "notification-form"
    );

if (notificationForm) {

    notificationForm.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();

const account =
    getCurrentAccount();

if (!account) {
    return;
}

const budgetAlerts =
    document.querySelector(
        'input[name="budget-alerts"]'
    );

const goalReminders =
    document.querySelector(
        'input[name="goal-reminders"]'
    );

const monthlySummary =
    document.querySelector(
        'input[name="monthly-summary"]'
    );

account.preferences.notifications = {
    budgetAlerts:
        budgetAlerts
            ? budgetAlerts.checked
            : false,

    goalReminders:
        goalReminders
            ? goalReminders.checked
            : false,

    monthlySummary:
        monthlySummary
            ? monthlySummary.checked
            : false
};

saveCurrentAccount(account);

alert(
    "Notification preferences saved."
);

        }
    );

}

// ============================================================
// SETTINGS - SECURITY
// ============================================================

const securityForm =
    document.getElementById(
        "security-form"
    );

if (securityForm) {

    securityForm.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();

            alert(
                "Security settings saved."
            );

        }
    );

}

// ============================================================
// SETTINGS - DISPLAY
// ============================================================

const displayForm =
    document.getElementById(
        "display-form"
    );

if (displayForm) {

    displayForm.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();

            alert(
                "Display preferences saved."
            );

        }
    );

}

// ============================================================
// SETTINGS - DATE & TIME
// ============================================================

const dateTimeForm =
    document.getElementById(
        "date-time-form"
    );

if (dateTimeForm) {

    dateTimeForm.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();

            alert(
                "Date and time settings saved."
            );

        }
    );

}

// ============================================================
// SETTINGS - PRIVACY
// ============================================================

const privacyForm =
    document.getElementById(
        "privacy-form"
    );

if (privacyForm) {

    privacyForm.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();

            alert(
                "Privacy settings saved."
            );

        }
    );

}

// ============================================================
// SETTINGS - BUDGET
// ============================================================

const budgetPreferencesForm =
    document.getElementById(
        "budget-preferences-form"
    );

if (budgetPreferencesForm) {

    budgetPreferencesForm.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();

            alert(
                "Budget preferences saved."
            );

        }
    );

}

// ============================================================
//END SETTING SCRIPT
// ============================================================
