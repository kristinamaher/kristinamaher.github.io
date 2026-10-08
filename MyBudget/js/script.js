// My Budget - Main JavaScript


// ==============================
// INCOME TOTALS
// ==============================

let incomeTotal = 0;
let giftTotal = 0;
let cardTotal = 0;


function updateIncomeSummary() {

    const incomeDisplay = document.getElementById("income-total");
    const giftDisplay = document.getElementById("gift-total");
    const cardDisplay = document.getElementById("card-total");
    const spendableDisplay = document.getElementById("spendable-total");

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

        let spendableTotal =
            incomeTotal + giftTotal + cardTotal;

        spendableDisplay.textContent =
            "$" + spendableTotal.toFixed(2);
    }
}


// Add regular income
const incomeForm =
    document.getElementById("income-form");

if (incomeForm) {

    incomeForm.addEventListener("submit", function(event) {

        event.preventDefault();

        let amount =
            parseFloat(
                document.getElementById("income-amount").value
            );

        if (!isNaN(amount) && amount >= 0) {

            incomeTotal += amount;

            updateIncomeSummary();

            this.reset();
        }
    });
}


// Add money gift
const giftForm =
    document.getElementById("gift-form");

if (giftForm) {

    giftForm.addEventListener("submit", function(event) {

        event.preventDefault();

        let amount =
            parseFloat(
                document.getElementById("gift-amount").value
            );

        if (!isNaN(amount) && amount >= 0) {

            giftTotal += amount;

            updateIncomeSummary();

            this.reset();
        }
    });
}


// Add gift card or prepaid card
const cardForm =
    document.getElementById("card-form");

if (cardForm) {

    cardForm.addEventListener("submit", function(event) {

        event.preventDefault();

        let amount =
            parseFloat(
                document.getElementById("card-balance").value
            );

        if (!isNaN(amount) && amount >= 0) {

            cardTotal += amount;

            updateIncomeSummary();

            this.reset();
        }
    });
}


updateIncomeSummary();


// ==============================
// ACCOUNT - CREATE ACCOUNT
// ==============================

const createAccountForm =
    document.getElementById("create-account-form");

if (createAccountForm) {

    createAccountForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const username =
            document.getElementById("username").value.trim();

        const email =
            document.getElementById("email").value.trim();

        const password =
            document.getElementById("password").value;

        const confirmPassword =
            document.getElementById("confirm-password").value;


        if (username === "" ||
            email === "" ||
            password === "" ||
            confirmPassword === "") {

            alert("Please complete all required account information.");

            return;
        }


        if (password !== confirmPassword) {

            alert("Passwords do not match.");

            return;
        }


        alert("Account created successfully.");

        this.reset();
    });
}


// ==============================
// ACCOUNT - LOGIN INFORMATION
// ==============================

const loginInformationForm =
    document.getElementById("login-information-form");

if (loginInformationForm) {

    loginInformationForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const username =
            document.getElementById("username").value.trim();

        const email =
            document.getElementById("email").value.trim();

        const password =
            document.getElementById("password").value;

        const confirmPassword =
            document.getElementById("confirm-password").value;


        if (username === "" ||
            email === "" ||
            password === "" ||
            confirmPassword === "") {

            alert("Please complete all login information.");

            return;
        }


        if (password !== confirmPassword) {

            alert("Passwords do not match.");

            return;
        }


        alert("Login information saved.");

        this.reset();
    });
}


// ==============================
// ACCOUNT - PERSONAL INFORMATION
// ==============================

const personalInformationForm =
    document.getElementById("personal-information-form");

if (personalInformationForm) {

    personalInformationForm.addEventListener("submit", function(event) {

        event.preventDefault();

        alert("Personal information saved.");

        this.reset();
    });
}


// ==============================
// ACCOUNT - CURRENCY PREFERENCE
// ==============================

const currencyForm =
    document.getElementById("currency-form");

if (currencyForm) {

    currencyForm.addEventListener("submit", function(event) {

        event.preventDefault();

        alert("Currency preference saved.");

    });
}


// ==============================
// ACCOUNT - PROFILE PICTURE
// ==============================

const profilePictureForm =
    document.getElementById("profile-picture-form");

