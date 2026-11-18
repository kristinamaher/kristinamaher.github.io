
// ============================================================
// MY BUDGET - TRANSLATION SYSTEM
// ============================================================

const translation = {

    en: {
        // English translations will go here
    },

    ja: {
        // Japanese translations will go here
    },

    fr: {
        // French translations will go here
    },

    es: {
        // Spanish translations will go here
    }

};


// ============================================================
// GET SAVED LANGUAGE
// ============================================================

function getSavedLanguage() {

    return localStorage.getItem("myBudgetLanguage") || "en";

}


// ============================================================
// APPLY TRANSLATIONS
// ============================================================

function applyTranslations() {

    const language = getSavedLanguage();

    const selectedTranslations =
        translation[language] || translation.en;

    document.querySelectorAll("[data-translate]").forEach(element => {

        const key = element.getAttribute("data-translate");

        if (selectedTranslations[key]) {
            element.textContent = selectedTranslations[key];
        }

    });

}


// ============================================================
// INITIALIZE TRANSLATIONS
// ============================================================

document.addEventListener("DOMContentLoaded", function() {

    applyTranslations();

});
