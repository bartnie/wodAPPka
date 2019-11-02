"use strict";
if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker.register("serviceworker.js").then(
      function(registration) {
        console.log(
          "ServiceWorker registration successful with scope: ",
          registration.scope
        );
      },
      function(err) {
        console.log("ServiceWorker registration failed: ", err);
      }
    );
  });
}

const addButton = document.querySelector(".button--add-js");
const removeButton = document.querySelector(".button--remove-js");
const counterText = document.querySelector(".counter__text--js");
const key = new Date().toISOString().slice(0, 10);

let counter = parseInt(
  localStorage.getItem(key) ? localStorage.getItem(key) : 0
);

const updateCounter = () => {
  counterText.innerHTML = counter;
  localStorage.setItem(key, counter);
};

addButton.addEventListener("click", e => {
  counter += 1;
  updateCounter();
});

removeButton.addEventListener("click", e => {
  if (counter > 0) {
    counter -= 1;
    updateCounter();
  }
});

updateCounter();
