/**
 * Code for slideshow
 */
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  let i;
  let slides = document.querySelectorAll(".mySlides");
  if (n > slides.length) {
      slideIndex = 1
  }
  if (n < 1) {
      slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}

/**
 * Code for character display
 */

//based on img id
const characters = ["isagi", "chigiri", "bachira", "kunigami"];
const characterInfo = ["info-isagi", "info-chigiri", "info-bachira", "info-kunigami"];
let characterImg = document.querySelectorAll(".character-img");
let infoToDisplay = "info-";

characters.forEach(function(id) {
  let img = document.querySelector(`#${id}`);
  img.addEventListener("click", function() {
    const defaultInfo = document.querySelector(".default-info");
    defaultInfo.style.display = "none";

    characterImg.forEach(function(cImg) {
      cImg.style.opacity = "0.7";
      cImg.style.boxShadow = "2px 9px 19px 2px #000000";
    });

    characterInfo.forEach(function(infoId) {
      document.querySelector(`#${infoId}`).style.display = "none";
    });

    document.querySelector(`#${infoToDisplay+id}`).style.display = "block";
    img.style.opacity = "1";
    img.style.boxShadow = "2px 9px 19px 2px #042C7F";
  });
});