// ============================================================
// MY BUDGET - MAIN JAVASCRIPT
// ============================================================


// ============================================================
// INCOME / MONEY TOTALS
// ============================================================

// Load saved totals from the browser.
// If nothing has been saved yet, start at $0.

let incomeTotal =
    parseFloat(localStorage.getItem("myBudgetIncomeTotal")) || 0;

let giftTotal =
    parseFloat(localStorage.getItem("myBudgetGiftTotal")) || 0;

let cardTotal =
    parseFloat(localStorage.getItem("myBudgetCardTotal")) || 0;


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
        document.getElementById("income-total");

    const giftDisplay =
        document.getElementById("gift-total");

    const cardDisplay =
        document.getElementById("card-total");

    const spendableDisplay =
        document.getElementById("spendable-total");


    if (incomeDisplay) {

        incomeDisplay.textContent =
            "$" + incomeTotal.toFixed(2);

    }


    if (giftDisplay) {

        giftDisplay.textContent =
            "$" + giftTotal.toFixed(2);

    }


    if (cardDisplay) {

        cardDisplay.textContent =
            "$" + cardTotal.toFixed(2);

    }


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
    document.getElementById("income-form");


if (incomeForm) {

    incomeForm.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();


            const amountInput =
                document.getElementById("income-amount");


            const amount =
                amountInput
                    ? parseFloat(amountInput.value)
                    : NaN;


            if (isNaN(amount) || amount < 0) {

                alert(
                    "Please enter a valid income amount."
                );

                return;

            }


            incomeTotal += amount;


            // Save immediately so the amount
            // survives a page refresh.
            saveMoneyTotals();


            updateIncomeSummary();


            this.reset();

        }
    );

}


// ============================================================
// ADD MONEY GIFT
// ============================================================

const giftForm =
    document.getElementById("gift-form");


if (giftForm) {

    giftForm.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();


            const amountInput =
                document.getElementById("gift-amount");


            const amount =
                amountInput
                    ? parseFloat(amountInput.value)
                    : NaN;


            if (isNaN(amount) || amount < 0) {

                alert(
                    "Please enter a valid gift amount."
                );

                return;

            }


            giftTotal += amount;


            saveMoneyTotals();


            updateIncomeSummary();


            this.reset();

        }
    );

}


// ============================================================
// ADD GIFT CARD / PREPAID CARD
// ============================================================

const cardForm =
    document.getElementById("card-form");


if (cardForm) {

    cardForm.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();


            const amountInput =
                document.getElementById("card-balance");


            const amount =
                amountInput
                    ? parseFloat(amountInput.value)
                    : NaN;


            if (isNaN(amount) || amount < 0) {

                alert(
                    "Please enter a valid card balance."
                );

                return;

            }


            cardTotal += amount;


            saveMoneyTotals();


            updateIncomeSummary();


            this.reset();

        }
    );

}


// Display saved totals immediately
// when the page loads.

updateIncomeSummary();


// ============================================================
// ACCOUNT - CREATE ACCOUNT
// ============================================================

const createAccountForm =
    document.getElementById("create-account-form");


if (createAccountForm) {

    createAccountForm.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();


            const usernameElement =
                document.getElementById("username");

            const emailElement =
                document.getElementById("email");

            const passwordElement =
                document.getElementById("password");

            const confirmPasswordElement =
                document.getElementById("confirm-password");


            const username =
                usernameElement
                    ? usernameElement.value.trim()
                    : "";

            const email =
                emailElement
                    ? emailElement.value.trim()
                    : "";

            const password =
                passwordElement
                    ? passwordElement.value
                    : "";

            const confirmPassword =
                confirmPasswordElement
                    ? confirmPasswordElement.value
                    : "";


            if (
                username === "" ||
                email === "" ||
                password === "" ||
                confirmPassword === ""
            ) {

                alert(
                    "Please complete all required account information."
                );

                return;

            }


            if (password !== confirmPassword) {

                alert(
                    "Passwords do not match."
                );

                return;

            }


            alert(
                "Account created successfully."
            );


            this.reset();

        }
    );

}


