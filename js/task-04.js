const value = document.querySelector("#value");
let counterValue = 0;

const decr = document.querySelector('button[data-action="decrement"]');
const onDecrClick = decr.addEventListener("click", handlerDecr);

const incr = document.querySelector('button[data-action="increment"]');
const onIncrClick = incr.addEventListener("click", handlerIncr);

function handlerIncr(event) {
  counterValue += 1;
  return (value.textContent = counterValue);
}

function handlerDecr(event) {
  counterValue -= 1;
  return (value.textContent = counterValue);
}
