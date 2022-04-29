const myevent = document.getElementById("clickBtn");
const display = document.getElementById("display");
myevent.onclick = function () {
  const b = document.getElementById("number");
  const number = b.value;
  let isPrime = true;
  if (number == 1) {
    display.textContent = "1 is neither prime nor composite";
  } else if (number > 1) {
    for (let i = 2; i < number; i++) {
      if (number % i == 0) {
        isPrime = false;
      }
    }
    if (isPrime) {
      display.textContent = number + ":is prime";
    } else {
      display.textContent = number + ":is composite";
    }
  }
};
