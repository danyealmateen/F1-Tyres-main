let button = document.getElementById("button");
let container = document.getElementById("container");
let itemHeader = document.getElementById("itemHeader");
let item = 1;

button.addEventListener("click", () => {
  container.classList.toggle("hidden");
  console.log("Du har klickat mig");
});

let buttonForMode = document.getElementById("buttonForMode");
let menuText = document.getElementById("menu-text");
const mode = document.getElementById("mode");

buttonForMode.addEventListener("click", () => {
  if (mode.content == "light") {
    mode.content = "dark";
    buttonForMode.style.backgroundColor = "white";
    buttonForMode.style.color = "black";
    buttonForMode.textContent = "Light mode";
  } else {
    mode.content = "light";
    buttonForMode.style.backgroundColor = "black";
    buttonForMode.style.color = "white";
    buttonForMode.textContent = "Dark mode";
  }
});

let tyreButton = document.querySelectorAll("button#tyreButton");
console.log(tyreButton);
tyreButton.forEach((button) => {
  button.addEventListener("click", () => {
    itemHeader.innerHTML = `Items in the basket: ${item++}`;
  });
});
