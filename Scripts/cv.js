document.addEventListener("DOMContentLoaded", function () {
    getCurrentYear();
});

function getCurrentYear() {
  const yearElement = document.getElementById("year");
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
}