// créér liste objets//
var imcMessages = [
  {
    min: 0,
    max: 18.5,
    message:
      "Poids insuffisant et pouvant occasionner certains risques pour la santé.",
  },
  {
    min: 18.5,
    max: 24.9,
    message: "Poids santé qui n'augmente pas les risques pour la santé.",
  },
  {
    min: 25,
    max: 29.9,
    message:
      "Excès de poids pouvant occasionner certains risques pour la santé.",
  },
  {
    min: 30,
    max: 1000000,
    message:
      "Excès de poids pouvant occasionner certains risques pour la santé.",
  },
];

var entreeBtn = document.getElementById("calculateIMC");
entreeBtn.addEventListener("click", gererBouttonClique);

function gererBouttonClique(e) {
  // inputs
  var weightInput = document.getElementById("weight");
  var sizeInput = document.getElementById("size");

  var weightValue = weightInput.value;
  var sizeValue = sizeInput.value;

  // resultats
  var scoreDiv = document.querySelector(".resultsScore");
  var scoreInfo = document.querySelector(".resultsInformations");

  //imposer condition//
  //condition si Nul
  if (
    weightValue == "" || //ou//
    sizeValue == "" ||
    weightValue <= 0 ||
    sizeValue <= 0
  ) {
    scoreDiv.innerHTML = "OOUUUPS";
    scoreInfo.innerHTML = "Merci de remplir correctement les champs";
  } else {
    // calculer IMC
    var imcValue = parseFloat(
      weightValue / ((sizeValue / 100) * (sizeValue / 100)) //parseFloat permet de transformer une chaîne de caractères en un nombre flottant
    ).toFixed(2);
    scoreDiv.innerHTML = imcValue;

    // prendre le message correspondant dans le tableau imcMessages
    var imcDetails = imcMessages.find(
      (item) => (imcValue > item.min) & (imcValue <= item.max)
    );
    scoreInfo.innerHTML = imcDetails.message;
  }
}
