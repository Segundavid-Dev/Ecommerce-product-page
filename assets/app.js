"use strict";

const iconCart = document.querySelector(".icon__cart");
const decreaseItem = document.querySelector(".decrease__item");
const increaseItem = document.querySelector(".increase__item");
const count = document.querySelector(".count");
const modal = document.querySelector(".modal");
const cartCheckout = document.querySelector(".cart__checkout");
const addToCart = document.querySelector(".add_to_cart");
let countValue = 0;

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

// Open modal message
iconCart.addEventListener("click", () => {
  modal.classList.add("modal__open");
});

// Checkout modal message
cartCheckout.addEventListener("click", () => {
  modal.classList.remove("modal__open");
});

// Add to cart functionality

addToCart.addEventListener("click", () => {
  if (countValue == 0) {
    alert("Add item to cart!");
  } else if (countValue > 0) {
    modal.classList.add("modal__open");
  }
});
