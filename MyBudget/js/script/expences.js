// ============================================================
// MY BUDGET -EXPENCES SCRIPT
// ============================================================

// ============================================================
// ADD EXPENSE
// ============================================================
document.addEventListener("DOMContentLoaded", function () {
    const expenseForm = document.getElementById("expense-form");
    const expenseSummary = document.getElementById("expense-summary");

    let expenses = [];

    expenseForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("expense-name").value.trim();
        const category = document.getElementById("expense-category").value;
        const amount = parseFloat(document.getElementById("expense-amount").value);
        const payment = document.getElementById("expense-payment").value;
        const date = document.getElementById("expense-date").value;
        const notes = document.getElementById("expense-notes").value.trim();

        // Validate expense details
        if (!name || !date || !Number.isFinite(amount) || amount <= 0) {
            alert("Please enter an expense name, a valid amount, and a date.");
            return;
        }

        // Create expense record
        const expense = {
            name: name,
            category: category,
            amount: amount,
            payment: payment,
            date: date,
            notes: notes
        };

        expenses.push(expense);

        // Display expense history
        displayExpenses();

        // Reset form
        expenseForm.reset();
    });

    function displayExpenses() {
        expenseHistory.replaceChildren();

        if (expenses.length === 0) {
            const message = document.createElement("p");
            message.textContent = "No expenses have been added.";
            expenseHistory.appendChild(message);
            return;
        }

        expenses.forEach(function (expense) {
            const entry = document.createElement("div");

            const name = document.createElement("h3");
            name.textContent = expense.name;

            const details = document.createElement("p");
            details.textContent =
                expense.category.charAt(0).toUpperCase() +
                expense.category.slice(1) +
                " | $" + expense.amount.toFixed(2) +
                " | " + expense.date +
                " | Paid by: " + expense.payment;

            entry.appendChild(name);
            entry.appendChild(details);

            if (expense.notes) {
                const notes = document.createElement("p");
                notes.textContent = "Notes: " + expense.notes;
                entry.appendChild(notes);
            }

            expenseHistory.appendChild(entry);
        });
    }
  
displayExpenses();

});

// ============================================================
// END - EXPENCES SCRIPT
// ============================================================
