// ============================================================
// MY BUDGET - SUMMARY SCRIPT
// ============================================================

// ============================================================
// STORAGE KEYS
// ============================================================

const ACCOUNTS_STORAGE_KEY =
    "myBudgetAccounts";

const CURRENT_ACCOUNT_KEY =
    "myBudgetCurrentAccount";


// ============================================================
// GET CURRENT ACCOUNT
// ============================================================

function getCurrentAccount() {
    const usernameKey =
        localStorage.getItem(
            CURRENT_ACCOUNT_KEY
        );

    if (!usernameKey) {
        return null;
    }

    try {
        const accounts =
            JSON.parse(
                localStorage.getItem(
                    ACCOUNTS_STORAGE_KEY
                )
            ) || {};

        return accounts[usernameKey] || null;

    } catch (error) {
        console.error(
            "Could not load account information:",
            error
        );

        return null;
    }
}


// ============================================================
// GET SAVED GOALS
// ============================================================

function getSavedGoals() {

    const account =
        getCurrentAccount();

    if (!account) {
        return [];
    }

    return account.goals || [];
}

// ============================================================
// GET INCOME TOTAL
// ============================================================

function getIncomeTotal() {

    const account =
        getCurrentAccount();

    if (!account) {
        return 0;
    }

    return (
        (Number(account.incomeTotal) || 0) +
        (Number(account.giftTotal) || 0) +
        (Number(account.cardTotal) || 0)
    );
}

// ============================================================
// GET EXPENSE TOTAL
// ============================================================

function getExpenseTotal(account) {
    if (
        !account ||
        !Array.isArray(account.expenses)
    ) {
        return 0;
    }

    return account.expenses.reduce(
        function(total, expense) {
            const amount =
                Number(expense.amount);

            return (
                total +
                (
                    Number.isFinite(amount)
                        ? amount
                        : 0
                )
            );
        },
        0
    );
}


// ============================================================
// DISPLAY INCOME
// ============================================================

function formatCurrency(amount) {

    const account =
        getCurrentAccount();

    const currency =
        account?.preferences?.currency ||
        "usd";

    return new Intl.NumberFormat(
        "en-US",
        {
            style: "currency",
            currency:
                currency.toUpperCase()
        }
    ).format(amount);
}

function displayIncomeSummary(
    incomeTotal
) {
    const incomeDisplay =
        document.getElementById(
            "total-income"
        );

    if (incomeDisplay) {
            incomeDisplay.textContent = 
                formatCurrency(incomeTotal);
    }
}


// ============================================================
// DISPLAY EXPENSES
// ============================================================

function displayExpenseSummary(
    expenseTotal
) {
    const expenseDisplay =
        document.getElementById(
            "total-expenses"
        );

    if (expenseDisplay) {
       expenseDisplay.textContent =
           formatCurrency(expenseTotal);
    }
}


// ============================================================
// DISPLAY REMAINING BALANCE
// ============================================================

function displayRemainingBalance(
    incomeTotal,
    expenseTotal
) {
    const balanceDisplay =
        document.getElementById(
            "remaining-balance"
        );

    if (!balanceDisplay) {
        return;
    }

    const remainingBalance =
        incomeTotal -
        expenseTotal;

    balanceDisplay.textContent =
        formatCurrency(
            remainingBalance
    );
}


// ============================================================
// DISPLAY GOAL SUMMARY
// ============================================================

function displayGoalSummary() {
    const goals =
        getSavedGoals();

    const completedGoalCount =
        goals.filter(
            function(goal) {
                return (
                    goal.status ===
                    "completed"
                );
            }
        ).length;

    const totalGoalsDisplay =
        document.getElementById(
            "total-goals"
        );

    const completedGoalsDisplay =
        document.getElementById(
            "completed-goals"
        );

    if (totalGoalsDisplay) {
        totalGoalsDisplay.textContent =
            goals.length;
    }

    if (completedGoalsDisplay) {
        completedGoalsDisplay.textContent =
            completedGoalCount;
    }
}


