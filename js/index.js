const title = document.querySelector("header h1");
const sentence = "Hi, I'm Alexandre CATHALIFAUD";
let index = 0;

const typing = (letter) => {
  if (index < sentence.length) {
    title.textContent += letter;
    index++;
  } else {
    clearInterval(interval);
  }
};

const interval = setInterval(() => {
  typing(sentence[index]);
}, 90);
