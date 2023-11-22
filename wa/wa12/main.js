const btn = document.querySelector("#js-new-quote");

btn.addEventListener("click", getQuote);

function getQuote() {
  console.log("button Clicked.");

  const apiEndpoint = "https://api.quotable.io/random";

  fetch(apiEndpoint)
    .then((response) => response.json())
    .then((data) => {
      displayQuote(data.content);
      console.log(data.content);

      console.log(data.author);
      console.log(data.authorSlug);
      displayAuthor(data.author, data.authorSlug);
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

function getProfileImageURL(author, size = 200) {
  const IMAGE_BASE = "https://images.quotable.dev/profile";
  return `${IMAGE_BASE}/${size}/${author}.jpg`;
}

function displayAuthor(authorname, authorSlug) {
  const authorTextElement = document.getElementById("js-answer-text");
  authorTextElement.textContent = authorname;

  const authorImageContainer = document.getElementById(
    "author-image-container"
  );
  const authorImage = document.createElement("img");
  authorImage.id = "authorImage";
  authorImage.src = getProfileImageURL(authorSlug);
  authorImageContainer.appendChild(authorImage);
}

// I have added the author and author image generation when the button to create a new quote is clicked.
// This is done using the features provided in the api I am using.
// I have also changed the css for this image and provided necessary changed in the html.
