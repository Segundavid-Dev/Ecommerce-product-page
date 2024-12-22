"use strict";

const iconCart = document.querySelector(".icon__cart");
const decreaseItem = document.querySelector(".decrease__item");
const increaseItem = document.querySelector(".increase__item");
const count = document.querySelector(".count");

let countValue = 0;

// Open cart functionality
iconCart.addEventListener("click", () => {
  alert("added to cart");
});

// Increase cart item
increaseItem.addEventListener("click", () => {
  countValue++;
  count.innerHTML = countValue;
});

// Decrease cart item
decreaseItem.addEventListener("click", () => {
  if (countValue > 0) {
    countValue--;
    count.innerHTML = countValue;
  }
});
