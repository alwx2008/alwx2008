let image = document.querySelector('img');
let span = document.querySelector('span');
let p = document.querySelector('p').innerHTML = "You have booped me <span> times.";
let boops = 0;

function boop() {
  boop++;
  span.textContent = boops.value;
}
