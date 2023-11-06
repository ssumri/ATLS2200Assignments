// 1. COMPLETE VARIABLE AND FUNCTION DEFINITIONS

const customName = document.getElementById("customname");
const randomize = document.querySelector(".randomize");
const story = document.querySelector(".story");

function randomValueFromArray(array) {
  const random = Math.floor(Math.random() * array.length);
  return array[random];
}

// 2. RAW TEXT STRINGS
let storytext =
  "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";

let insertx = [
  "Sandy the squirrel",
  "Spongebob the sponge",
  "Patrick the star",
];
let inserty = ["The Krusty Krab", "Chum Bucket", "Squidward's house"];
let insertz = ["BOOM", "SNAP", "POW"];

// 3. EVENT LISTENER AND PARTIAL FUNCTION DEFINITION

randomize.addEventListener("click", result);

function result() {
  let newStory = storytext;
  let xItem = randomValueFromArray(insertx);
  let posx = newStory.search(":insertx:");
  let yItem = randomValueFromArray(inserty);
  let posy = newStory.search(":inserty:");
  let zItem = randomValueFromArray(insertz);
  let posz = newStory.search(":insertz:");

  if (posx >= 0) {
    newStory = newStory.replaceAll(":insertx:", xItem);
  }
  if (posy >= 0) {
    newStory = newStory.replaceAll(":inserty:", yItem);
  }
  if (posz >= 0) {
    newStory = newStory.replaceAll(":insertz:", zItem);
  }

  if (customName.value !== "") {
    const name = customName.value;
    newStory = newStory.replaceAll("Bob", name);
  }

  if (document.getElementById("uk").checked) {
    const weight = Math.floor(94 / 14);
    const temperature = Math.floor((300 - 32) * (5 / 9));

    newStory = newStory.replaceAll(
      "94 fahrenheit",
      temperature + " centigrade"
    );
    newStory = newStory.replaceAll("300 pounds", weight + " stones");
  }

  //   console.log("before making visible");

  story.textContent = newStory;
  story.style.visibility = "visible";

  //   console.log("after making visible");
}
