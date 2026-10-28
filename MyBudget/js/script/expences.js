// ============================================================
// MY BUDGET - EXPENSES SCRIPT
// ============================================================

// ============================================================
// STORAGE
// ============================================================

const ACCOUNTS_STORAGE_KEY =
    "myBudgetAccounts";

const CURRENT_ACCOUNT_KEY =
    "myBudgetCurrentAccount";

function getAccounts() {
    const storedAccounts =
        localStorage.getItem(
            ACCOUNTS_STORAGE_KEY
        );

    if (!storedAccounts) {
        return {};
    }

    try {
        return JSON.parse(storedAccounts);
    } catch (error) {
        console.error(
            "Unable to read stored accounts.",
            error
        );

        return {};
    }
}

function saveAccounts(accounts) {
    localStorage.setItem(
        ACCOUNTS_STORAGE_KEY,
        JSON.stringify(accounts)
    );
}

function getCurrentAccount() {
    const usernameKey =
        localStorage.getItem(
            CURRENT_ACCOUNT_KEY
        );

    if (!usernameKey) {
        return null;
    }

    const accounts =
        getAccounts();

    return accounts[usernameKey] || null;
}

function saveCurrentAccount(account) {
    const usernameKey =
        localStorage.getItem(
            CURRENT_ACCOUNT_KEY
        );

    if (!usernameKey) {
        return;
    }

    const accounts =
        getAccounts();

    accounts[usernameKey] =
        account;

    saveAccounts(accounts);
}

// ============================================================
// CATEGORY INFORMATION
// ============================================================

const expenseCategoryNames = {
    housing: "Housing",
    food: "Food",
    transportation: "Transportation",
    utilities: "Utilities",
    healthcare: "Healthcare",
    entertainment: "Entertainment",
    subscription: "Subscription",
    education: "Education",
    personal: "Personal",
    travel: "Travel",
    shopping: "Shopping",
    insurance: "Insurance",
    other: "Other"
};

// ============================================================
// ADD EXPENSE
// ============================================================

const expenseForm =
    document.getElementById(
        "expense-form"
    );

if (expenseForm) {
    expenseForm.addEventListener(
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

            const name =
                document
                    .getElementById(
                        "expense-name"
                    )
                    .value
 
