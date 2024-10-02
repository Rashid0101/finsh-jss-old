const textareaEl = document.querySelector(".textarea");
const charactersNumberEl = document.querySelector(".stat__number--characters");
const twitterNumberEl = document.querySelector(".stat__number--twitter");
const facebookNumberEl = document.querySelector(".stat__number--facebook");
const wordsNumberEl = document.querySelector(".stat__number--words");

const inputHandler = () => {
  function countWords(str) {
    return str.split(" ").filter(function (word) {
      return word.length > 0;
    }).length;
  }

  if (textareaEl.value.includes("<script>")) {
    alert("You cannot use that");
    textareaEl.value = textareaEl.value.replace("<script>", "");
  }

  const numberOfCharacters = textareaEl.value.length;
  const twitterCharactersLeft = 250 - numberOfCharacters;
  const facebookCharactersLeft = 100 - numberOfCharacters;

  const numberOfWords = countWords(textareaEl.value);

  if (twitterCharactersLeft < -0) {
    twitterNumberEl.classList.add("stat__number--limit");
  } else {
    twitterNumberEl.classList.remove("stat__number--limit");
  }

  if (facebookCharactersLeft < -0) {
    facebookNumberEl.classList.add("stat__number--limit");
  } else {
    facebookNumberEl.classList.remove("stat__number--limit");
  }

  wordsNumberEl.textContent = numberOfWords;
  charactersNumberEl.textContent = numberOfCharacters;
  twitterNumberEl.textContent = twitterCharactersLeft;
  facebookNumberEl.textContent = facebookCharactersLeft;
};

textareaEl.addEventListener("input", inputHandler);
