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
          "frequency.daily": "Daily",
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

//Nav bar
"nav.home": "ホーム",
"nav.account": "アカウント",
"nav.goals": "目標",
"nav.income": "収入",
"nav.expenses": "支出",
"nav.summary": "概要",
"nav.settings": "設定",
"nav.about": "このアプリについて",
"nav.brand": "マイ予算",

//Language
"language.website": "表示言語：",
"language.save": "言語設定を保存",
"language.language": "言語設定",

//settings
"settings.title": "設定",
"settings.notifications": "通知設定",
"settings.security": "セキュリティ設定",
"settings.display": "表示設定",
"settings.datetime": "日付と時刻",
"settings.privacy": "プライバシー",
"settings.budget": "予算設定",
"settings.budgetAlerts": "予算アラート",
"settings.goalReminders": "目標のリマインダー",
"settings.monthlySummary": "月間財務サマリー",
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
"settings.hideName": "ダッシュボードで名前を非表示",
"settings.hideGifts": "ダッシュボードで贈り物を非表示",
"settings.savePrivacy": "プライバシー設定を保存",
"settings.budgetPeriod": "既定の予算期間：",
"settings.budgetWarning": "予算警告しきい値：",
"settings.saveBudget": "予算設定を保存",

//day of week
"week.weekStart": "週の開始曜日：",
"week.sunday": "日曜日",
"week.monday": "月曜日",

//Account
"account.title": "アカウント",
"account.createAccount": "アカウント作成",
"account.username": "ユーザー名：",
"account.email": "メールアドレス：",
"account.password": "パスワード：",
"account.confirmPassword": "パスワード確認：",
"account.login": "ログイン",
"account.personalinformation": "個人情報",
"account.firstName": "名：",
"account.lastName": "姓：",
"account.phoneNumber": "電話番号：",
"account.savepersonal": "個人情報を保存",
"account.travelInternational": "海外旅行",
"account.saveCurrencyPreferences": "通貨設定を保存",
"account.profilePicture": "プロフィール画像",
"account.displayDefaultPicture": "既定の画像を表示",
"account.useUploadedPicture": "アップロードした画像を使用",
"account.choosePicture": "プロフィール画像を選択：",
"account.savePicture": "プロフィール画像を保存",
"account.accountManagement": "アカウント管理",
"account.logout": "ログアウト",
"account.deactivateAccount": "アカウントを無効化",
"account.deleteAccount": "アカウントを削除",

//daytime
"daytime.date": "日付：",
"daytime.daytime": "日付と時刻",
"daytime.saveDisplay": "表示設定を保存",
"daytime.dateFormat": "日付形式：",
"daytime.dateDDMM": "DD-MM-YYYY",
"daytime.dateMMDD": "MM-DD-YYYY",
"daytime.dateYYYYMM": "YYYY-MM-DD",
"daytime.timeFormat": "時刻形式：",
"daytime.time24": "24時間表示",
"daytime.time12": "12時間表示",
"daytime.timezone": "タイムゾーン：",
"daytime.localTime": "現地時刻を使用",
"daytime.saveDateTime": "日付と時刻の設定を保存",
"daytime.jst": "日本標準時",
"daytime.mst": "MST",
"daytime.mdt": "MDT",
"daytime.utc": "UTC",

//currency
"currency.currencyPreference": "通貨設定",
"currency.preferredCurrency": "希望する通貨：",
"currency.usdollar": "米ドル ($)",
"currency.euro": "ユーロ (€)",
"currency.britishPound": "英ポンド (£)",
"currency.japaneseYen": "日本円 (¥)",
"currency.canadianDollar": "カナダドル (C$)",
"currency.australianDollar": "オーストラリアドル (A$)",
"currency.swissFranc": "スイスフラン (CHF)",
"currency.chineseYuan": "中国元 (¥)",
"currency.indianRupee": "インドルピー (₹)",
"currency.mexicanPeso": "メキシコペソ ($)",