if (profilePictureForm) {

    profilePictureForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const picture =
            document.getElementById("profile-picture");

        if (!picture.files.length) {

            alert("Please choose a profile picture.");

            return;
        }

        alert("Profile picture saved.");

    });
}


// ==============================
// ACCOUNT - LOG OUT
// ==============================

const logoutButton =
    document.getElementById("logout-button");

if (logoutButton) {

    logoutButton.addEventListener("click", function() {

        const confirmLogout =
            confirm("Do you want to log out?");

        if (confirmLogout) {

            alert("You have been logged out.");

        }
    });
}


// ==============================
// ACCOUNT - DEACTIVATE
// ==============================

const deactivateButton =
    document.getElementById("deactivate-button");

if (deactivateButton) {

    deactivateButton.addEventListener("click", function() {

        const confirmDeactivate =
            confirm(
                "Do you want to deactivate your account?"
            );

        if (confirmDeactivate) {

            alert("Your account has been deactivated.");

        }
    });
}


// ==============================
// ACCOUNT - DELETE
// ==============================

const deleteButton =
    document.getElementById("delete-account-button");

if (deleteButton) {

    deleteButton.addEventListener("click", function() {

        const confirmDelete =
            confirm(
                "Are you sure you want to permanently delete your account?"
            );

        if (confirmDelete) {

            alert("Your account has been deleted.");

        }
    });
}


// ==============================
// SETTINGS - NOTIFICATIONS
// ==============================

const notificationForm =
    document.getElementById("notification-form");

if (notificationForm) {

    notificationForm.addEventListener("submit", function(event) {

        event.preventDefault();

        alert("Notification preferences saved.");

    });
}


// ==============================
// SETTINGS - SECURITY
// ==============================

const securityForm =
    document.getElementById("security-form");

if (securityForm) {

    securityForm.addEventListener("submit", function(event) {

        event.preventDefault();

        alert("Security settings saved.");

    });
}


// ==============================
// SETTINGS - DISPLAY
// ==============================

const displayForm =
    document.getElementById("display-form");

if (displayForm) {

    displayForm.addEventListener("submit", function(event) {

        event.preventDefault();

        alert("Display preferences saved.");

    });
}


// ==============================
// SETTINGS - DATE & TIME
// ==============================

const dateTimeForm =
    document.getElementById("date-time-form");

if (dateTimeForm) {

    dateTimeForm.addEventListener("submit", function(event) {

        event.preventDefault();

        alert("Date and time settings saved.");

    });
}


// ==============================
// SETTINGS - PRIVACY
// ==============================

const privacyForm =
    document.getElementById("privacy-form");

if (privacyForm) {

    privacyForm.addEventListener("submit", function(event) {

        event.preventDefault();

        alert("Privacy settings saved.");

    });
}


// ==============================
// SETTINGS - BUDGET
// ==============================

const budgetPreferencesForm =
    document.getElementById("budget-preferences-form");

if (budgetPreferencesForm) {

    budgetPreferencesForm.addEventListener("submit", function(event) {

        event.preventDefault();

        alert("Budget preferences saved.");

    });
}


// ==============================
// LEAVING THE SITE
// ==============================

window.addEventListener("beforeunload", function(event) {

    event.preventDefault();

    event.returnValue = "";

});


// ==============================
// EXTERNAL LINKS
// ==============================

const links =
    document.querySelectorAll("a");

links.forEach(function(link) {

    link.addEventListener("click", function(event) {

        const destination =
            new URL(link.href, window.location.href);

        if (destination.origin !== window.location.origin) {

            const leaveSite =
                confirm(
                    "You are about to leave My Budget. You may not be logged out! Do you want to continue?"
                );

            if (!leaveSite) {

                event.preventDefault();

            }
        }
    });
});


// ==============================
// GOALS
// ==============================

// Load saved goals from the browser.
// If there are no saved goals, start with an empty array.
let goals =
    JSON.parse(localStorage.getItem("myBudgetGoals")) || [];


// ==============================
// GOALS - SAVE
// ==============================

function saveGoals() {

    localStorage.setItem(
        "myBudgetGoals",
        JSON.stringify(goals)
    );

}


// ==============================
// GOALS - CHECK EXPIRED
// ==============================

