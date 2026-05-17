// script.js

console.log("Blackjack Rooms Loaded");

/* BUTTON EFFECT */
const buttons = document.querySelectorAll(".btn");

buttons.forEach((btn) => {

  btn.addEventListener("click", () => {

    btn.style.transform = "scale(0.98)";

    setTimeout(() => {
      btn.style.transform = "";
    },150);

  });

});

/* PREMIUM INTRO */
window.onload = function(){

    const intro = document.getElementById("intro");

    setTimeout(() => {

        intro.style.opacity = "0";

        setTimeout(() => {

            intro.style.display = "none";

            document.body.style.overflow = "auto";

        },1200);

    },3000);

};