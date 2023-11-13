const displayedImage = document.querySelector(".displayed-img");
const thumbBar = document.querySelector(".thumb-bar");

const btn = document.querySelector("button");
const overlay = document.querySelector(".overlay");

/* Declaring the array of image filenames */
const images = [
  `mypic1.png`,
  `mypic2.png`,
  `mypic3.jpeg`,
  `mypic4.jpeg`,
  `mypic5.jpeg`,
];

/* Declaring the alternative text for each image file */
const alts = {
  "mypic1.png": "3 characters from moomin",
  "mypic2.png": "moomin",
  "mypic3.jpeg": "moomin on a cloud",
  "mypic4.jpeg": "moomin strolling",
  "mypic5.jpeg": "sunumya fishing",
};
/* Looping through images */

for (const i of images) {
  const newImage = document.createElement("img");
  newImage.setAttribute("src", `images/${i}`);
  newImage.setAttribute("alt", `alts[i]`);

  newImage.style.height = `100px`;

  thumbBar.appendChild(newImage);
  newImage.addEventListener("click", (e) => {
    displayedImage.src = e.target.src;
    displayedImage.alt = e.target.alt;
  });
}

/* Wiring up the Darken/Lighten button */
btn.addEventListener("click", () => {
  const btnClass = btn.getAttribute("class");

  if (btnClass === "dark") {
    btn.setAttribute("class", "light");
    btn.textContent = "Light";
    overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
  } else {
    btn.setAttribute("class", "dark");
    btn.textContent = "Dark";
    overlay.style.backgroundColor = "rgba(0,0,0,0)";
  }
});
