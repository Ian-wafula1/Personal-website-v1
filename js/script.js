"use strict";

const img = [...document.querySelectorAll(".card > div")];

const [tic, etch, admin, library] = img;

img.forEach((img) =>
  img.addEventListener("mouseover", (e) => {
    const text = img.querySelector("p");
    text.style.visibility = "visible";
    text.style.background = "#1413139a";
  })
);

img.forEach((img) =>
  img.addEventListener("mouseout", function (e) {
    const text = img.querySelector("p");
    text.style.visibility = "hidden";
    text.style.background = "none";
  })
);
