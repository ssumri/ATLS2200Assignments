var upper = 9999999999;
var lower = 0;
var current = 0;

$(document).ready(function () {
  updateDisplay();
  $("#increase").click(increase);
  $("#submit").click(submit);
  $("#reset").click(reset);
});

function submit() {
  alert("You submitted: " + numberToString(current));
}

function numberToString(p) {
  return p.toString();
}

function updateDisplay() {
  $("#phone-number").html(numberToString(current));
}

function increase() {
  current = current + Math.floor(Math.random() * (upper / 5));
  if (current >= upper) {
    alert("Resetting");
    reset();
    return;
  }
  updateDisplay();
}

function reset() {
  current = 0;
  updateDisplay();
}

// Critique comments:
//
