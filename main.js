// Init titles
// const titleStyle = document.getElementById("controls__title-style");
// require("es6-promise/auto");

// const html2canvas = require("html2canvas");

// Image parts list
const dwnButton = document.getElementById("download");

const hair = [
  { text: "Default", src: "./alpaca/hair/default.png" },
  { text: "Bang", src: "./alpaca/hair/bang.png" },
  { text: "Curls", src: "./alpaca/hair/curls.png" },
  { text: "Elegant", src: "./alpaca/hair/elegant.png" },
  { text: "Fancy", src: "./alpaca/hair/fancy.png" },
  { text: "Quiff", src: "./alpaca/hair/quiff.png" },
  { text: "Short", src: "./alpaca/hair/short.png" },
];

const eyes = [
  { text: "Default", src: "./alpaca/eyes/default.png" },
  { text: "Angry", src: "./alpaca/eyes/angry.png" },
  { text: "Naughty", src: "./alpaca/eyes/naughty.png" },
  { text: "Panda", src: "./alpaca/eyes/panda.png" },
  { text: "Smart", src: "./alpaca/eyes/smart.png" },
  { text: "Star", src: "./alpaca/eyes/star.png" },
];

const ears = [
  { text: "Default", src: "./alpaca/ears/default.png" },
  { text: "Tilt Backward", src: "./alpaca/ears/tilt-backward.png" },
  { text: "Tilt Forward", src: "./alpaca/ears/tilt-forward.png" },
];

const leg = [
  { text: "Default", src: "./alpaca/leg/default.png" },
  { text: "Bubble Tea", src: "./alpaca/leg/bubble-tea.png" },
  { text: "Cookie", src: "./alpaca/leg/cookie.png" },
  { text: "Game Console", src: "./alpaca/leg/game-console.png" },
  { text: "Tilt Backward", src: "./alpaca/leg/tilt-backward.png" },
  { text: "Tilt Forward", src: "./alpaca/leg/tilt-forward.png" },
];

const mouth = [
  { text: "Default", src: "./alpaca/mouth/default.png" },
  { text: "Astonished", src: "./alpaca/mouth/astonished.png" },
  { text: "Eating", src: "./alpaca/mouth/eating.png" },
  { text: "Laughing", src: "./alpaca/mouth/laugh.png" },
  { text: "Tongue", src: "./alpaca/mouth/tongue.png" },
];

const neck = [
  { text: "Default", src: "./alpaca/neck/default.png" },
  { text: "Thick", src: "./alpaca/neck/thick.png" },
  { text: "Bend Backward", src: "./alpaca/neck/bend-backward.png" },
  { text: "Bend Forward", src: "./alpaca/neck/bend-forward.png" },
];

const accessories = [
  { text: "Earings", src: "./alpaca/accessories/earings.png" },
  { text: "Flower", src: "./alpaca/accessories/flower.png" },
  { text: "Glasses", src: "./alpaca/accessories/glasses.png" },
  { text: "Headphones", src: "./alpaca/accessories/headphone.png" },
];

const background = [
  { text: "Blue 50", src: "./alpaca/backgrounds/blue50.png" },
  { text: "Blue 60", src: "./alpaca/backgrounds/blue60.png" },
  { text: "Blue 70", src: "./alpaca/backgrounds/blue70.png" },
  { text: "Dark Blue 30", src: "./alpaca/backgrounds/darkblue30.png" },
  { text: "Dark Blue 50", src: "./alpaca/backgrounds/darkblue50.png" },
  { text: "Dark Blue 70", src: "./alpaca/backgrounds/darkblue70.png" },
  { text: "Green 50", src: "./alpaca/backgrounds/green50.png" },
  { text: "Green 60", src: "./alpaca/backgrounds/green60.png" },
  { text: "Green 70", src: "./alpaca/backgrounds/green70.png" },
  { text: "grey 40", src: "./alpaca/backgrounds/grey40.png" },
  { text: "Yellow 50", src: "./alpaca/backgrounds/grey70.png" },
  { text: "Yellow 60", src: "./alpaca/backgrounds/grey80.png" },
];

