var upper = 9999999999;
var lower = 0;
var current = 0;

var helpmade = false;

var counter = 0;

$(document).ready(function () {
  updateDisplay();
  $("#increase").click(increase);
  $("#submit").click(submit);
  $("#reset").click(reset);
  const resetBtn = document.getElementById("reset");

  resetBtn.addEventListener("mouseover", function () {
    resetBtn.style.left = `${Math.ceil(Math.random() * 90)}%`;
    resetBtn.style.top = `${Math.ceil(Math.random() * 90)}%`;
    resetBtn.textContent = "are you sure?";
  });
});

function submit() {
  alert("You submitted: " + numberToString(current));
  current = 0;
  updateDisplay();
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
  updateDisplay();
}

function reset() {
  current = 0;
  counter = 0;
  updateDisplay();
}

function helpFcn() {
  if (document.getElementById("help") == null) {
    const helpBtn = document.createElement("button");
    helpBtn.setAttribute("id", "help");
    helpBtn.textContent = "Help ME";
    document.getElementById("container").appendChild(helpBtn);
  }
}

// Critique comments:
//
