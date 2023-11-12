const charactersJJK = ["yuuji", "megumi", "nobara", "satoru"];
const characterInfoJJK = ["info-yuuji", "info-nobara", "info-megumi", "info-satoru"];
let characterImg = document.querySelectorAll(".character-img");
let infoToDisplay = "info-";

charactersJJK.forEach(function(id) {
  let img = document.querySelector(`#${id}`);
  img.addEventListener("click", function() {
    const defaultInfo = document.querySelector(".default-info");
    defaultInfo.style.display = "none";

    characterImg.forEach(function(cImg) {
      cImg.style.opacity = "0.7";
      cImg.style.boxShadow = "2px 9px 19px 2px #000000";
    });

    characterInfoJJK.forEach(function(infoId) {
      document.querySelector(`#${infoId}`).style.display = "none";
    });

    document.querySelector(`#${infoToDisplay+id}`).style.display = "block";
    img.style.opacity = "1";
    img.style.boxShadow = "2px 9px 19px 2px rgb(7, 55, 7)";
  });
});