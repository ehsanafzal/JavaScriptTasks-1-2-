const task3Event = document.getElementById("clickBtn3");
const display3 = document.getElementById("result3");
task3Event.onclick = function () {
  let a = document.getElementById("number3");
  let num = a.value;
  if (num == 0) {
    display3.innerHTML = num + ":Number is equal to zero";
  } else if (num > 0) {
    display3.innerHTML = num + ":Number is positive";
  } else {
    display3.innerHTML = num + ":Number is negative";
  }
};
