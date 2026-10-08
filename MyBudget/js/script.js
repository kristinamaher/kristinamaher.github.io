// ============================================================
// MY BUDGET - MAIN JAVASCRIPT
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
