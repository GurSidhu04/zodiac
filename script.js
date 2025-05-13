document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("zodiacForm");
    const yearInput = document.getElementById("year");
    const resultDiv = document.getElementById("result");

    // Submit form
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const year = parseInt(yearInput.value);

        if (isNaN(year) || year < 0 || year > 4000) {
            resultDiv.textContent = "Please enter a valid year between 0 and 4000.";
            resultDiv.style.color = "#cc0000";
            return;
        }

        const animal = getZodiacAnimal(year);
        resultDiv.textContent = `The year ${year} is the Year of the ${animal}.`;
        resultDiv.style.color = "#333"; // Reset to neutral
    });

    // Clear result on input
    yearInput.addEventListener("input", () => {
        resultDiv.textContent = "";
    });

    // Hover effects
    resultDiv.addEventListener("mouseover", () => {
        resultDiv.style.color = "#007700"; // Green
    });

    resultDiv.addEventListener("mouseout", () => {
        resultDiv.style.color = "#333"; // Neutral
    });

    function getZodiacAnimal(year) {
        const animals = [
            "Rat", "Ox", "Tiger", "Rabbit", "Dragon", "Snake",
            "Horse", "Goat", "Monkey", "Rooster", "Dog", "Pig"
        ];
        return animals[(year - 4) % 12];
    }
});
