var upper = 9999999999;
var lower = 0;
var current = 0;

var helpmade = false;

var counter = 0;
var decCounter = 0;

$(document).ready(function () {
  updateDisplay();
  $("#increase").click(increase);
  $("#submit").click(submit);
  $("#help").click(decrease);
});

function submit() {
  if (current >= 1000000000) {
    alert("You submitted: " + numberToString(current));
    current = 0;
    updateDisplay();
  } else {
    alert("Invalid phone number");
    updateDisplay();
  }
}

function numberToString(p) {
  return p.toString();
}

function updateDisplay() {
  $("#phone-number").html(numberToString(current));
}

function increase() {
  current = current + Math.floor(Math.random() * (upper / 5));
  counter = counter + 1;
  if (current >= upper) {
    alert("Resetting");
    reset();
    return;
  } else if (counter == 5 && !helpmade) {
    helpFcn();
  }
  if (counter % 5 == 1) {
    p;
  }
  updateDisplay();
}

function reset() {
  current = 0;
  counter = 0;
  updateDisplay();
}

function decrease() {
  console.log("decreasing by 1");
  current = current - 1;
  updateDisplay();
}

function helpFcn() {
  helpmade = true;
  helpBtn = document.getElementById("help");
  // const helpBtn = document.createElement("button");
  // helpBtn.setAttribute("id", "help");
  helpBtn.style.visibility = "visible";
  document.getElementById("container").appendChild(helpBtn);
  helpBtn.addEventListener("click", decrease());
}

// Critique comments:
//