// ============================================================
// DISPLAY UPCOMING BILLS COUNT
// ============================================================

function displayUpcomingBills(
    account
) {
    const billsDisplay =
        document.getElementById(
            "upcoming-bills-count"
        );

    if (!billsDisplay) {
        return;
    }

    const billCount =
        account &&
        Array.isArray(
            account.upcomingBills
        )
            ? account.upcomingBills.length
            : 0;

    billsDisplay.textContent =
        billCount;
}


// ============================================================
// DISPLAY EXPENSE CATEGORIES
// ============================================================

function displayExpenseCategories(
    account
) {
    const categoryContainer =
        document.getElementById(
            "summary-expense-categories"
        );

    if (!categoryContainer) {
        return;
    }

    const categoryNames = {
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

    const categoryTotals = {};

    Object.keys(
        categoryNames
    ).forEach(
        function(category) {
            categoryTotals[category] = 0;
        }
    );

    if (
        account &&
        Array.isArray(account.expenses)
    ) {
        account.expenses.forEach(
            function(expense) {
                const category =
                    expense.category;

                const amount =
                    Number(expense.amount);

                if (
                    categoryTotals[category] !==
                        undefined &&
                    Number.isFinite(amount)
                ) {
                    categoryTotals[category] +=
                        amount;
                }
            }
        );
    }

    categoryContainer.innerHTML = "";

    let hasExpenses = false;

    Object.keys(
        categoryNames
    ).forEach(
        function(category) {
            const total =
                categoryTotals[category];

            if (total <= 0) {
                return;
            }

            hasExpenses = true;

            const categoryDisplay =
                document.createElement(
                    "p"
                );

            categoryDisplay.textContent =
                categoryNames[category] +
                ": " +
                formatCurrency(total);

            categoryContainer.appendChild(
                categoryDisplay
            );
        }
    );

    if (!hasExpenses) {
        const emptyMessage =
            document.createElement(
                "p"
            );

        emptyMessage.textContent =
            "No expense data available.";

        categoryContainer.appendChild(
            emptyMessage
        );
    }
}


// ============================================================
// DISPLAY FINANCIAL OVERVIEW
// ============================================================

function displayFinancialOverview(
    incomeTotal,
    expenseTotal
) {
    const overviewDisplay =
        document.getElementById(
            "financial-overview"
        );

    if (!overviewDisplay) {
        return;
    }

    const remainingBalance =
        incomeTotal -
        expenseTotal;

    if (
        incomeTotal === 0 &&
        expenseTotal === 0
    ) {
        overviewDisplay.textContent =
            "Add income and expenses to see your financial overview.";

    } else if (remainingBalance > 0) {
         overviewDisplay.textContent =
            "Your income is currently greater than your expenses by " +
            formatCurrency(
                remainingBalance
            ) +
            ".";


    } else if (remainingBalance < 0) {
       overviewDisplay.textContent =
           "Your expenses currently exceed your income by " +
           formatCurrency(
               Math.abs(
                   remainingBalance
               )
           ) +
           ".";
    } else {
        overviewDisplay.textContent =
            "Your income and expenses are currently equal.";
    }
}


// ============================================================
// INITIAL DISPLAY
// ============================================================

function displaySummary() {
    const account =
        getCurrentAccount();

    const incomeTotal =
        getIncomeTotal();

    const expenseTotal =
        getExpenseTotal(account);

    displayIncomeSummary(
        incomeTotal
    );

    displayExpenseSummary(
        expenseTotal
    );

    displayRemainingBalance(
        incomeTotal,
        expenseTotal
    );

    displayGoalSummary();

    displayUpcomingBills(
        account
    );

    displayExpenseCategories(
        account
    );

    displayFinancialOverview(
        incomeTotal,
        expenseTotal
    );
}

displaySummary();


// ============================================================
// END - SUMMARY SCRIPT
// ============================================================
