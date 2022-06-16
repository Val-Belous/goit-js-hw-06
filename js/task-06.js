const input = document.querySelector("#validation-input");
const onInput = input.addEventListener("blur", () => {
  if (input.value.length === Number(input.dataset.length)) {
    input.classList.remove("invalid");
    input.classList.add("valid");
    return;
  }
  input.classList.add("invalid");
  input.classList.remove("valid");
});
