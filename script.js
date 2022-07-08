"use strict";

const car = document.querySelector(".car");
const btn = document.querySelector(".start_btn");
const btnNone = document.querySelector(".start_none");
// div-1 div-2 Start ostidagi ogohlantirishlar
const div1 = document.querySelector(".div-1");
const div2 = document.querySelector(".div-2");
// Startni ikkala yonidagi ko'rsatish belgilari
const startLeft = document.querySelector(".start_left");
const startRight = document.querySelector(".start_right");

let bln = true;
let i = 0;
let btnUnderStart = true;
function speedCar() {
  noneBtnActive();
  const interval = setInterval(frame, 10);

  function frame() {
    if (bln) {
      i += 2;
      car.style.left = i + "px";
      if (i > 900) {
        clearInterval(interval);
        bln = false;
        noneBtnInactive();
        yunalish();
        ogohlantirish();
        harakatlanishBelgisi();
      }
    } else {
      i -= 2;
      car.style.left = i + "px";
      if (i <= 0) {
        clearInterval(interval);
        bln = true;
        noneBtnInactive();
        yunalish();
        ogohlantirish();
        harakatlanishBelgisi();
      }
    }
  }

  function yunalish() {
    if (bln) {
      // mashina o'ngga yo'naladi
      car.classList.add("right");
      car.classList.remove("left");
    } else {
      // mashina chapga yo'naladi
      car.classList.add("left");
      car.classList.remove("right");
    }
  }

  function ogohlantirish() {
    if (bln) {
      // Start ostidagi ogohlantirishni ko'rsatadi
      div1.style.display = "block";
      div1.classList.remove("hide");
      div1.classList.add("show");
      setTimeout(() => {
        div1.classList.add("hide");
        div1.classList.remove("show");
        setTimeout(() => {
          div1.style.display = "none";
        }, 500);
      }, 3000);
    } else {
      // Start ostidagi ogohlantirishni ko'rsatadi
      div2.style.display = "block";
      div2.classList.remove("hide");
      div2.classList.add("show");
      setTimeout(() => {
        div2.classList.remove("show");
        div2.classList.add("hide");
        setTimeout(() => {
          div2.style.display = "none";
        }, 500);
      }, 3000);
    }
  }
  function harakatlanishBelgisi() {
    if (bln) {
      startLeft.classList.remove("show");
      startLeft.classList.add("hide");

      startRight.classList.remove("hide");
      startRight.classList.add("show");
    } else {
      startRight.classList.remove("show");
      startRight.classList.add("hide");

      startLeft.classList.remove("hide");
      startLeft.classList.add("show");
    }
  }
  function noneBtnActive() {
    btnNone.style.display = "inline-block";
    btn.style.display = "none";
  }
  function noneBtnInactive() {
    btn.style.display = "inline-block";
    btnNone.style.display = "none";
  }
}

startLeft.style.opacity = 0;

btn.addEventListener("click", speedCar);
