/* ============================================================
 MY BUDGET - EXPENSES SCRIPT
============================================================ */

document.addEventListener("DOMContentLoaded", function () {

    // Storage keys
    const EXPENSES_KEY = "myBudgetExpenses";
    const BILLS_KEY = "myBudgetBills";

    // Forms
    const expenseForm = document.getElementById("expense-form");
    const billForm = document.getElementById("upcoming-bill-form");

    // Display containers
    const categoriesContainer = document.getElementById("expense-categories");
    const summaryContainer = document.getElementById("expense-summary");
    const historyContainer = document.getElementById("expense-history");
    const billsContainer = document.getElementById("upcoming-bills");

    // Category names
    const categories = {
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

    // Load saved data
    let expenses = loadData(EXPENSES_KEY);
    let bills = loadData(BILLS_KEY);

    function loadData(key) {
        try {
            const savedData = localStorage.getItem(key);
            const parsedData = savedData ? JSON.parse(savedData) : [];

            return Array.isArray(parsedData) ? parsedData : [];
        } catch (error) {
            console.error("Could not load saved data:", error);
            return [];
        }
    }

    function saveData(key, data) {
        try {
            localStorage.setItem(key, JSON.stringify(data));
        } catch (error) {
            console.error("Could not save data:", error);
            alert("Your data could not be saved. Check your browser storage.");
        }
    }

    function formatMoney(amount) {
        return Number(amount).toLocaleString("en-US", {
            style: "currency",
            currency: "USD"
        });
    }

    function formatDate(dateString) {
        if (!dateString) {
            return "No date";
        }

        // Parse the date as a local calendar date.
        const parts = dateString.split("-").map(Number);

        if (parts.length !== 3 || parts.some(Number.isNaN)) {
            return dateString;
        }

        const date = new Date(parts[0], parts[1] - 1, parts[2]);

        return date.toLocaleDateString("en-US");
    }

    function escapeHTML(value) {
        return String(value).replace(/[&<>"']/g, function (character) {
            const replacements = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#39;"
            };

            return replacements[character];
        });
    }

    function getFieldValue(id) {
        return document.getElementById(id).value.trim();
    }

    function getValidAmount(id) {
        const value = document.getElementById(id).value.trim();
        const amount = Number(value);

        if (value === "" || !Number.isFinite(amount) || amount <= 0) {
            alert("Please enter an amount greater than $0.00.");
            return null;
        }

        return Math.round(amount * 100) / 100;
    }

/* ============================================================
 ADD EXPENSE
============================================================ */

    expenseForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = getFieldValue("expense-name");
        const category = getFieldValue("expense-category");
        const amount = getValidAmount("expense-amount");
        const payment = getFieldValue("expense-payment");
        const date = getFieldValue("expense-date");
        const notes = getFieldValue("expense-notes");

        if (!name) {
            alert("Please enter an expense name.");
            return;
        }

        if (amount === null) {
            return;
        }

        if (!Object.prototype.hasOwnProperty.call(categories, category)) {
            alert("Please select a valid expense category.");
            return;
        }

        if (!date) {
            alert("Please select an expense date.");
            return;
        }

        const expense = {
            id: Date.now().toString() + Math.random().toString(36).slice(2),
            name: name,
            category: category,
            amount: amount,
            payment: payment,
            date: date,
            notes: notes
        };

        expenses.push(expense);

        saveData(EXPENSES_KEY, expenses);

        expenseForm.reset();

        renderCategories();
        renderTotalOutgoing();
        renderExpenseHistory();
    });

/* ============================================================
EXPENSE CATEGORIES
============================================================ */

    function renderCategories() {
        const totals = {};

        // Start each category at zero.
        Object.keys(categories).forEach(function (category) {
            totals[category] = 0;
        });

        // Add expenses to their corresponding categories.
        expenses.forEach(function (expense) {
            if (Object.prototype.hasOwnProperty.call(
                totals,
                expense.category
            )) {
                totals[expense.category] += Number(expense.amount) || 0;
            }
        });

        categoriesContainer.replaceChildren();

        Object.keys(categories).forEach(function (category) {
            const paragraph = document.createElement("p");

            paragraph.textContent =
                categories[category] + ": " +
                formatMoney(Math.round(totals[category] * 100) / 100);

            categoriesContainer.appendChild(paragraph);
        });
    }

/* ============================================================
TOTAL OUTGOING
============================================================ */

    function renderTotalOutgoing() {
        const total = expenses.reduce(function (sum, expense) {
            return sum + (Number(expense.amount) || 0);
        }, 0);

        summaryContainer.replaceChildren();

        const paragraph = document.createElement("p");

        paragraph.textContent =
            "Total Expenses: " +
            formatMoney(Math.round(total * 100) / 100);

        summaryContainer.appendChild(paragraph);
    }

