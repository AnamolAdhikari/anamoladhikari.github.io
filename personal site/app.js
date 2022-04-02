const hamburger_menu = document.querySelector(".hamburger-menu");
const container = document.querySelector(".container");

hamburger_menu.addEventListener("click", () => {
  container.classList.toggle("active");
});
var i = 0;
var txt =
  " GameSite is the simple to-involve skin commercial center for CSGO things that permits you to trade CSGO skins for genuine cash.";
var speed = 35;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
