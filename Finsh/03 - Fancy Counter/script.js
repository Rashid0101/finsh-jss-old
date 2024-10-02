const counterEl = document.querySelector(".counter");
const buttonIncreaseEl = document.querySelector(".counter__button--increase");
const buttonDecreaseEl = document.querySelector(".counter__button--decrease");
const resetButtonEl = document.querySelector(".counter__reset-button");
const counterValueEl = document.querySelector(".counter__value");
const counterTitleEl = document.querySelector(".counter__title");

resetButtonEl.addEventListener("click", () => {
  counterValueEl.textContent = 0;
  buttonIncreaseEl.disabled = false;
  buttonDecreaseEl.disabled = false;
  counterTitleEl.textContent = "Fancy Counter";
  counterEl.classList.remove("counter--limit");
  resetButtonEl.blur();
});

buttonDecreaseEl.addEventListener("click", () => {
  const currentValue = counterValueEl.textContent;
  const currentValueAsNumber = +currentValue;
  let newValue = currentValueAsNumber - 1;
  if (newValue < 0) {
    newValue = 0;
  }
  counterValueEl.textContent = newValue;
});

const incrementCounter = () => {
  const currentValue = counterValueEl.textContent;
  const currentValueAsNumber = +currentValue;
  let newValue = currentValueAsNumber + 1;
  if (newValue > 5) {
    newValue = 5;
    counterEl.classList.add("counter--limit");
    counterTitleEl.innerHTML = "Limit! Buy <b>Pro</b> for >5";
    buttonIncreaseEl.disabled = true;
    buttonDecreaseEl.disabled = true;
  }
  counterValueEl.textContent = newValue;
};

buttonIncreaseEl.addEventListener("click", incrementCounter);
document.addEventListener("keydown", incrementCounter);
