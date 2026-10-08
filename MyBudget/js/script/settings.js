// ============================================================
// MY BUDGET - SETTINGS SCRIPT
// ============================================================

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
