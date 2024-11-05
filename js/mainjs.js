const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array) {
  const random = Math.floor(Math.random() * array.length);
  return array[random];
}

let storyText = "It was 110 fahrenheit outside, so :insertx: went for a hike in Boulder. When they got to :inserty:, they started watching the Buffs game, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 800 pounds, and the Buffs lost.";
let insertX = ["Jess the Brave", "JHP the Explorer", "Ralphie"];
let insertY = ["The rockies", "the pearl street mall", "the hidden flatirons"];
let insertZ = ["Blew up!", "started random dancing", "Slipped and fell"];

if (randomize) {
  randomize.addEventListener('click', result);
}

function result() {
  let newStory = storyText;

  let xItem = randomValueFromArray(insertX);
  let yItem = randomValueFromArray(insertY);
  let zItem = randomValueFromArray(insertZ);

  newStory = newStory.replace(/:insertx:/g, xItem);
  newStory = newStory.replace(':inserty:', yItem);
  newStory = newStory.replace(':insertz:', zItem);

  if (customName && customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace('Bob', name);
  }

  if (document.getElementById("uk") && document.getElementById("uk").checked) {
    const weight = Math.round(800 * 0.0714286) + ' stone';
    const temperature = Math.round((110 - 32) * 5 / 9) + ' centigrade';
    
    newStory = newStory.replace('800 pounds', weight);
    newStory = newStory.replace('110 fahrenheit', temperature);
  }

  if (story) {
    story.textContent = newStory;
    story.style.visibility = 'visible';
  }
}
