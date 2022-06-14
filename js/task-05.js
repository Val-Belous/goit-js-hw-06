const input = document.querySelector("#name-input");
const title = document.querySelector("#name-output");

const onInputType = input.addEventListener("input", handlerInput);

function handlerInput(event) {
  console.log(event);
  if (event.target.value === "") {
    return (title.textContent = "Anonymous");
  }
  title.textContent = event.target.value;
}
