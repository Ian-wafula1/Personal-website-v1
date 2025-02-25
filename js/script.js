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

dropDown.addEventListener('click', e => {
  if (dropDown.classList.contains('menu')) {
    items.forEach(item => item.style.display = 'unset')
    header.style.paddingBottom = '2rem'
    header.style.height = '100vh'
    header.style.boxShadow = '0px 3px 65px 0px rgba(189,172,172,0.75)'
    dropDown.innerHTML = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M20.7457 3.32851C20.3552 2.93798 19.722 2.93798 19.3315 3.32851L12.0371 10.6229L4.74275 3.32851C4.35223 2.93798 3.71906 2.93798 3.32854 3.32851C2.93801 3.71903 2.93801 4.3522 3.32854 4.74272L10.6229 12.0371L3.32856 19.3314C2.93803 19.722 2.93803 20.3551 3.32856 20.7457C3.71908 21.1362 4.35225 21.1362 4.74277 20.7457L12.0371 13.4513L19.3315 20.7457C19.722 21.1362 20.3552 21.1362 20.7457 20.7457C21.1362 20.3551 21.1362 19.722 20.7457 19.3315L13.4513 12.0371L20.7457 4.74272C21.1362 4.3522 21.1362 3.71903 20.7457 3.32851Z" fill="#0F0F0F"></path> </g></svg>'

  } else {
    items.forEach(item => item.style.display = 'none')
    dropDown.style.display = 'block'
    header.style.paddingBottom = 'unset'
    header.style.boxShadow = 'unset'
    header.style.height = 'unset'
    dropDown.innerHTML = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 6H20M4 12H20M4 18H20" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>'
    dropDown.style.backgroundImage = "url('../images/menu-svgrepo-com.svg')"
  }
  dropDown.classList.toggle('close')
  dropDown.classList.toggle('menu')
})