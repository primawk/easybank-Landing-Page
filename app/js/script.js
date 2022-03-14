const btnHamburger = document.querySelector("#btnHamburger");
const body = document.querySelector("body")
const header = document.querySelector(".header"); // impact to class header
const overlay = document.querySelector(".overlay"); // impact to class overlay
const fadeElems = document.querySelectorAll(".has-fade")


btnHamburger.addEventListener("click", function () {
  console.log("click hamburger");
  if (header.classList.contains("open")) {
    // close hamburger menu
    body.classList.remove("noscroll")
    header.classList.remove("open");
    fadeElems.forEach(function(element){
      element.classList.remove("fade-in"); // adds fade-out in overlay class
      element.classList.add("fade-out"); // adds fade-in class in overlay class
    })
  } else {
    // open hamburger menu
    body.classList.add("noscroll")
    header.classList.add("open"); // adds open in header class
    fadeElems.forEach(function(element){
      element.classList.remove("fade-out"); // adds fade-out in overlay class
      element.classList.add("fade-in"); // adds fade-in class in overlay class
    })
  }
});