// ============================================================
// ACCOUNT - LOGIN INFORMATION
// ============================================================

const loginInformationForm =
    document.getElementById(
        "login-information-form"
    );


if (loginInformationForm) {

    loginInformationForm.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();


            const usernameElement =
                document.getElementById("username");

            const emailElement =
                document.getElementById("email");

            const passwordElement =
                document.getElementById("password");

            const confirmPasswordElement =
                document.getElementById("confirm-password");


            const username =
                usernameElement
                    ? usernameElement.value.trim()
                    : "";

            const email =
                emailElement
                    ? emailElement.value.trim()
                    : "";

            const password =
                passwordElement
                    ? passwordElement.value
                    : "";

            const confirmPassword =
                confirmPasswordElement
                    ? confirmPasswordElement.value
                    : "";


            if (
                username === "" ||
                email === "" ||
                password === "" ||
                confirmPassword === ""
            ) {

                alert(
                    "Please complete all login information."
                );

                return;

            }


            if (password !== confirmPassword) {

                alert(
                    "Passwords do not match."
                );

                return;

            }


            alert(
                "Login information saved."
            );


            this.reset();

        }
    );

}


// ============================================================
// ACCOUNT - PERSONAL INFORMATION
// ============================================================

const personalInformationForm =
    document.getElementById(
        "personal-information-form"
    );


if (personalInformationForm) {

    personalInformationForm.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();


            alert(
                "Personal information saved."
            );


            this.reset();

        }
    );

}


// ============================================================
// ACCOUNT - CURRENCY PREFERENCE
// ============================================================

const currencyForm =
    document.getElementById("currency-form");


if (currencyForm) {

    currencyForm.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();


            alert(
                "Currency preference saved."
            );

        }
    );

}


// ============================================================
// ACCOUNT - PROFILE PICTURE
// ============================================================

const profilePictureForm =
    document.getElementById(
        "profile-picture-form"
    );


if (profilePictureForm) {

    profilePictureForm.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();


            const picture =
                document.getElementById(
                    "profile-picture"
                );


            if (
                !picture ||
                !picture.files ||
                !picture.files.length
            ) {

                alert(
                    "Please choose a profile picture."
                );

                return;

            }


            alert(
                "Profile picture saved."
            );

        }
    );

}


// ============================================================
// ACCOUNT - LOG OUT
// ============================================================

const logoutButton =
    document.getElementById(
        "logout-button"
    );


if (logoutButton) {

    logoutButton.addEventListener(
        "click",
        function() {

            const confirmLogout =
                confirm(
                    "Do you want to log out?"
                );


            if (confirmLogout) {

                alert(
                    "You have been logged out."
                );

            }

        }
    );

}


// ============================================================
// ACCOUNT - DEACTIVATE
// ============================================================

const deactivateButton =
    document.getElementById(
        "deactivate-button"
    );


if (deactivateButton) {

    deactivateButton.addEventListener(
        "click",
        function() {

            const confirmDeactivate =
                confirm(
                    "Do you want to deactivate your account?"
                );


            if (confirmDeactivate) {

                alert(
                    "Your account has been deactivated."
                );

            }

        }
    );

}


// ============================================================
// ACCOUNT - DELETE
// ============================================================

const deleteButton =
    document.getElementById(
        "delete-account-button"
    );


if (deleteButton) {

    deleteButton.addEventListener(
        "click",
        function() {

            const confirmDelete =
                confirm(
                    "Are you sure you want to permanently delete your account?"
                );


            if (confirmDelete) {

                alert(
                    "Your account has been deleted."
                );

            }

        }
    );

}


// ============================================================
// SETTINGS - NOTIFICATIONS
// ============================================================

const notificationForm =
    document.getElementById(
        "notification-form"
    );


if (notificationForm) {

    notificationForm.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();


            alert(
                "Notification preferences saved."
            );

        }
    );

}


