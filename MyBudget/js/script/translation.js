 // ============================================================
 // MY BUDGET - TRANSLATION SYSTEM
 // ============================================================

const translation = {

    en: {
///Nav bar
        "nav.home": "Home",
        "nav.account": "Account",
        "nav.goals": "Goals",
        "nav.income": "Income",
        "nav.expenses": "Expenses",
        "nav.summary": "Summary",
        "nav.settings": "Settings",
        "nav.about": "About",
        "nav.brand": "My Budget",   
//Language
        "language.website": "Website Language:",
        "language.save": "Save Language Preference",
        "language.language": "Language Preferences",  
//settings
        "settings.title": "Settings",
        "settings.notifications": "Notification Preferences",
        "settings.security": "Security Settings",
        "settings.display": "Display Preferences",
        "settings.datetime": "Date & Time",
        "settings.privacy": "Privacy",
        "settings.budget": "Budget Preferences",
        "settings.budgetAlerts": "Budget alerts",
        "settings.goalReminders": "Goal reminders",
        "settings.monthlySummary": "Monthly financial summary",
        "settings.saveNotifications": "Save Notification Preferences",
        "settings.twoFactor": "Two-factor authentication",
        "settings.loginAlerts": "Login alerts",
        "settings.saveSecurity": "Save Security Settings",
        "settings.theme": "Theme:",
        "settings.light": "Light",
        "settings.dark": "Dark",
        "settings.layout": "Layout:",
        "settings.comfortable": "Comfortable",
        "settings.compact": "Compact",
        "settings.dashboardInfo": "Show financial information on dashboard",
        "settings.hideName": "Hide name on dashboard",
        "settings.hideGifts": "Hide gifts from dashboard",
        "settings.savePrivacy": "Save Privacy Settings",
        "settings.budgetPeriod": "Default Budget Period:",
        "settings.budgetWarning": "Budget Warning Threshold:",
        "settings.saveBudget": "Save Budget Preferences",
//day of week
        "week.weekStart": "First Day of the Week:",
        "week.sunday": "Sunday",
        "week.monday": "Monday",
//Account
        "account.title": "Account",
        "account.createAccount": "Create Account",
        "account.username": "Username:",
        "account.email": "Email Address:",
        "account.password": "Password:",
        "account.confirmPassword": "Confirm Password:",
        "account.login": "Login",
        "account.personalinformation": "Personal Information",
        "account.firstName": "First Name:",
        "account.lastName": "Last Name:",
        "account.phoneNumber": "Phone Number:",
        "account.savepersonal": "Save Personal Information",
        "account.travelInternational": "International Travel",
        "account.saveCurrencyPreferences": "Save Currency Preference",
        "account.profilePicture": "Profile Picture",
        "account.displayDefaultPicture": "Display Default Picture",
        "account.useUploadedPicture": "Use Uploaded Picture",
        "account.choosePicture": "Choose a Profile Picture:",
        "account.savePicture": "Save Profile Picture",
        "account.accountManagement": "Account Management",
        "account.logout": "Log Out",
        "account.deactivateAccount": "Deactivate Account",
        "account.deleteAccount": "Delete Account",
//daytime
        "daytime.date": "Date:",
        "daytime.daytime": "Date and Time",
        "daytime.saveDisplay": "Save Display Preferences",
        "daytime.dateFormat": "Date Format:",
        "daytime.dateDDMM": "DD-MM-YYYY",
        "daytime.dateMMDD": "MM-DD-YYYY",
        "daytime.dateYYYYMM": "YYYY-MM-DD",
        "daytime.timeFormat": "Time Format:",
        "daytime.time24": "24 Hour Time",
        "daytime.time12": "12 Hour Time",
        "daytime.timezone": "Time Zone:",
        "daytime.localTime": "Use Local Time",
        "daytime.saveDateTime": "Save Date and Time Settings",
        "daytime.jst": "JST",
        "daytime.mst": "MST",
        "daytime.mdt": "MDT",
        "daytime.utc": "UTC",
//currency
        "currency.currencyPreference": "Currency Preference",
        "currency.preferredCurrency": "Preferred Currency:",
        "currency.usdollar": "US Dollar ($)",
        "currency.euro": "Euro (€)",
        "currency.britishPound": "British Pound (£)",
        "currency.japaneseYen": "Japanese Yen (¥)",
        "currency.canadianDollar": "Canadian Dollar (C$)",
        "currency.australianDollar": "Australian Dollar (A$)",
        "currency.swissFranc": "Swiss Franc (CHF)",
        "currency.chineseYuan": "Chinese Yuan (¥)",
        "currency.indianRupee": "Indian Rupee (₹)",
        "currency.mexicanPeso": "Mexican Peso ($)",
 //Country
        "country.countryRegion": "Country/Region:",
        "country.australia": "Australia",
        "country.canada": "Canada",
        "country.japan": "Japan",
        "country.unitedArabEmirates": "United Arab Emirates",
        "country.unitedKingdom": "United Kingdom",
        "country.unitedStates": "United States", 
 //summary page
         "summary.title": "Summary",
         "summary.incomeSummary": "Income Summary",
         "summary.totalIncome": "Total Income",
         "summary.expenseSummary": "Expense Summary",
         "summary.budgetBalance": "Budget Balance",
         "summary.remainingBalance": "Remaining Balance",
         "summary.goalSummary": "Goal Summary",
         "summary.totalGoals": "Total Goals",
         "summary.completeGoals": "Completed Goals",   
         "summary.expenseCategories": "Expense Categories",
         "summary.noData": "No data available",
         "summary.financialOverview": "Financial Overview",
         "summary.currentFinancialSituation": "Current financial situation",
 //Income
          "income.title": "Income",
          "income.addIncome": "Add Income",
          "income.incomeSource": "Income Source",
          "income.spendableFunds": "Spendable Funds Overview",
          "income.moneyGifts": "Money Gifts",
          "income.giftFrom": "Gift From",
          "income.addMoneyGift": "Add Money Gift",
          "income.giftPrepaidCard": "Gift And Prepaid Cards",
          "income.cardName": "Card Name:",
          "income.expirationDate": "Expiration Date",
          "income.addCard": "Add Card",
          "income.spendableIncome": "Spendable Funds:",
//Frequency
          "frequency.amountFrequency": "Frequency:",
          "frequency.oneTime": "One Time",
          "frequency.daily": "Daily"
          "frequency.weekly": "Weekly",
          "frequency.biweekly": "Biweekly",
          "frequency.monthly": "Monthly",
          "frequency.yearly": "Yearly",
//common 
          "common.balance": "Balance:",
          "common.notes": "Notes:",
          "common.other": "Other",
          "common.amount": "Amount:",
 //Expenses
          "expenses.title": "Expenses",
          "expenses.addExpense": "Add Espense",
          "expenses.expenseName": "Expense Name:",
          "expenses.saveExpense": "Save Espense",
          "expenses.billName": "Bill Name:",
          "expenses.saveExpense": "Save Espense",
          "expenses.dueDate": "Due Date:",
          "expenses.addBill": "Add Bill",
          "expenses.history": "Expense History",
          "expenses.noHistory": "No expenses have been added.",
          "expenses.outgoing": "Total Outgoing",
 //expense and summary (in common)
           "outgoing.upcomingBills": "Upcoming Bills",
           "outgoing.totalExpense": "Total Expenses", 
           "outgoing.noUpcomingBills": "no upcoming Bills",   
  //payment
          "payment.paymentMethod": "Payment Method:",
           "payment.cash": "Cash",
           "payment.card": "Card",
           "payment.check": "Check",
 //Categories
           "category.title": "Category",
           "category.expenseCategory": "Expense Categories",
           "category.housing": "Housing",
           "category.food": "Food",
           "category.transportation": "Transportation",
           "category.utilities": "Utilities",
           "category.healthcare": "Healthcare",
           "category.entertainment": "Entertainment",
           "category.subscription": "Subscription",
           "category.education": "Education",
           "category.personal": "Personal",
           "category.travel": "Travel",
           "category.shopping": "Shopping",
           "category.emergencyFund": "Energency Fund",
           "category.vehicle": "Vehicle",
           "category.retirement": "Retirement",
 //goal type
           "type.title": "Goal Type:",
           "type.insurance": "Insurance",
           "type.savings": "Savings",
           "type.spending": "Spending",
           "type.debt": "Debt",
           "type.investment": "Investment",
           "type.custom": "Custom Goal Type",
           "type.placeholder": "Enter your own type",
  //Goals
           "goals.title": "Goals",
           "goals.addGoal": "Add A Goal",
           "goals.name": "Goal Name:",
           "goals.customCategory": "Custom Category",
           "goals.categoryPlaceholder": "Enter your own category",
           "goals.frequencey": "How Often?",
           "goals.select": "Select Frequency",
           "goals.customFrequency": "Custom Frequency Occurrence:",
           "goals.customPlaceholder": "Enter your own frequency",
           "goals.goalAmountr": "Goal Amount:",
           "goals.customPlaceholder": "Enter your own frequency",
           "goals.currentProgress": "Current Progress:",
           "goals.targetDate": "Target Date",
//Priority
           "priority.title": "Priority:",
            "priority.high": "High",
            "priority.medium": "Medium",
            "priority.low": "Low",
    },
 //Japanese
   ja: {
}
};

// ============================================================
// GET SAVED LANGUAGE
// ============================================================

function getSavedLanguage() {
    return localStorage.getItem("myBudgetLanguage") || "en";
}

// ============================================================
// APPLY TRANSLATIONS
// ============================================================

function applyTranslations() {

    const language = getSavedLanguage();

    const selectedTranslations =
        translation[language] || translation.en;

    document.documentElement.lang = language;

    document.querySelectorAll("[data-translate]").forEach(element => {

        const key = element.getAttribute("data-translate");

        if (Object.prototype.hasOwnProperty.call(selectedTranslations, key)) {
            element.textContent = selectedTranslations[key];
        }

    });

}

// ============================================================
// INITIALIZE TRANSLATIONS
// ============================================================

document.addEventListener("DOMContentLoaded", function() {
    applyTranslations();
});
