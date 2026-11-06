
// ============================================================
// MY BUDGET - EXPENSES SCRIPT
// ============================================================

// ============================================================
// STORAGE
// ============================================================

const ACCOUNTS_STORAGE_KEY = "myBudgetAccounts";
const CURRENT_ACCOUNT_KEY = "myBudgetCurrentAccount";

function getAccounts() {
    try {
        return JSON.parse(
            localStorage.getItem(ACCOUNTS_STORAGE_KEY)
        ) || {};
    } catch (error) {
        console.error("Unable to read accounts:", error);
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
    const username = localStorage.getItem(CURRENT_ACCOUNT_KEY);

    if (!username) return null;

    const accounts = getAccounts();
    return accounts[username] || null;
}

function saveCurrentAccount(account) {
    const username = localStorage.getItem(CURRENT_ACCOUNT_KEY);

    if (!username) return;

    const accounts = getAccounts();
    accounts[username] = account;

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
// HELPER FUNCTIONS
// ============================================================

function formatMoney(amount) {
    return Number(amount).toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    });
}

function getToday() {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
}

function getAccountData() {
    const account = getCurrentAccount();

    if (!account) return null;

    if (!Array.isArray(account.expenses)) {
        account.expenses = [];
    }

    if (!Array.isArray(account.upcomingBills)) {
        account.upcomingBills = [];
    }

    return account;
}

// ============================================================
// ADD EXPENSE
// ============================================================

const expenseForm = document.getElementById("expense-form");

if (expenseForm) {
    expenseForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const account = getAccountData();

        if (!account) {
            alert("Please create or log into an account first.");
            return;
        }

        const name = document.getElementById("expense-name").value.trim();
        const category = document.getElementById("expense-category").value;
        const amount = parseFloat(document.getElementById("expense-amount").value);
        const payment = document.getElementById("expense-payment").value;
        const date = document.getElementById("expense-date").value;
        const notes = document.getElementById("expense-notes").value.trim();

        if (!name || !category || !date || !Number.isFinite(amount) || amount <= 0) {
            alert("Please enter valid expense information.");
            return;
        }

        const newExpense = {
            id: Date.now().toString(),
            name: name,
            category: category,
            amount: amount,
            payment: payment,
            date: date,
            notes: notes
        };

        account.expenses.push(newExpense);

        saveCurrentAccount(account);

        expenseForm.reset();
        document.getElementById("expense-date").value = getToday();

        renderExpenses();

        alert("Expense added successfully!");
    });
}

// ============================================================
// DISPLAY EXPENSE HISTORY
// ============================================================

function renderExpenses() {
    const history = document.getElementById("expense-history");
    const account = getAccountData();

    if (!history) return;

    history.replaceChildren();

    if (!account || account.expenses.length === 0) {
        const message = document.createElement("p");
        message.textContent = "No expenses have been added.";
        history.appendChild(message);
        updateExpenseTotals();
        return;
    }

    const sortedExpenses = [...account.expenses].sort(
        (a, b) => b.date.localeCompare(a.date)
    );

    sortedExpenses.forEach(function(expense) {
        const item = document.createElement("div");
        item.className = "expense-item";

        const heading = document.createElement("h3");
        heading.textContent = expense.name;

        const details = document.createElement("p");
        details.textContent =
            `${expenseCategoryNames[expense.category] || "Other"} | ` +
            `${expense.date} | ${expense.payment || "Other"}`;

        const amount = document.createElement("p");
        amount.textContent = formatMoney(expense.amount);

        const notes = document.createElement("p");
        notes.textContent = expense.notes || "";

        const deleteButton = document.createElement("button");
        deleteButton.type = "button";
        deleteButton.textContent = "Delete Expense";

        deleteButton.addEventListener("click", function() {
            deleteExpense(expense.id);
        });

        item.appendChild(heading);
        item.appendChild(details);
        item.appendChild(amount);

        if (expense.notes) {
            item.appendChild(notes);
        }

        item.appendChild(deleteButton);
        history.appendChild(item);
    });

    updateExpenseTotals();
}

// ============================================================
// DELETE EXPENSE
// ============================================================

function deleteExpense(id) {
    const account = getAccountData();

    if (!account) return;

    if (!confirm("Are you sure you want to delete this expense?")) {
        return;
    }

    account.expenses = account.expenses.filter(
        expense => expense.id !== id
    );

    saveCurrentAccount(account);
    renderExpenses();
}

