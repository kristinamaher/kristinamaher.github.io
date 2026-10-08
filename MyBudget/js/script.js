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
