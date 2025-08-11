document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("registrationForm");

    form.addEventListener("submit", function (e) {
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const eventField = document.querySelector("[name='event']");

        let errors = [];

        // ✅ Name validation
        if (name === "") {
            errors.push("Full name is required.");
        }

        // ✅ Strict Email Validation
        const emailPattern = new RegExp(
            "^(?!\\.)[a-zA-Z0-9._%+-]{1,64}(?<!\\.)" +              // Local part: no leading/trailing dot
            "@" +
            "(?=.{4,255}$)([a-zA-Z0-9-]+\\.)+" +                    // Domain: at least one dot, 2+ char TLD
            "[a-zA-Z]{2,}$"                                         // TLD: min 2 letters
        );

        const doubleDotPattern = /\.{2,}/; // Check for two consecutive dots

        if (!emailPattern.test(email) || doubleDotPattern.test(email)) {
            errors.push("Please enter a valid email address (e.g., user@example.com).");
        }

        // ✅ Phone validation: exactly 10 digits
        const phonePattern = /^\d{10}$/;
        if (!phonePattern.test(phone)) {
            errors.push("Phone number must be exactly 10 digits and numeric only.");
        }

        // ✅ Event validation (only if dropdown is visible)
        if (eventField && eventField.tagName === "SELECT" && eventField.value === "") {
            errors.push("Please select an event.");
        }

        // ✅ Show all errors if any
        if (errors.length > 0) {
            e.preventDefault();
            alert("Please fix the following errors:\n\n" + errors.join("\n"));
        }
    });
});
