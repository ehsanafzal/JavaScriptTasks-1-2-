const task4Event = document.getElementById("clickBtn4");
const display4 = document.getElementById("result4");
task4Event.onclick = function () {
  let a = document.getElementById("number4");
  let cha = a.value;
  if (cha >= 0) {
    display4.innerHTML = "please enter Alphabets";
  } else {
    if (cha == "a" || cha == "A") {
      display4.innerHTML = "Vowel";
    } else if (cha == "e" || cha == "E") {
      display4.innerHTML = "Vowel";
    } else if (cha == "i" || cha == "I") {
      display4.innerHTML = "Vowel";
    } else if (cha == "o" || cha == "O") {
      display4.innerHTML = "Vowel";
    } else if (cha == "u" || cha == "U") {
      display4.innerHTML = "Vowel";
    } else {
      display4.innerHTML = "consoent";
    }
  }
};