function updateExpiredGoals() {

    const today =
        new Date().toISOString().split("T")[0];


    let changed = false;


    goals.forEach(function(goal) {

        // Completed goals should NEVER become expired.
        if (
            goal.status !== "completed" &&
            goal.date !== "" &&
            goal.date < today
        ) {

            if (goal.status !== "expired") {

                goal.status = "expired";

                changed = true;

            }

        }

    });


    if (changed) {

        saveGoals();

    }

}


// ==============================
// GOALS - DISPLAY
// ==============================

function displayGoals() {

    const currentGoals =
        document.getElementById("current-goals");

    const completedGoals =
        document.getElementById("completed-goals");

    const expiredGoals =
        document.getElementById("expired-goals");


    if (!currentGoals) {

        return;

    }


    // Clear only the containers that we are going to rebuild.
    currentGoals.innerHTML = "";


    if (completedGoals) {

        completedGoals.innerHTML =
            "<h3>Completed Goals</h3>";

    }


    if (expiredGoals) {

        expiredGoals.innerHTML =
            "<h3>Expired Goals</h3>";

    }


    goals.forEach(function(goal, index) {

        const goalCard =
            createGoalCard(goal, index);


        if (goal.status === "completed") {

            if (completedGoals) {

                completedGoals.appendChild(goalCard);

            }

        } else if (goal.status === "expired") {

            if (expiredGoals) {

                expiredGoals.appendChild(goalCard);

            }

        } else {

            currentGoals.appendChild(goalCard);

        }

    });


    addGoalButtonEvents();

}


// ==============================
// GOALS - CREATE GOAL CARD
// ==============================

function createGoalCard(goal, index) {

    const goalCard =
        document.createElement("article");


    goalCard.className =
        "goal-card";


    const progressPercent =
        goal.amount > 0
            ? (goal.progress / goal.amount) * 100
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
                    $${goal.progress.toFixed(2)}
                </span>

                /

                <span class="goal-amount">
                    $${goal.amount.toFixed(2)}
                </span>
            </p>

        </div>

        <p>
            Target Date:
            <span class="goal-date">
                ${goal.date || "No target date"}
            </span>
        </p>

        <p>Notes:</p>

        <p class="goal-notes">
            ${goal.notes || "No notes"}
        </p>

        <p>
            Status:
            ${goal.status}
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


// ==============================
// GOALS - ADD GOAL
// ==============================

const goalForm =
    document.getElementById("goal-form");


if (goalForm) {

    goalForm.addEventListener("submit", function(event) {

        event.preventDefault();


        const goalName =
            document
                .getElementById("goal-name")
                .value
                .trim();


        const goalType =
            document
                .getElementById("goal-type")
                .value;


        const customType =
            document
                .getElementById("custom-type")
                .value
                .trim();


        const goalCategory =
            document
                .getElementById("goal-category")
                .value;


        const customCategory =
            document
                .getElementById("custom-category")
                .value
                .trim();


        const goalPriority =
            document
                .getElementById("goal-priority")
                .value;


        const frequency =
            document
                .getElementById("frequency")
                .value;


        const customFrequency =
            document
                .getElementById("custom-frequency")
                .value
                .trim();


        const goalAmount =
            parseFloat(
                document
                    .getElementById("goal-amount")
                    .value
            );


        const goalProgress =
            parseFloat(
                document
                    .getElementById("goal-progress")
                    .value
            );


        const goalDate =
            document
                .getElementById("goal-date")
                .value;


        const goalNotes =
            document
                .getElementById("goal-notes")
                .value
                .trim();


        // ------------------------------
        // VALIDATION
        // ------------------------------

        if (goalName === "") {

            alert("Please enter a goal name.");

            return;

        }


        if (isNaN(goalAmount) || goalAmount < 0) {

            alert("Please enter a valid goal amount.");

            return;

        }


        if (isNaN(goalProgress) || goalProgress < 0) {

            alert(
                "Please enter a valid current progress amount."
            );

            return;

        }


        if (goalProgress > goalAmount) {

            alert(
                "Current progress cannot be greater than the goal amount."
            );

            return;

        }


        // ------------------------------
        // CREATE GOAL
        // ------------------------------

        const newGoal = {

            name: goalName,

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
                goalProgress === goalAmount
                    ? "completed"
                    : "in-progress"

        };


        // Add the goal.
        goals.push(newGoal);


        // Save the goal.
        saveGoals();


        // Show the updated list.
        displayGoals();


        alert("Goal added successfully.");


        // Clear the form.
        this.reset();

    });

}


// ==============================
// GOALS - BUTTON EVENTS
// ==============================

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


    editButtons.forEach(function(button) {

        button.addEventListener("click", function() {

            const index =
                parseInt(this.dataset.index);


            editGoal(index);

        });

    });


    progressButtons.forEach(function(button) {

        button.addEventListener("click", function() {

            const index =
                parseInt(this.dataset.index);


            updateGoalProgress(index);

        });

    });


    completeButtons.forEach(function(button) {

        button.addEventListener("click", function() {

            const index =
                parseInt(this.dataset.index);


            completeGoal(index);

        });

    });


    deleteButtons.forEach(function(button) {

        button.addEventListener("click", function() {

            const index =
                parseInt(this.dataset.index);


            deleteGoal(index);

        });

    });

}