function randomGen() {
  const randBack = Math.floor(Math.random() * background.length);
  const randHair = Math.floor(Math.random() * hair.length);
  const randEyes = Math.floor(Math.random() * eyes.length);
  const randEars = Math.floor(Math.random() * ears.length);
  const randLeg = Math.floor(Math.random() * leg.length);
  const randMouth = Math.floor(Math.random() * mouth.length);
  const randNeck = Math.floor(Math.random() * neck.length);
  const randAccess = Math.floor(Math.random() * accessories.length);
  changeStyle(background[randBack]);
  changeStyle(hair[randHair]);
  changeStyle(eyes[randEyes]);
  changeStyle(ears[randEars]);
  changeStyle(background[randBack]);
  changeStyle(leg[randLeg]);
  changeStyle(mouth[randMouth]);
  changeStyle(accessories[randAccess]);
  changeStyle(neck[randNeck]);
  // console.log(randBack);
}

function ShowHairStyles() {
  const styleContainer = document.querySelector(".style_buttons");
  styleContainer.innerHTML = "";
  createButton(styleContainer, hair);
}
function ShowEarStyle() {
  const styleContainer = document.querySelector(".style_buttons");
  styleContainer.innerHTML = "";
  createButton(styleContainer, ears);
}
function ShowEyesStyle() {
  const styleContainer = document.querySelector(".style_buttons");
  styleContainer.innerHTML = "";
  createButton(styleContainer, eyes);
}
function ShowMouthStyle() {
  const styleContainer = document.querySelector(".style_buttons");
  styleContainer.innerHTML = "";
  createButton(styleContainer, mouth);
}
function ShowNeckStyle() {
  const styleContainer = document.querySelector(".style_buttons");
  styleContainer.innerHTML = "";
  createButton(styleContainer, neck);
}
function ShowLegsStyle() {
  const styleContainer = document.querySelector(".style_buttons");
  styleContainer.innerHTML = "";
  createButton(styleContainer, leg);
}
function ShowAccesStyle() {
  const styleContainer = document.querySelector(".style_buttons");
  styleContainer.innerHTML = "";
  createButton(styleContainer, accessories);
}
function ShowBackStyle() {
  const styleContainer = document.querySelector(".style_buttons");
  styleContainer.innerHTML = "";
  createButton(styleContainer, background);
}
// Creates all the buttons
function createButton(type, styles) {
  for (const style of styles) {
    let temp = createStyleButton(style);
    type.appendChild(temp);
    // console.log(style); // Remove this line if you don't need the logging
  }
}
// creatre all the styleed buttons
function createStyleButton(style) {
  const button = document.createElement("button");
  if (style.text) {
    button.textContent = style.text;
  } else {
    button.textContent = style.name;
  }
  button.addEventListener("click", function () {
    changeStyle(style, style.text ? style.text : style.name);
  });
  return button;
}
function changeStyle(style) {
  let src = style.src;
  if (src.includes("hair")) {
    changeSRC(style, "hair");
  }
  if (src.includes("ears")) {
    changeSRC(style, "ears");
  }
  if (src.includes("eyes")) {
    changeSRC(style, "eyes");
  }
  if (src.includes("mouth")) {
    changeSRC(style, "mouth");
  }
  if (src.includes("neck")) {
    changeSRC(style, "neck");
  }
  if (src.includes("leg")) {
    changeSRC(style, "legs");
  }
  if (src.includes("accessories")) {
    console.log(style);
    changeSRC(style, "headphones");
  }
  if (src.includes("back")) {
    console.log(style);
    changeSRC(style, "back");
  }
}
let privlocation;
function changeSRC(style, type) {
  const location = style.src;
  if (privlocation === location) {
    return;
  }
  privlocation = location;
  const imageElement = document.getElementById(type);
  // console.log(imageElement);
  // console.log(n);
  imageElement.src = location;
}

const bgpart = document.getElementById("image_container");

// function press() {
//   html2canvas(bgpart, { scale: 1 }).then(function (canvas) {
//     const fileName = "alpaca_pic";
//     const link = document.createElement("a");
//     link.download = fileName + ".png";

//     canvas.toBlob(function (blob) {
//       link.href = URL.createObjectURL(blob);
//       link.click();
//     });
//   });
// }
function press() {
  html2canvas(bgpart, { scale: 1 }).then(function (canvas) {
    const fileName = "my-alpaca";
    const link = document.createElement("a");
    link.download = fileName + ".png";

    canvas.toBlob(function (blob) {
      link.href = URL.createObjectURL(blob);
      link.click();
    });
  });
}
