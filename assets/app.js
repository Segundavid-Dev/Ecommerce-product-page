"use strict";

const iconCart = document.querySelector(".icon__cart");
const decreaseItem = document.querySelector(".decrease__item");
const increaseItem = document.querySelector(".increase__item");
const count = document.querySelector(".count");
const modal = document.querySelector(".modal");
const cartCheckout = document.querySelector(".cart__checkout");
let addToCart = document.querySelector(".add_to_cart");
const delete_item = document.querySelector(".delete");
const cartInfo = document.querySelector(".cart__info");
let totalItem = document.querySelector(".total__item");
let totalPrice = document.querySelector(".total__price");
// main product image
const mainImage = document.querySelector(".main__image-img ");
// product images
const products = document.querySelectorAll(".products");
const product1 = document.querySelector(".product1"),
  product2 = document.querySelector(".product2"),
  product3 = document.querySelector(".product3"),
  product4 = document.querySelector(".product4");
const disCountPrice = 125;
let countValue = 0;

// Increase cart item
increaseItem.addEventListener("click", () => {
  countValue++;
  count.innerHTML = countValue;
  totalItem.innerHTML = countValue;

  // calculate total price
  const calculatedTotal = disCountPrice * countValue;
  totalPrice.innerHTML = calculatedTotal;
});

// Decrease cart item
decreaseItem.addEventListener("click", () => {
  if (countValue > 0) {
    countValue--;
    count.innerHTML = countValue;
    totalItem.innerHTML = countValue;
  }
});

// Open modal message
iconCart.addEventListener("click", () => {
  if (countValue === 0) {
    alert("Empty Cart ");
  } else {
    modal.classList.add("modal__open");
  }
});

// Checkout modal message
cartCheckout.addEventListener("click", () => {
  modal.classList.remove("modal__open");
});

// Add to cart functionality
addToCart.addEventListener("click", () => {
  if (countValue === 0) {
    alert("your cart is empty");
  } else if (countValue > 0) {
    modal.classList.add("modal__open");
  }
});

// DRY code principle
products.forEach(() => {
  products[0].addEventListener("click", () => {
    mainImage.src = `images/image-product-1.jpg`;
  }),
    products[1].addEventListener("click", () => {
      mainImage.src = `images/image-product-2.jpg`;
    }),
    products[2].addEventListener("click", () => {
      mainImage.src = `images/image-product-3.jpg`;
    }),
    products[3].addEventListener("click", () => {
      mainImage.src = `images/image-product-4.jpg`;
    });
});
// still need some refactoring!!!
delete_item.addEventListener("click", () => {
  alert("removed items from cart");
});

// change product image on click event
