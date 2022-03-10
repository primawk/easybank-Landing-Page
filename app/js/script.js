const btnHamburger = document.querySelector("#btnHamburger");
const header = document.querySelector(".header"); // impact to class header
const overlay = document.querySelector(".overlay"); // impact to class overlay

btnHamburger.addEventListener("click", function () {
  console.log("click hamburger");
  if (header.classList.contains("open")) {
    // close hamburger menu
    header.classList.remove("open");
    overlay.classList.remove("fade-in");
    overlay.classList.add("fade-out");
  } else {
    // open hamburger menu
    header.classList.add("open"); // adds open in header class
    overlay.classList.remove("fade-out"); // adds fade-out in overlay class
    overlay.classList.add("fade-in"); // adds fade-in class in overlay class
  }
});