// ============================================================
// SETTINGS - SECURITY
// ============================================================

const securityForm =
    document.getElementById(
        "security-form"
    );


if (securityForm) {

    securityForm.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();


            alert(
                "Security settings saved."
            );

        }
    );

}


// ============================================================
// SETTINGS - DISPLAY
// ============================================================

const displayForm =
    document.getElementById(
        "display-form"
    );


if (displayForm) {

    displayForm.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();


            alert(
                "Display preferences saved."
            );

        }
    );

}


// ============================================================
// SETTINGS - DATE & TIME
// ============================================================

const dateTimeForm =
    document.getElementById(
        "date-time-form"
    );


if (dateTimeForm) {

    dateTimeForm.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();


            alert(
                "Date and time settings saved."
            );

        }
    );

}


// ============================================================
// SETTINGS - PRIVACY
// ============================================================

const privacyForm =
    document.getElementById(
        "privacy-form"
    );


if (privacyForm) {

    privacyForm.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();


            alert(
                "Privacy settings saved."
            );

        }
    );

}


// ============================================================
// SETTINGS - BUDGET
// ============================================================

const budgetPreferencesForm =
    document.getElementById(
        "budget-preferences-form"
    );


if (budgetPreferencesForm) {

    budgetPreferencesForm.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();


            alert(
                "Budget preferences saved."
            );

        }
    );

}


// ============================================================
// NOTE:
// The old "beforeunload" code has intentionally been removed.
//
// localStorage already saves the user's budget data.
// There is no need to warn the user every time they
// refresh, close, or leave the page.
// ============================================================


// ============================================================
// EXTERNAL LINKS
// ============================================================

const links =
    document.querySelectorAll("a");


links.forEach(function(link) {

    link.addEventListener(
        "click",
        function(event) {

            const destination =
                new URL(
                    link.href,
                    window.location.href
                );


            if (
                destination.origin !==
                window.location.origin
            ) {

                const leaveSite =
                    confirm(
                        "You are about to leave My Budget. You may not be logged out! Do you want to continue?"
                    );


                if (!leaveSite) {

                    event.preventDefault();

                }

            }

        }
    );

});


// ============================================================
// GOALS
// ============================================================

// Load saved goals from the browser.
//
// Goals are stored as an array of objects.
//
// If no goals have been saved yet,
// start with an empty array.

let goals;


try {

    goals =
        JSON.parse(
            localStorage.getItem("myBudgetGoals")
        ) || [];

} catch (error) {

    console.error(
        "Could not load saved goals:",
        error
    );

    goals = [];

}


// ============================================================
// GOALS - CLEAN OLD / MISSING DATA
// ============================================================

function normalizeGoals() {

    goals = goals.map(function(goal) {

        return {

            name:
                goal.name || "",

            type:
                goal.type || "",

            category:
                goal.category || "",

            priority:
                goal.priority || "",

            frequency:
                goal.frequency || "",

            amount:
                Number.isFinite(
                    Number(goal.amount)
                )
                    ? Number(goal.amount)
                    : 0,

            progress:
                Number.isFinite(
                    Number(goal.progress)
                )
                    ? Number(goal.progress)
                    : 0,

            date:
                goal.date || "",

            notes:
                goal.notes || "",

            status:
                goal.status || "in-progress"

        };

    });

}


normalizeGoals();


// ============================================================
// GOALS - SAVE
// ============================================================

function saveGoals() {

    try {

        localStorage.setItem(
            "myBudgetGoals",
            JSON.stringify(goals)
        );

    } catch (error) {

        console.error(
            "Could not save goals:",
            error
        );

        alert(
            "There was a problem saving your goals."
        );

    }

}


// ============================================================
// GOALS - CHECK EXPIRED
// ============================================================

