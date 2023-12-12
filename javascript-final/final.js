var upper = 9999999999;
var lower = 0;
var current = 0;

$(document).ready(function () {
  updateDisplay();
  $("#increase").click(increase);
  $("#submit").click(submit);
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
  current = current + 1;
  updateDisplay();
}
