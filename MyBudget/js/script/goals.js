  // ============================================================
// MY BUDGET - GOALS SCRIPT
// ============================================================

// ============================================================
// GOALS - LOAD SAVED GOALS
// ============================================================

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

        // Completed goals should never become expired.

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

            goals.push(
                newGoal
            );

            saveGoals();

            displayGoals();

            alert(
                "Goal added successfully."
            );

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
            // in the goals array.
            //
            // This keeps Edit/Delete/Complete
            // working correctly after a search.

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

updateExpiredGoals();

displayGoals();


// ============================================================
// END OF GOALS SCRIPT
// ============================================================
