function simulateDecision() {
  const logs = document.getElementById("logs");

  const decisions = [
    "Scaling Up 🚀",
    "Scaling Down ⬇️",
    "System Stable ✅"
  ];

  const decision = decisions[Math.floor(Math.random() * decisions.length)];

  const li = document.createElement("li");
  li.textContent = decision;

  logs.appendChild(li);
}