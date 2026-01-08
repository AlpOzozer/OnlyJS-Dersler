import { throwConfetti } from "./confetti.js";

const confettiButton = document.getElementById("throw-confetti");
confettiButton.addEventListener("click", throwConfetti);