/* ============================================================
 UPCOMING BILLS
============================================================ */

    billForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = getFieldValue("bill-name");
        const category = getFieldValue("bill-category");
        const amount = getValidAmount("bill-amount");
        const dueDate = getFieldValue("bill-due-date");
        const frequency = getFieldValue("bill-frequency");

        const validBillCategories = [
            "housing",
            "utilities",
            "subscription",
            "insurance",
            "transportation",
            "other"
        ];

        const validFrequencies = [
            "one-time",
            "weekly",
            "monthly",
            "yearly"
        ];

        if (!name) {
            alert("Please enter a bill name.");
            return;
        }

        if (amount === null) {
            return;
        }

        if (!validBillCategories.includes(category)) {
            alert("Please select a valid bill category.");
            return;
        }

        if (!dueDate) {
            alert("Please select a bill due date.");
            return;
        }

        if (!validFrequencies.includes(frequency)) {
            alert("Please select a valid bill frequency.");
            return;
        }

        const bill = {
            id: Date.now().toString() + Math.random().toString(36).slice(2),
            name: name,
            category: category,
            amount: amount,
            dueDate: dueDate,
            frequency: frequency
        };

        bills.push(bill);

        saveData(BILLS_KEY, bills);

        billForm.reset();

        renderUpcomingBills();
    });

    function renderUpcomingBills() {
        billsContainer.replaceChildren();

        if (bills.length === 0) {
            const paragraph = document.createElement("p");
            paragraph.textContent = "No upcoming bills.";
            billsContainer.appendChild(paragraph);
            return;
        }

        // Sort bills by due date, earliest first.
        const sortedBills = [...bills].sort(function (a, b) {
            return a.dueDate.localeCompare(b.dueDate);
        });

        sortedBills.forEach(function (bill) {
            const article = document.createElement("article");

            const heading = document.createElement("h3");
            heading.textContent = bill.name;

            const details = document.createElement("p");
            details.textContent =
                "Category: " + (categories[bill.category] || "Other") +
                " | Amount: " + formatMoney(bill.amount) +
                " | Due: " + formatDate(bill.dueDate) +
                " | Frequency: " + bill.frequency.replace("-", " ");

            const deleteButton = document.createElement("button");
            deleteButton.type = "button";
            deleteButton.textContent = "Delete Bill";
            deleteButton.addEventListener("click", function () {
                bills = bills.filter(function (item) {
                    return item.id !== bill.id;
                });

                saveData(BILLS_KEY, bills);
                renderUpcomingBills();
            });

            article.appendChild(heading);
            article.appendChild(details);
            article.appendChild(deleteButton);

            billsContainer.appendChild(article);
        });
    }

 /* ============================================================
EXPENSE HISTORY
============================================================ */

    function renderExpenseHistory() {
        historyContainer.replaceChildren();

        if (expenses.length === 0) {
            const paragraph = document.createElement("p");
            paragraph.textContent = "No expenses have been added.";
            historyContainer.appendChild(paragraph);
            return;
        }

        // Display the most recent expenses first.
        const sortedExpenses = [...expenses].sort(function (a, b) {
            return b.date.localeCompare(a.date) ||
                b.id.localeCompare(a.id);
        });

        sortedExpenses.forEach(function (expense) {
            const article = document.createElement("article");

            const heading = document.createElement("h3");
            heading.textContent = expense.name;

            const details = document.createElement("p");
            details.textContent =
                "Category: " + (categories[expense.category] || "Other") +
                " | Amount: " + formatMoney(expense.amount) +
                " | Payment: " + expense.payment +
                " | Date: " + formatDate(expense.date);

            article.appendChild(heading);
            article.appendChild(details);

            if (expense.notes) {
                const notes = document.createElement("p");
                notes.textContent = "Notes: " + expense.notes;
                article.appendChild(notes);
            }

            const deleteButton = document.createElement("button");
            deleteButton.type = "button";
            deleteButton.textContent = "Delete Expense";

            deleteButton.addEventListener("click", function () {
                expenses = expenses.filter(function (item) {
                    return item.id !== expense.id;
                });

                saveData(EXPENSES_KEY, expenses);

                renderCategories();
                renderTotalOutgoing();
                renderExpenseHistory();
            });

            article.appendChild(deleteButton);
            historyContainer.appendChild(article);
        });
    }

/* ============================================================
 INITIAL DISPLAY
============================================================ */

    renderCategories();
    renderTotalOutgoing();
    renderUpcomingBills();
    renderExpenseHistory();
});

/* ============================================================
END - EXPENSES SCRIPT
============================================================ */
