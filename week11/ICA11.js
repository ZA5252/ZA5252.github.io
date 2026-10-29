// Complete variable definitions and random functions

const customName = document.getElementById("custom-name");
const generateBtn = document.querySelector(".generate");
const story = document.querySelector(".story");

function randomValueFromArray(array) {
  const random = Math.floor(Math.random() * array.length);
  return array[random];
}

// Raw text strings
let characters = ["Lebron James", "Obama", "my mother"];
let places = ["the Louvre", "Kansas City", "my apartment"];
let events = ["ate a candy bar", "drove their car into a wall", "started meditating"];

// Partial return random string function

function returnRandomStoryString() {
    let randomCharacter = randomValueFromArray(characters);
    let randomPlace = randomValueFromArray(places);
    let randomEvent = randomValueFromArray(events);
    let storyText = `It was 94 Fahrenheit outside, so ${randomCharacter} went for a walk. When they got to ${randomPlace}, they stared in horror for a few moments, then ${randomEvent}. Bob saw the whole thing, but was not surprised — ${randomCharacter} weighs 300 pounds, and it was a hot day.`;

    return storyText;
}

// Event listener and partial generate function definition

generateBtn.addEventListener("click", generateStory);

function generateStory() {
    let newStory = returnRandomStoryString();

    if (customName.value !== "") {
        const name = customName.value;
        newStory = newStory.replace("Bob", name);
    }

    if (document.getElementById("uk").checked) {
        const weight = Math.round(300/14) + " stone";
        const temperature = Math.round((94-32)*(5/9)) + " Celcius";
        newStory = newStory.replace("300 pounds", weight);
        newStory = newStory.replace("94 Fahrenheit", temperature);
    }

  // TODO: replace "" with the correct expression
    story.textContent = newStory;
    story.style.visibility = "visible";
}