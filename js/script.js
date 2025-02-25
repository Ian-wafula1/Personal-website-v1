"use strict";

const img = [...document.querySelectorAll(".card > div")];
const dropDown = document.querySelector('.drop-down')
const header = document.querySelector('header')
const items = [...document.querySelectorAll('header > :not(:first-child)')]
const logo = document.querySelector('header > :first-child')
console.log(items)

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

// dropDown.addEventListener('click', e => {
//   if (dropDown.classList.contains('menu')) {
//     header.style.height = '100vh'
//     header.style.alignItems = 'unset'
//     header.style.flexDirection = 'column'
//     items.forEach(item => item.style.display = 'block')

//   } else {
//     header.style.height = 'unset'
//     items.forEach(item => item.style.display = 'none')
//   }
//   dropDown.classList.toggle('close')
//   dropDown.classList.toggle('menu')
// })