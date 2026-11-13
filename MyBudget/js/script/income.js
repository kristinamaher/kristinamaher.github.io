// ============================================================
// MY BUDGET - INCOME SCRIPT
// ============================================================

// ============================================================
// MY BUDGET - INCOME CURRENCY PREFFERENCE SLECTORE IMPORT
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
// ============================================================
// INCOME / MONEY TOTALS
// ============================================================

function getCurrentAccount() {

    const username =
        localStorage.getItem(
            "myBudgetCurrentAccount"
        );

    if (!username) {
        return null;
    }

    const accounts =
        JSON.parse(
            localStorage.getItem(
                "myBudgetAccounts"
            )
        ) || {};

    return accounts[username] || null;
}

const account =
    getCurrentAccount();

let incomeTotal =
    account
        ? Number(account.incomeTotal) || 0
        : 0;

let giftTotal =
    account
        ? Number(account.giftTotal) || 0
        : 0;

let cardTotal =
    account
        ? Number(account.cardTotal) || 0
        : 0;
// ============================================================
// SAVE MONEY TOTALS
// ============================================================

function saveMoneyTotals() {

    const username =
        localStorage.getItem(
            "myBudgetCurrentAccount"
        );

    if (!username) {
        return;
    }

    const accounts =
        JSON.parse(
            localStorage.getItem(
                "myBudgetAccounts"
            )
        ) || {};

    accounts[username].incomeTotal =
        incomeTotal;

    accounts[username].giftTotal =
        giftTotal;

    accounts[username].cardTotal =
        cardTotal;

    localStorage.setItem(
        "myBudgetAccounts",
        JSON.stringify(accounts)
    );
}

// ============================================================
// UPDATE INCOME SUMMARY
// ============================================================

function updateIncomeSummary() {

    const incomeDisplay =
        document.getElementById(
            "income-total"
        );

    const giftDisplay =
        document.getElementById(
            "gift-total"
        );

    const cardDisplay =
        document.getElementById(
            "card-total"
        );

    const spendableDisplay =
        document.getElementById(
            "spendable-total"
        );

    // Regular income

    if (incomeDisplay) {

        incomeDisplay.textContent =
            formatCurrency(incomeTotal)

    }

    // Money gifts

    if (giftDisplay) {

        giftDisplay.textContent =
            formatCurrency(giftTotal)

    }

    // Gift cards / prepaid cards

    if (cardDisplay) {

        cardDisplay.textContent =
            formatCurrency(cardTotal)

    }

    // Total spendable money

    if (spendableDisplay) {

        const spendableTotal =
            incomeTotal +
            giftTotal +
            cardTotal;

        spendableDisplay.textContent =
           formatCurrency(spendableTotal)

    }

}

// ============================================================
// ADD REGULAR INCOME
// ============================================================

const incomeForm =
    document.getElementById(
        "income-form"
    );

if (incomeForm) {

    incomeForm.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();

            const amountInput =
                document.getElementById(
                    "income-amount"
                );

            const amount =
                amountInput
                    ? parseFloat(
                        amountInput.value
                    )
                    : NaN;

            if (
                isNaN(amount) ||
                amount < 0
            ) {

                alert(
                    "Please enter a valid income amount."
                );

                return;

            }

            incomeTotal += amount;

            // Save immediately so the
            // amount survives a refresh.

            saveMoneyTotals();

            // Update the displayed totals.

            updateIncomeSummary();

            // Clear the form.

            this.reset();

        }
    );

}

// ============================================================
// ADD MONEY GIFT
// ============================================================

const giftForm =
    document.getElementById(
        "gift-form"
    );

if (giftForm) {

    giftForm.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();

            const amountInput =
                document.getElementById(
                    "gift-amount"
                );

            const amount =
                amountInput
                    ? parseFloat(
                        amountInput.value
                    )
                    : NaN;

            if (
                isNaN(amount) ||
                amount < 0
            ) {

                alert(
                    "Please enter a valid gift amount."
                );

                return;

            }

            giftTotal += amount;

            // Save immediately.

            saveMoneyTotals();

            // Update displayed totals.

            updateIncomeSummary();

            // Clear the form.

            this.reset();

        }
    );

}

// ============================================================
// ADD GIFT CARD / PREPAID CARD
// ============================================================

const cardForm =
    document.getElementById(
        "card-form"
    );

if (cardForm) {

    cardForm.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();

            const amountInput =
                document.getElementById(
                    "card-balance"
                );

            const amount =
                amountInput
                    ? parseFloat(
                        amountInput.value
                    )
                    : NaN;

            if (
                isNaN(amount) ||
                amount < 0
            ) {

                alert(
                    "Please enter a valid card balance."
                );

                return;

            }

            cardTotal += amount;

            // Save immediately.

            saveMoneyTotals();

            // Update displayed totals.

            updateIncomeSummary();

            // Clear the form.

            this.reset();

        }
    );

}

// ============================================================
// INITIAL DISPLAY
// ============================================================

// Display saved totals when the page loads.

updateIncomeSummary();

// ============================================================
// END OF INCOME SCRIPT
// ============================================================
