const balance = document.getElementById("balance");
const eyeButton = document.querySelector(".eye");
let hidden = false;
eyeButton.addEventListener("click", () => {
  hidden = !hidden;
  balance.textContent = hidden ? "₦••••" : "₦0.00";
  eyeButton.setAttribute("aria-label", hidden ? "Show balance" : "Hide balance");
});

document.querySelectorAll("button").forEach((button) => {
  if (button.classList.contains("eye")) return;
  button.addEventListener("click", () => {
    // Demo UI only: connect these actions to your backend when building functionality.
    if (button.classList.contains("nav-item")) {
      document.querySelectorAll(".nav-item").forEach(item => item.classList.remove("active"));
      button.classList.add("active");
    }
  });
});
