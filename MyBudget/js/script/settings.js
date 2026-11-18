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
// SETTINGS - LANGUAGE
// ============================================================

const languageForm =
    document.getElementById("language-form");

const languageSelect =
    document.getElementById("language");

if (languageForm && languageSelect) {

    const account = getCurrentAccount();

    const savedLanguage =
        account?.preferences?.language ||
        localStorage.getItem("myBudgetLanguage") ||
        "en";

    languageSelect.value = savedLanguage;

    languageForm.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();

            const selectedLanguage =
                languageSelect.value;

            // Remember language for all visitors
            localStorage.setItem(
                "myBudgetLanguage",
                selectedLanguage
            );

            // Remember language on logged-in account
            const account = getCurrentAccount();

            if (account) {

                account.preferences =
                    account.preferences || {};

                account.preferences.language =
                    selectedLanguage;

                saveCurrentAccount(account);
            }

            alert("Language preference saved.");
        }
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

const account =
    getCurrentAccount();

if (!account) {
    return;
}

const twoFactor =
    document.getElementById(
        "two-factor"
    );

const loginAlerts =
    document.getElementById(
        "login-alerts"
    );

account.preferences.security = {
    twoFactor:
        twoFactor
            ? twoFactor.checked
            : false,

    loginAlerts:
        loginAlerts
            ? loginAlerts.checked
            : false
};

saveCurrentAccount(account);

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

const account =
    getCurrentAccount();

if (!account) {
    return;
}

const theme =
    document.getElementById(
        "theme"
    );

const layout =
    document.getElementById(
        "layout"
    );

const dashboardInfo =
    document.querySelector(
        'input[name="dashboard-info"]'
    );

account.preferences.display = {
    theme:
        theme
            ? theme.value
            : "light",

    layout:
        layout
            ? layout.value
            : "comfortable",

    dashboardInfo:
        dashboardInfo
            ? dashboardInfo.checked
            : true
};

saveCurrentAccount(account);
applyDisplaySettings();

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

const account =
    getCurrentAccount();

if (!account) {
    return;
}

const dateFormat =
    document.getElementById(
        "date-format"
    );
const timeFormat =
    document.getElementById(
        "time-format"
    );

const timezone =
    document.getElementById(
        "timezone"
    );

const weekStart =
    document.getElementById(
        "week-start"
    );

account.preferences.dateTime = {
    dateFormat:
        dateFormat
            ? dateFormat.value
            : "mm-dd-yyyy",

    timeFormat:
        timeFormat
            ? timeFormat.value
            : "24-hour",

    timezone:
        timezone
            ? timezone.value
            : "local",

    weekStart:
        weekStart
            ? weekStart.value
            : "sunday"
};

saveCurrentAccount(account);

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

const account =
    getCurrentAccount();

if (!account) {
    return;
}

const hideName =
    document.querySelector(
        'input[name="hide-name"]'
    );

const hideGifts =
    document.querySelector(
        'input[name="hide-gifts"]'
    );

account.preferences.privacy = {
    hideName:
        hideName
            ? hideName.checked
            : false,

    hideGifts:
        hideGifts
            ? hideGifts.checked
            : false
};

saveCurrentAccount(account);

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

const account =
    getCurrentAccount();

if (!account) {
    return;
}

const budgetPeriod =
    document.getElementById(
        "budget-period"
    );

const budgetWarning =
    document.getElementById(
        "budget-warning"
    );

account.preferences.budget = {
    period:
        budgetPeriod
            ? budgetPeriod.value
            : "monthly",

    warningThreshold:
        budgetWarning
            ? budgetWarning.value
            : "80"
};

saveCurrentAccount(account);

alert(
    "Budget preferences saved."
);

        }
    );

}

// ============================================================
// APPLY DISPLAY SETTINGS
// ============================================================

function applyDisplaySettings() {

    const account =
        getCurrentAccount();

    if (!account) {
        return;
    }

    const theme =
        account.preferences?.display?.theme;

    if (theme === "dark") {
        document.body.classList.add(
            "dark-theme"
        );
    } else {
        document.body.classList.remove(
            "dark-theme"
        );
    }
}
applyDisplaySettings();
// ============================================================
//END SETTING SCRIPT
// ============================================================
