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
let color1 = "";
let color2 = "";

const getNewColor = function () {
  newColor = "#";
  for (let i = 0; i < times; i++) {
    const randomIndex = Math.floor(Math.random() * hex.length);
    color1 = newColor + hex[randomIndex];
  }
  console.log(newColor);
};

const getColor1 = function () {
  getNewColor();
};
getColor1();

const getColor2 = function () {
  getNewColor();
};
getColor2();

document.body.style.background = `linear-gradient(${color1}, ${color2})`;