function updateExpiredGoals() {

    const today =
        new Date()
            .toISOString()
            .split("T")[0];


    let changed = false;


    goals.forEach(function(goal) {

        // Completed goals should NEVER become expired.

        if (
            goal.status !== "completed" &&
            goal.date !== "" &&
            goal.date < today
        ) {

            if (
                goal.status !== "expired"
            ) {

                goal.status =
                    "expired";

                changed = true;

            }

        }

    });


    if (changed) {

        saveGoals();

    }

}


// ============================================================
// GOALS - DISPLAY
// ============================================================

function displayGoals() {

    const currentGoals =
        document.getElementById(
            "current-goals"
        );

    const completedGoals =
        document.getElementById(
            "completed-goals"
        );

    const expiredGoals =
        document.getElementById(
            "expired-goals"
        );


    if (!currentGoals) {

        return;

    }


    // Clear current goals.

    currentGoals.innerHTML = "";


    // Rebuild completed section.

    if (completedGoals) {

        completedGoals.innerHTML =
            "<h3>Completed Goals</h3>";

    }


    // Rebuild expired section.

    if (expiredGoals) {

        expiredGoals.innerHTML =
            "<h3>Expired Goals</h3>";

    }


    goals.forEach(function(goal, index) {

        const goalCard =
            createGoalCard(
                goal,
                index
            );


        if (
            goal.status ===
            "completed"
        ) {

            if (completedGoals) {

                completedGoals.appendChild(
                    goalCard
                );

            }

        }

        else if (
            goal.status ===
            "expired"
        ) {

            if (expiredGoals) {

                expiredGoals.appendChild(
                    goalCard
                );

            }

        }

        else {

            currentGoals.appendChild(
                goalCard
            );

        }

    });


    addGoalButtonEvents();

}


// ============================================================
// GOALS - CREATE GOAL CARD
// ============================================================

function createGoalCard(
    goal,
    index
) {

    const goalCard =
        document.createElement(
            "article"
        );


    goalCard.className =
        "goal-card";


    const amount =
        Number(goal.amount) || 0;


    const progress =
        Number(goal.progress) || 0;


    const progressPercent =
        amount > 0
            ? Math.min(
                100,
                Math.max(
                    0,
                    (progress / amount) * 100
                )
            )
            : 0;


    goalCard.innerHTML = `

        <h3 class="goal-name">
            ${goal.name}
        </h3>

        <p>
            Goal Type:
            <span class="goal-type">
                ${goal.type}
            </span>
        </p>

        <p>
            Category:
            <span class="goal-category">
                ${goal.category}
            </span>
        </p>

        <p>
            Priority:
            <span class="goal-priority">
                ${goal.priority}
            </span>
        </p>

        <p>
            Frequency:
            <span class="goal-frequency">
                ${goal.frequency || "Not specified"}
            </span>
        </p>

        <div class="goal-progress">

            <p>Progress:</p>

            <progress
                value="${progressPercent}"
                max="100">
            </progress>

            <p>

                <span class="current-amount">
                    $${progress.toFixed(2)}
                </span>

                /

                <span class="goal-amount">
                    $${amount.toFixed(2)}
                </span>

            </p>

        </div>

        <p>

            Target Date:

            <span class="goal-date">
                ${goal.date || "No target date"}
            </span>

        </p>

        <p>
            Notes:
        </p>

        <p class="goal-notes">
            ${goal.notes || "No notes"}
        </p>

        <p>
            Status:
            <span class="goal-status">
                ${goal.status}
            </span>
        </p>

        <div class="goal-actions">

            <button
                type="button"
                class="edit-goal-button"
                data-index="${index}">
                Edit Goal
            </button>

            <button
                type="button"
                class="update-progress-button"
                data-index="${index}">
                Update Progress
            </button>

            <button
                type="button"
                class="complete-goal-button"
                data-index="${index}">
                Complete Goal
            </button>

            <button
                type="button"
                class="delete-goal-button"
                data-index="${index}">
                Delete Goal
            </button>

        </div>

    `;


    return goalCard;

}


// ============================================================
// GOALS - ADD GOAL
// ============================================================