//Country
"country.countryRegion": "国・地域：",
"country.australia": "オーストラリア",
"country.canada": "カナダ",
"country.japan": "日本",
"country.unitedArabEmirates": "アラブ首長国連邦",
"country.unitedKingdom": "イギリス",
"country.unitedStates": "アメリカ合衆国",

//summary
"summary.title": "概要",
"summary.incomeSummary": "収入概要",
"summary.totalIncome": "総収入",
"summary.expenseSummary": "支出概要",
"summary.budgetBalance": "予算残高",
"summary.remainingBalance": "残高",
"summary.goalSummary": "目標概要",
"summary.totalGoals": "目標数",
"summary.completeGoals": "達成済み目標",
"summary.expenseCategories": "支出カテゴリ",
"summary.noData": "データがありません",
"summary.financialOverview": "財務概要",
"summary.currentFinancialSituation": "現在の財務状況",

//Income
"income.title": "収入",
"income.addIncome": "収入を追加",
"income.incomeSource": "収入源",
"income.spendableFunds": "利用可能資金の概要",
"income.moneyGifts": "金銭の贈り物",
"income.giftFrom": "贈り主",
"income.addMoneyGift": "贈り物を追加",
"income.giftPrepaidCard": "ギフトカード・プリペイドカード",
"income.cardName": "カード名：",
"income.expirationDate": "有効期限",
"income.addCard": "カードを追加",
"income.spendableIncome": "利用可能資金：",

//Frequency
"frequency.amountFrequency": "頻度：",
"frequency.oneTime": "1回のみ",
"frequency.daily": "毎日",
"frequency.weekly": "毎週",
"frequency.biweekly": "隔週",
"frequency.monthly": "毎月",
"frequency.yearly": "毎年",

//common
"common.balance": "残高：",
"common.notes": "メモ：",
"common.other": "その他",
"common.amount": "金額：",

//Expenses
"expenses.title": "支出",
"expenses.addExpense": "支出を追加",
"expenses.expenseName": "支出名：",
"expenses.saveExpense": "支出を保存",
"expenses.billName": "請求名：",
"expenses.dueDate": "支払期限：",
"expenses.addBill": "請求を追加",
"expenses.history": "支出履歴",
"expenses.noHistory": "支出履歴はありません。",
"expenses.outgoing": "総支出",

//outgoing
"outgoing.upcomingBills": "今後の請求",
"outgoing.totalExpense": "総支出",
"outgoing.noUpcomingBills": "今後の請求はありません",

//payment
"payment.paymentMethod": "支払い方法：",
"payment.cash": "現金",
"payment.card": "カード",
"payment.check": "小切手",

//Categories
"category.title": "カテゴリ",
"category.expenseCategory": "支出カテゴリ",
"category.housing": "住居",
"category.food": "食費",
"category.transportation": "交通",
"category.utilities": "公共料金",
"category.healthcare": "医療",
"category.entertainment": "娯楽",
"category.subscription": "サブスクリプション",
"category.education": "教育",
"category.personal": "個人",
"category.travel": "旅行",
"category.shopping": "買い物",
"category.emergencyFund": "緊急資金",
"category.vehicle": "車両",
"category.retirement": "退職",

//goal type
"type.title": "目標タイプ：",
"type.insurance": "保険",
"type.savings": "貯蓄",
"type.spending": "支出",
"type.debt": "借金",
"type.investment": "投資",
"type.custom": "カスタム目標タイプ",
"type.placeholder": "独自のタイプを入力",

//Goals
"goals.title": "目標",
"goals.addGoal": "目標を追加",
"goals.name": "目標名：",
"goals.customCategory": "カスタムカテゴリ",
"goals.categoryPlaceholder": "独自のカテゴリを入力",
"goals.frequencey": "頻度",
"goals.select": "頻度を選択",
"goals.customFrequency": "カスタム頻度：",
"goals.customPlaceholder": "独自の頻度を入力",
"goals.goalAmountr": "目標金額：",
"goals.currentProgress": "現在の進捗：",
"goals.targetDate": "目標日：",

//Priority
"priority.title": "優先度：",
"priority.high": "高",
"priority.medium": "中",
"priority.low": "低"

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
