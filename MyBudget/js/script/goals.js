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


    addGoalButtonEvents();

}