const goalForm =
    document.getElementById(
        "goal-form"
    );


if (goalForm) {

    goalForm.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();


            const goalName =
                document
                    .getElementById(
                        "goal-name"
                    )
                    .value
                    .trim();


            const goalType =
                document
                    .getElementById(
                        "goal-type"
                    )
                    .value;


            const customType =
                document
                    .getElementById(
                        "custom-type"
                    )
                    .value
                    .trim();


            const goalCategory =
                document
                    .getElementById(
                        "goal-category"
                    )
                    .value;


            const customCategory =
                document
                    .getElementById(
                        "custom-category"
                    )
                    .value
                    .trim();


            const goalPriority =
                document
                    .getElementById(
                        "goal-priority"
                    )
                    .value;


            const frequency =
                document
                    .getElementById(
                        "frequency"
                    )
                    .value;


            const customFrequency =
                document
                    .getElementById(
                        "custom-frequency"
                    )
                    .value
                    .trim();


            const goalAmount =
                parseFloat(
                    document
                        .getElementById(
                            "goal-amount"
                        )
                        .value
                );


            const goalProgress =
                parseFloat(
                    document
                        .getElementById(
                            "goal-progress"
                        )
                        .value
                );


            const goalDate =
                document
                    .getElementById(
                        "goal-date"
                    )
                    .value;


            const goalNotes =
                document
                    .getElementById(
                        "goal-notes"
                    )
                    .value
                    .trim();


            // ------------------------------------------------
            // VALIDATION
            // ------------------------------------------------

            if (
                goalName === ""
            ) {

                alert(
                    "Please enter a goal name."
                );

                return;

            }


            if (
                isNaN(goalAmount) ||
                goalAmount < 0
            ) {

                alert(
                    "Please enter a valid goal amount."
                );

                return;

            }


            if (
                isNaN(goalProgress) ||
                goalProgress < 0
            ) {

                alert(
                    "Please enter a valid current progress amount."
                );

                return;

            }


            if (
                goalProgress >
                goalAmount
            ) {

                alert(
                    "Current progress cannot be greater than the goal amount."
                );

                return;

            }


            // ------------------------------------------------
            // DETERMINE STATUS
            // ------------------------------------------------

            let goalStatus =
                "in-progress";


            if (
                goalProgress ===
                goalAmount
            ) {

                goalStatus =
                    "completed";

            }

            else if (
                goalDate !== ""
            ) {

                const today =
                    new Date()
                        .toISOString()
                        .split("T")[0];


                if (
                    goalDate <
                    today
                ) {

                    goalStatus =
                        "expired";

                }

            }


            // ------------------------------------------------
            // CREATE GOAL
            // ------------------------------------------------

            const newGoal = {

                name:
                    goalName,

                type:
                    customType !== ""
                        ? customType
                        : goalType,

                category:
                    customCategory !== ""
                        ? customCategory
                        : goalCategory,

                priority:
                    goalPriority,

                frequency:
                    customFrequency !== ""
                        ? customFrequency
                        : frequency,

                amount:
                    goalAmount,

                progress:
                    goalProgress,

                date:
                    goalDate,

                notes:
                    goalNotes,

                status:
                    goalStatus

            };


            // Add the goal to the array.

            goals.push(
                newGoal
            );


            // Save immediately.

            saveGoals();


            // Display immediately.

            displayGoals();


            alert(
                "Goal added successfully."
            );


            // Clear the form.

            this.reset();

        }
    );

}


// ============================================================
// GOALS - BUTTON EVENTS
// ============================================================

