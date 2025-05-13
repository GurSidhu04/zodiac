document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("zodiacForm");
    const yearInput = document.getElementById("year");
    const resultDiv = document.getElementById("result");

    // Event 1: Submit form
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const year = parseInt(yearInput.value);
        const animal = getZodiacAnimal(year);
        resultDiv.textContent = `Year ${year} is the year of the ${animal}`;
    });

    // Event 2: Change input
    yearInput.addEventListener("input", () => {
        resultDiv.textContent = ""; // Clear previous result
    });

    // Event 3: Mouseover effect
    resultDiv.addEventListener("mouseover", () => {
        resultDiv.style.color = "#007700";
    });

    resultDiv.addEventListener("mouseout", () => {
        resultDiv.style.color = "#d14";
    });

    function getZodiacAnimal(year) {
        const animals = ["Rat", "Ox", "Tiger", "Rabbit", "Dragon", "Snake", "Horse", "Goat", "Monkey", "Rooster", "Dog", "Pig"];
        return animals[(year - 4) % 12];
    }
});
