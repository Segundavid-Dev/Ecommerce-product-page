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
const mainImage = document.querySelector(".main__image-img ");
const products = document.querySelectorAll(".products");
const cartInfoImg = document.querySelector(".cart__img-thumbnail");
const disCountPrice = 125;
let countValue = 0;

// Increase cart item
increaseItem.addEventListener("click", () => {
  countValue++;
  count.innerHTML = countValue;
  totalItem.innerHTML = countValue;

  // calculate total price
  const calculatedTotal = disCountPrice * countValue;
  totalPrice.innerHTML = `$${calculatedTotal}`;
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

// DRY code principle -> Change Product Image on click event
products.forEach(() => {
  products[0].addEventListener("click", () => {
    mainImage.src = `images/image-product-1.jpg`;
    cartInfoImg.src = `images/image-product-1-thumbnail.jpg`;
  }),
    products[1].addEventListener("click", () => {
      mainImage.src = `images/image-product-2.jpg`;
      cartInfoImg.src = `images/image-product-2-thumbnail.jpg`;
    }),
    products[2].addEventListener("click", () => {
      mainImage.src = `images/image-product-3.jpg`;
      cartInfoImg.src = `images/image-product-3-thumbnail.jpg`;
    }),
    products[3].addEventListener("click", () => {
      mainImage.src = `images/image-product-4.jpg`;
      cartInfoImg.src = `images/image-product-4-thumbnail.jpg`;
    });
});

// still need some refactoring!!!
delete_item.addEventListener("click", () => {
  alert("deleted items");
});