function addGoalButtonEvents() {

    const editButtons =
        document.querySelectorAll(
            ".edit-goal-button"
        );


    const progressButtons =
        document.querySelectorAll(
            ".update-progress-button"
        );


    const completeButtons =
        document.querySelectorAll(
            ".complete-goal-button"
        );


    const deleteButtons =
        document.querySelectorAll(
            ".delete-goal-button"
        );


    // --------------------------------------------------------
    // EDIT BUTTONS
    // --------------------------------------------------------

    editButtons.forEach(
        function(button) {

            button.addEventListener(
                "click",
                function() {

                    const index =
                        parseInt(
                            this.dataset.index,
                            10
                        );


                    editGoal(index);

                }
            );

        }
    );


    // --------------------------------------------------------
    // UPDATE PROGRESS BUTTONS
    // --------------------------------------------------------

    progressButtons.forEach(
        function(button) {

            button.addEventListener(
                "click",
                function() {

                    const index =
                        parseInt(
                            this.dataset.index,
                            10
                        );


                    updateGoalProgress(
                        index
                    );

                }
            );

        }
    );


    // --------------------------------------------------------
    // COMPLETE BUTTONS
    // --------------------------------------------------------

    completeButtons.forEach(
        function(button) {

            button.addEventListener(
                "click",
                function() {

                    const index =
                        parseInt(
                            this.dataset.index,
                            10
                        );


                    completeGoal(index);

                }
            );

        }
    );


    // --------------------------------------------------------
    // DELETE BUTTONS
    // --------------------------------------------------------

    deleteButtons.forEach(
        function(button) {

            button.addEventListener(
                "click",
                function() {

                    const index =
                        parseInt(
                            this.dataset.index,
                            10
                        );


                    deleteGoal(index);

                }
            );

        }
    );

}


// ============================================================
// GOALS - EDIT
// ============================================================

function editGoal(index) {

    const goal =
        goals[index];


    if (!goal) {

        return;

    }


    const newName =
        prompt(
            "Edit goal name:",
            goal.name
        );


    if (
        newName ===
        null
    ) {

        return;

    }


    if (
        newName.trim() ===
        ""
    ) {

        alert(
            "Goal name cannot be empty."
        );

        return;

    }


    goal.name =
        newName.trim();


    saveGoals();


    displayGoals();

}


// ============================================================
// GOALS - UPDATE PROGRESS
// ============================================================

function updateGoalProgress(index) {

    const goal =
        goals[index];


    if (!goal) {

        return;

    }


    const newProgress =
        parseFloat(
            prompt(
                "Enter the new progress amount:",
                goal.progress
            )
        );


    if (
        isNaN(newProgress)
    ) {

        alert(
            "Please enter a valid amount."
        );

        return;

    }


    if (
        newProgress < 0
    ) {

        alert(
            "Progress cannot be negative."
        );

        return;

    }


    if (
        newProgress >
        goal.amount
    ) {

        alert(
            "Progress cannot be greater than the goal amount."
        );

        return;

    }


    goal.progress =
        newProgress;


    // --------------------------------------------------------
    // DETERMINE NEW STATUS
    // --------------------------------------------------------

    if (
        goal.progress ===
        goal.amount
    ) {

        goal.status =
            "completed";

    }

    else if (
        goal.status ===
        "expired"
    ) {

        // Keep an expired goal expired.
        // This prevents old goals from disappearing
        // back into the current section.

        goal.status =
            "expired";

    }

    else {

        goal.status =
            "in-progress";

    }


    saveGoals();


    displayGoals();

}


// ============================================================
// GOALS - COMPLETE
// ============================================================

function completeGoal(index) {

    const goal =
        goals[index];


    if (!goal) {

        return;

    }


    const confirmComplete =
        confirm(
            "Mark this goal as completed?"
        );


    if (!confirmComplete) {

        return;

    }


    goal.status =
        "completed";


    goal.progress =
        goal.amount;


    saveGoals();


    displayGoals();

}


// ============================================================
// GOALS - DELETE
// ============================================================

function deleteGoal(index) {

    const goal =
        goals[index];


    if (!goal) {

        return;

    }


    const confirmDelete =
        confirm(
            "Are you sure you want to delete this goal?"
        );


    if (!confirmDelete) {

        return;

    }


    goals.splice(
        index,
        1
    );


    saveGoals();


    displayGoals();

}


// ============================================================
// GOALS - SEARCH
// ============================================================

