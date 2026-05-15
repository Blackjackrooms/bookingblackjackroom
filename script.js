// script.js

console.log("Blackjack Rooms Loaded");

// Contoh fungsi tombol
const buttons = document.querySelectorAll(".btn");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    console.log("Button clicked");
  });
});