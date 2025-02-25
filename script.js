const toggleButton = document.getElementById("dark-mode-toggle");
const body = document.body;

toggleButton.addEventListener("click", () => {
    body.classList.toggle("dark-mode");

    // Change button text based on mode
    if (body.classList.contains("dark-mode")) {
        toggleButton.innerText = "☀️ Light Mode";
    } else {
        toggleButton.innerText = "🌙 Dark Mode";
    }
});