const searchGoalsButton =
    document.getElementById(
        "search-goals-button"
    );


if (searchGoalsButton) {

    searchGoalsButton.addEventListener(
        "click",
        function() {

            const searchInput =
                document.getElementById(
                    "search-value"
                );


            const searchValue =
                searchInput
                    ? searchInput.value
                        .trim()
                        .toLowerCase()
                    : "";


            // Empty search restores
            // the complete goal list.

            if (
                searchValue ===
                ""
            ) {

                displayGoals();

                return;

            }


            const searchBy =
                document.querySelector(
                    'input[name="searchBy"]:checked'
                );


            if (!searchBy) {

                alert(
                    "Please select what you want to search by."
                );

                return;

            }


            const searchType =
                searchBy.value;


            const matchingGoals =
                goals.filter(
                    function(goal) {

                        let value =
                            "";


                        if (
                            searchType ===
                            "name"
                        ) {

                            value =
                                goal.name;

                        }


                        if (
                            searchType ===
                            "type"
                        ) {

                            value =
                                goal.type;

                        }


                        if (
                            searchType ===
                            "category"
                        ) {

                            value =
                                goal.category;

                        }


                        if (
                            searchType ===
                            "priority"
                        ) {

                            value =
                                goal.priority;

                        }


                        if (
                            searchType ===
                            "frequency"
                        ) {

                            value =
                                goal.frequency;

                        }


                        if (
                            searchType ===
                            "status"
                        ) {

                            value =
                                goal.status;

                        }


                        if (
                            searchType ===
                            "amount"
                        ) {

                            value =
                                String(
                                    goal.amount
                                );

                        }


                        if (
                            searchType ===
                            "date"
                        ) {

                            value =
                                goal.date;

                        }


                        return String(
                            value || ""
                        )
                            .toLowerCase()
                            .includes(
                                searchValue
                            );

                    }
                );


            displaySearchResults(
                matchingGoals
            );

        }
    );

}


// ============================================================
// GOALS - SEARCH RESULTS
// ============================================================

function displaySearchResults(
    results
) {

    const currentGoals =
        document.getElementById(
            "current-goals"
        );


    const completedGoals =
        document.getElementById(
            "completed-goals"
        );


    const expiredGoals =
        document.getElementById(
            "expired-goals"
        );


    if (!currentGoals) {

        return;

    }


    // Clear all three sections.

    currentGoals.innerHTML =
        "";


    if (completedGoals) {

        completedGoals.innerHTML =
            "<h3>Completed Goals</h3>";

    }


    if (expiredGoals) {

        expiredGoals.innerHTML =
            "<h3>Expired Goals</h3>";

    }


    if (
        results.length ===
        0
    ) {

        currentGoals.innerHTML =
            "<p>No matching goals found.</p>";

        return;

    }


    results.forEach(
        function(goal) {

            // Find the ORIGINAL index
            // in the main goals array.
            //
            // This is important because search
            // creates a filtered array.
            //
            // Using the filtered array index
            // could cause Edit/Delete to affect
            // the wrong goal.

            const index =
                goals.indexOf(
                    goal
                );


            const goalCard =
                createGoalCard(
                    goal,
                    index
                );


            if (
                goal.status ===
                "completed"
            ) {

                if (
                    completedGoals
                ) {

                    completedGoals.appendChild(
                        goalCard
                    );

                }

            }

            else if (
                goal.status ===
                "expired"
            ) {

                if (
                    expiredGoals
                ) {

                    expiredGoals.appendChild(
                        goalCard
                    );

                }

            }

            else {

                currentGoals.appendChild(
                    goalCard
                );

            }

        }
    );


    addGoalButtonEvents();

}


// ============================================================
// GOALS - INITIAL LOAD
// ============================================================

// First check saved goals for expired dates.

updateExpiredGoals();


// Then display all saved goals.

displayGoals();


// ============================================================
// END OF MY BUDGET JAVASCRIPT
// ==================================================
