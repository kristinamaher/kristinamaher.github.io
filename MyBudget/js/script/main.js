// ============================================================
// MY BUDGET - MAIN SCRIPT
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
// LEAVING MY BUDGET
// ============================================================

window.addEventListener(
    "beforeunload",
    function(event) {

        event.preventDefault();

        event.returnValue = "";
    }
);
// ============================================================
// END OF MY BUDGET SCRIPT
// ==================================================
