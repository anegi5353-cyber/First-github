function showMessage() {
    document.getElementById("message").textContent =
        "Thanks for visiting my portfolio! 🚀";
}

function toggleTheme() {
    document.body.classList.toggle("light");

    const button = document.getElementById("themeBtn");

    if (document.body.classList.contains("light")) {
        button.textContent = "☀️";
    } else {
        button.textContent = "🌙";
    }
}
