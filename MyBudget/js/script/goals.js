// ============================================================
// MY BUDGET - GOALS SCRIPT
// ============================================================

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


    addGoalButtonEvents();

}

