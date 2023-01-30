let count = 0;

const description = document.querySelector("div");

const buttonPressed = () => {
  count += 1;
  description.innerText = `Number of times button clicked: ${count}`;
};

const button = document.querySelector("button");
button.addEventListener("click", buttonPressed);
