const hex = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
];
const times = 6;
let newColor = "";
let color1;
let color2;

const btn = document.querySelector(".btn");
const color1Text = document.querySelector(".color-1");
const color2Text = document.querySelector(".color-2");

const changeBgColor = function () {
  function getNewColor(color) {
    newColor = "#";
    for (let i = 0; i < times; i++) {
      const randomIndex = Math.floor(Math.random() * hex.length);
      newColor += hex[randomIndex];
    }
    color === color1 ? (color1 = newColor) : (color2 = newColor);
  }

  getNewColor(color1);
  getNewColor(color2);

  document.body.style.background = `linear-gradient(${color1}, ${color2})`;
  color1Text.textContent = color1;
  color2Text.textContent = color2;
};

btn.addEventListener("click", changeBgColor);
