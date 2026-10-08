// ============================================================
// MY BUDGET - INCOME SCRIPT
// ============================================================

// ============================================================
// INCOME / MONEY TOTALS
// ============================================================

// Load saved totals from localStorage.
// If nothing has been saved yet, start at $0.

let incomeTotal =
    parseFloat(
        localStorage.getItem("myBudgetIncomeTotal")
    ) || 0;

let giftTotal =
    parseFloat(
        localStorage.getItem("myBudgetGiftTotal")
    ) || 0;

let cardTotal =
    parseFloat(
        localStorage.getItem("myBudgetCardTotal")
    ) || 0;

// ============================================================
// SAVE MONEY TOTALS
// ============================================================

function saveMoneyTotals() {

    localStorage.setItem(
        "myBudgetIncomeTotal",
        incomeTotal.toString()
    );

    localStorage.setItem(
        "myBudgetGiftTotal",
        giftTotal.toString()
    );

    localStorage.setItem(
        "myBudgetCardTotal",
        cardTotal.toString()
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
            "$" + incomeTotal.toFixed(2);

    }

    // Money gifts

    if (giftDisplay) {

        giftDisplay.textContent =
            "$" + giftTotal.toFixed(2);

    }

    // Gift cards / prepaid cards

    if (cardDisplay) {

        cardDisplay.textContent =
            "$" + cardTotal.toFixed(2);

    }

    // Total spendable money

    if (spendableDisplay) {

        const spendableTotal =
            incomeTotal +
            giftTotal +
            cardTotal;

        spendableDisplay.textContent =
            "$" + spendableTotal.toFixed(2);

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