// ==============================
// GOALS - EDIT
// ==============================

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


    if (newName === null) {

        return;

    }


    if (newName.trim() === "") {

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


// ==============================
// GOALS - UPDATE PROGRESS
// ==============================

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


    if (isNaN(newProgress)) {

        alert(
            "Please enter a valid amount."
        );

        return;

    }


    if (newProgress < 0) {

        alert(
            "Progress cannot be negative."
        );

        return;

    }


    if (newProgress > goal.amount) {

        alert(
            "Progress cannot be greater than the goal amount."
        );

        return;

    }


    goal.progress =
        newProgress;


    // If the goal reaches the full amount,
    // mark it completed.
    if (goal.progress === goal.amount) {

        goal.status =
            "completed";

    }

    // If the goal is expired, keep it expired.
    // Otherwise, keep it in progress.
    else if (goal.status === "expired") {

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
// ==============================
// GOALS - COMPLETE
// ==============================

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


// ==============================
// GOALS - DELETE
// ==============================

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


    goals.splice(index, 1);


    saveGoals();

    displayGoals();

}


// ==============================
// GOALS - SEARCH
// ==============================

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


            if (searchValue === "") {

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
                goals.filter(function(goal) {

                    let value = "";


                    if (searchType === "name") {

                        value = goal.name;

                    }


                    if (searchType === "type") {

                        value = goal.type;

                    }


                    if (searchType === "category") {

                        value = goal.category;

                    }


                    if (searchType === "priority") {

                        value = goal.priority;

                    }


                    if (searchType === "frequency") {

                        value = goal.frequency;

                    }


                    if (searchType === "status") {

                        value = goal.status;

                    }


                    if (searchType === "amount") {

                        value =
                            goal.amount.toString();

                    }


                    if (searchType === "date") {

                        value = goal.date;

                    }


                    return value
                        .toLowerCase()
                        .includes(searchValue);

                });


            displaySearchResults(
                matchingGoals
            );

        }
    );

}


// ==============================
// GOALS - SEARCH RESULTS
// ==============================

function displaySearchResults(results) {

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


    // Clear all three sections so search
    // does not leave misleading old results.
    currentGoals.innerHTML = "";

    if (completedGoals) {

        completedGoals.innerHTML =
            "<h3>Completed Goals</h3>";

    }

    if (expiredGoals) {

        expiredGoals.innerHTML =
            "<h3>Expired Goals</h3>";

    }


    if (results.length === 0) {

        currentGoals.innerHTML =
            "<p>No matching goals found.</p>";

        return;

    }


    results.forEach(function(goal) {

        // Find the ORIGINAL index in the goals array.
        // This keeps Edit/Delete/Complete working
        // correctly after a search.
        const index =
            goals.indexOf(goal);


        const goalCard =
            createGoalCard(goal, index);


        if (goal.status === "completed") {

            if (completedGoals) {

                completedGoals.appendChild(goalCard);

            }

        } else if (goal.status === "expired") {

            if (expiredGoals) {

                expiredGoals.appendChild(goalCard);

            }

        } else {

            currentGoals.appendChild(goalCard);

        }

    });


    addGoalButtonEvents();

}


// ==============================
// GOALS - INITIAL LOAD
// ==============================

// Check whether any saved goals have expired.
updateExpiredGoals();


// Display all saved goals.
displayGoals();
