const task2Event = document.getElementById("clickBtn2");
const display1 = document.getElementById("result");
task2Event.onclick = function () {
  const a = document.getElementById("number1");
  const num = a.value;
  if (num % 2 == 0) {
    display1.innerHTML = num + ":Number is Even";
  } else {
    display1.innerHTML = num + ":Number is odd";
  }
};
