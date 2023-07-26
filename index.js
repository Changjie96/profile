window.addEventListener("DOMContentLoaded", (event) => {
  const avatar = document.getElementById("avatar");

  avatar.onmouseover = function (event) {
      avatar.src = "my_pic.png"
  }

  avatar.onmouseleave = (event) => avatar.src = "avatar.png";

  const plusBtns = document.querySelectorAll(".expand-btn");
  const [plusBtn1, plusBtn2, plusBtn3] = plusBtns;

  const hiddenSecs = document.querySelectorAll(".hidden");
  const [hiddenSec1, hiddenSec2, hiddenSec3] = hiddenSecs;

  plusBtn1.onclick = (event => {
      if (plusBtn1.classList.contains("rotate")) {
          plusBtn1.classList.remove("rotate");
          hiddenSec1.classList.remove("open");
      } else {
          plusBtn1.classList.add("rotate")
          hiddenSec1.classList.add("open")
      }
  })

  plusBtn2.onclick = (event => {
      if (plusBtn2.classList.contains("rotate")) {
          plusBtn2.classList.remove("rotate");
          hiddenSec2.classList.remove("open");
      } else {
          plusBtn2.classList.add("rotate")
          hiddenSec2.classList.add("open")
      }
  })

  plusBtn3.onclick = (event => {
      if (plusBtn3.classList.contains("rotate")) {
          plusBtn3.classList.remove("rotate");
          hiddenSec3.classList.remove("open");
      } else {
          plusBtn3.classList.add("rotate")
          hiddenSec3.classList.add("open")
      }
  })

  document.addEventListener("click", function(event) {
      if (event.target !== plusBtn1) {
          plusBtn1.classList.remove("rotate");
          hiddenSec1.classList.remove("open");
      }
      if (event.target !== plusBtn2) {
          plusBtn2.classList.remove("rotate");
          hiddenSec2.classList.remove("open");
      }

      if (event.target !== plusBtn3) {
          plusBtn3.classList.remove("rotate");
          hiddenSec3.classList.remove("open");
      }
  })
});