// ============================================================
// EXPENSE CATEGORY TOTALS
// ============================================================

function updateExpenseTotals() {
    const account = getAccountData();

    const categoryContainer =
        document.getElementById("expense-categories");

    const totalElement =
        document.getElementById("total-expenses");

    const totals = {};

    Object.keys(expenseCategoryNames).forEach(function(category) {
        totals[category] = 0;
    });

    let grandTotal = 0;

    if (account) {
        account.expenses.forEach(function(expense) {
            const category = expense.category;

            if (totals[category] === undefined) {
                totals[category] = 0;
            }

            const amount = Number(expense.amount) || 0;

            totals[category] += amount;
            grandTotal += amount;
        });
    }

    if (categoryContainer) {
        categoryContainer.replaceChildren();

        Object.keys(expenseCategoryNames).forEach(function(category) {
            const paragraph = document.createElement("p");

            paragraph.textContent =
                `${expenseCategoryNames[category]}: ${formatMoney(totals[category])}`;

            categoryContainer.appendChild(paragraph);
        });
    }

    if (totalElement) {
        totalElement.textContent = formatMoney(grandTotal);
    }
}

// ============================================================
// ADD UPCOMING BILL
// ============================================================

const billForm = document.getElementById("upcoming-bill-form");

if (billForm) {
    billForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const account = getAccountData();

        if (!account) {
            alert("Please create or log into an account first.");
            return;
        }

        const name = document.getElementById("bill-name").value.trim();
        const category = document.getElementById("bill-category").value;
        const amount = parseFloat(document.getElementById("bill-amount").value);
        const dueDate = document.getElementById("bill-due-date").value;
        const frequency = document.getElementById("bill-frequency").value;

        if (!name || !dueDate || !Number.isFinite(amount) || amount <= 0) {
            alert("Please enter valid bill information.");
            return;
        }

        const newBill = {
            id: Date.now().toString(),
            name: name,
            category: category,
            amount: amount,
            dueDate: dueDate,
            frequency: frequency
        };

        account.upcomingBills.push(newBill);

        saveCurrentAccount(account);

        billForm.reset();

        renderBills();

        alert("Upcoming bill added successfully!");
    });
}

// ============================================================
// DISPLAY UPCOMING BILLS
// ============================================================

function renderBills() {
    const container = document.getElementById("upcoming-bills");
    const account = getAccountData();

    if (!container) return;

    container.replaceChildren();

    if (!account || account.upcomingBills.length === 0) {
        const message = document.createElement("p");
        message.textContent = "No upcoming bills.";
        container.appendChild(message);
        return;
    }

    const sortedBills = [...account.upcomingBills].sort(
        (a, b) => a.dueDate.localeCompare(b.dueDate)
    );

    sortedBills.forEach(function(bill) {
        const item = document.createElement("div");
        item.className = "bill-item";

        const heading = document.createElement("h3");
        heading.textContent = bill.name;

        const details = document.createElement("p");
        details.textContent =
            `${expenseCategoryNames[bill.category] || "Other"} | ` +
            `Due: ${bill.dueDate} | ${bill.frequency}`;

        const amount = document.createElement("p");
        amount.textContent = formatMoney(bill.amount);

        const deleteButton = document.createElement("button");
        deleteButton.type = "button";
        deleteButton.textContent = "Delete Bill";

        deleteButton.addEventListener("click", function() {
            deleteBill(bill.id);
        });

        item.appendChild(heading);
        item.appendChild(details);
        item.appendChild(amount);
        item.appendChild(deleteButton);

        container.appendChild(item);
    });
}

// ============================================================
// DELETE UPCOMING BILL
// ============================================================

function deleteBill(id) {
    const account = getAccountData();

    if (!account) return;

    if (!confirm("Are you sure you want to delete this bill?")) {
        return;
    }

    account.upcomingBills = account.upcomingBills.filter(
        bill => bill.id !== id
    );

    saveCurrentAccount(account);
    renderBills();
}

// ============================================================
// INITIALIZE EXPENSES PAGE
// ============================================================

document.addEventListener("DOMContentLoaded", function() {
    const dateInput = document.getElementById("expense-date");

    if (dateInput && !dateInput.value) {
        dateInput.value = getToday();
    }

    renderExpenses();
    renderBills();
});
