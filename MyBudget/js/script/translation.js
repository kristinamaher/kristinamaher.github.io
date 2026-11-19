
 // ============================================================
 // MY BUDGET - TRANSLATION SYSTEM
 // ============================================================

const translation = {

    en: {
        "nav.home": "Home",
        "nav.account": "Account",
        "nav.goals": "Goals",
        "nav.income": "Income",
        "nav.expenses": "Expenses",
        "nav.summary": "Summary",
        "nav.settings": "Settings",
        "nav.about": "About",
        "nav.brand": "My Budget",

        "settings.title": "Settings",
        "settings.notifications": "Notification Preferences",
        "settings.language": "Language Preferences",
        "settings.security": "Security Settings",
        "settings.display": "Display Preferences",
        "settings.datetime": "Date & Time",
        "settings.privacy": "Privacy",
        "settings.budget": "Budget Preferences",

        "language.website": "Website Language:",
        "language.save": "Save Language Preference"
    },

    ja: {
        "nav.home": "ホーム",
        "nav.account": "アカウント",
        "nav.goals": "目標",
        "nav.income": "収入",
        "nav.expenses": "支出",
        "nav.summary": "概要",
        "nav.settings": "設定",
        "nav.about": "このサイトについて",
        "nav.brand": "マイバジェット",

        "settings.title": "設定",
        "settings.notifications": "通知設定",
        "settings.language": "言語設定",
        "settings.security": "セキュリティ設定",
        "settings.display": "表示設定",
        "settings.datetime": "日付と時刻",
        "settings.privacy": "プライバシー",
        "settings.budget": "予算設定",

        "language.website": "ウェブサイトの言語：",
        "language.save": "言語設定を保存"
    },

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
