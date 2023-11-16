const btn = document.querySelector("#js-new-quote");

btn.addEventListener("click", getQuote);

function getQuote() {
  console.log("button Clicked.");

  const apiEndpoint = "https://trivia.cyberwisp.com/getrandomchristmasquestion";

  fetch(apiEndpoint)
    .then((response) => response.json())
    .then((data) => {
      displayQuote(data.question);
      console.log(data);
    })
    .catch((error) => {
      console.error("error in get request");
      alert("error in get request");
    });
}

function displayQuote(quoteText) {
  const quoteTextElement = document.getElementById("js-quote-text");
  quoteTextElement.textContent = quoteText;
}
