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
        "language.save": "Save Language Preference",
        "settings.budgetAlerts": "Budget alerts",
        "settings.goalReminders": "Goal reminders",
        "settings.monthlySummary": "Monthly financial summary",
        "settings.saveNotifications": "Save Notification Preferences"
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
     "settings.saveDisplay": "Save Display Preferences",

     "settings.dateFormat": "Date Format:",
     "settings.dateDDMM": "DD-MM-YYYY",
     "settings.dateYYYYMM": "YYYY-MM-DD",
     "settings.timeFormat": "Time Format:",
     "settings.time24": "24 Hour Time",
     "settings.time12": "12 Hour Time",
     "settings.timezone": "Time Zone:",
     "settings.localTime": "Use Local Time",
     "settings.weekStart": "First Day of the Week:",
     "settings.sunday": "Sunday",
     "settings.monday": "Monday",
     "settings.saveDateTime": "Save Date & Time Settings",

     "settings.hideName": "Hide name on dashboard",
     "settings.hideGifts": "Hide gifts from dashboard",
     "settings.savePrivacy": "Save Privacy Settings",

     "settings.budgetPeriod": "Default Budget Period:",
     "settings.weekly": "Weekly",
     "settings.monthly": "Monthly",
     "settings.budgetWarning": "Budget Warning Threshold:",
     "settings.saveBudget": "Save Budget Preferences",
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
    "settings.datetime": "日時設定",
    "settings.privacy": "プライバシー",
    "settings.budget": "予算設定",

    "language.website": "ウェブサイトの言語：",
    "language.save": "言語設定を保存",

    "settings.budgetAlerts": "予算アラート",
    "settings.goalReminders": "目標リマインダー",
    "settings.monthlySummary": "月次財務サマリー",
    "settings.saveNotifications": "通知設定を保存",

    "settings.twoFactor": "二要素認証",
    "settings.loginAlerts": "ログイン通知",
    "settings.saveSecurity": "セキュリティ設定を保存",

    "settings.theme": "テーマ：",
    "settings.light": "ライト",
    "settings.dark": "ダーク",
    "settings.layout": "レイアウト：",
    "settings.comfortable": "標準",
    "settings.compact": "コンパクト",
    "settings.dashboardInfo": "ダッシュボードに財務情報を表示",
    "settings.saveDisplay": "表示設定を保存",

    "settings.dateFormat": "日付形式：",
    "settings.dateMMDD": "月-日-年",
    "settings.dateDDMM": "日-月-年",
    "settings.dateYYYYMM": "年-月-日",
    "settings.timeFormat": "時刻形式：",
    "settings.time24": "24時間表示",
    "settings.time12": "12時間表示",
    "settings.timezone": "タイムゾーン：",
    "settings.localTime": "ローカル時間を使用",
    "settings.weekStart": "週の開始日：",
    "settings.sunday": "日曜日",
    "settings.monday": "月曜日",
    "settings.saveDateTime": "日時設定を保存",

    "settings.hideName": "ダッシュボードで名前を非表示",
    "settings.hideGifts": "ダッシュボードでギフトを非表示",
    "settings.savePrivacy": "プライバシー設定を保存",

    "settings.budgetPeriod": "既定の予算期間：",
    "settings.weekly": "毎週",
    "settings.monthly": "毎月",
    "settings.budgetWarning": "予算警告しきい値：",
    "settings.saveBudget": "予算設定を保存"
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
