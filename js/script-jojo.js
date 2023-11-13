const charactersAOT = ["joseph", "jotaro", "jolyne", "josuke"];
const characterInfoAOT = ["info-joseph", "info-jotaro", "info-josuke", "info-jolyne"];
let characterImg = document.querySelectorAll(".character-img");
let infoToDisplay = "info-";

charactersAOT.forEach(function(id) {
  let img = document.querySelector(`#${id}`);
  img.addEventListener("click", function() {
    const defaultInfo = document.querySelector(".default-info");
    defaultInfo.style.display = "none";

    characterImg.forEach(function(cImg) {
      cImg.style.opacity = "0.7";
      cImg.style.boxShadow = "2px 9px 19px 2px #000000";
    });

    characterInfoAOT.forEach(function(infoId) {
      document.querySelector(`#${infoId}`).style.display = "none";
    });

    document.querySelector(`#${infoToDisplay+id}`).style.display = "block";
    img.style.opacity = "1";
    img.style.boxShadow = "2px 9px 19px 2px rgb(235, 73, 100)";
  });
});