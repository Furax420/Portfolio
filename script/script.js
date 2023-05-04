// NAVBAR
// let lastScrollTop =0;
// navbar = document.getElementById('navbar');

// window.addEventListener('scroll',function() {
//     const scrollTop = window.pageTOffset ||
//     this.document.documentElement.scrollTop;

//     if (scrollTop > lastScrollTop) {
//         navbar.style.top="-50px";
//     } else {
//         navbar.style.top="0";
//     }
//     lastScrollTop = scrollTop;
// });

let lastScrollTop = 0;
navbar = document.getElementById("navbar");

window.addEventListener("scroll", function () {
  const scrollTop =
    window.pageTOffset || this.document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    navbar.style.top = "-50px";
  } else {
    navbar.style.top = "0";
  }
  lastScrollTop = scrollTop;
});

//TYPED//
var typed = new Typed(".typed", {
  strings: [
    "Après un BAC STI2D obtenu en 2014, mon parcours professionnel m'a conduit dans divers domaine profesionnel comme expliqué plus bas. Après des premiers pas en autodidacte dans le développement web, j'ai décidé de suivre une formation au sein d'OpenClassRooms qui m'a permis d'acquérir des bases solides dans différents langages. Je cherche maintenant à approfondir ces connaissances dans un cadre professionnel par le biais d'une licence pro. en alternance.",
  ],
  typeSpeed: 15,
  backSpeed: 0,
  smartBackspace: true, // this is a default
  loop: false,
});
//  AOS
AOS.init();

///////////////INPUT COPIER ///////////////

var btncopy = document.querySelector(".js-copy");
if (btncopy) {
  btncopy.addEventListener("click", docopy);
}

function docopy() {
  // Cible de l'élément qui doit être copié
  var target = this.dataset.target;
  var fromElement = document.querySelector(target);
  if (!fromElement) return;

  // Sélection des caractères concernés
  var range = document.createRange();
  var selection = window.getSelection();
  range.selectNode(fromElement);
  selection.removeAllRanges();
  selection.addRange(range);

  try {
    // Exécution de la commande de copie
    var result = document.execCommand("copy");
    if (result) {
      // La copie a réussi
      alert("Copié !");
    }
  } catch (err) {
    // Une erreur est surevnue lors de la tentative de copie
    alert(err);
  }

  // Fin de l'opération
  selection = window.getSelection();
  if (typeof selection.removeRange === "function") {
    selection.removeRange(range);
  } else if (typeof selection.removeAllRanges === "function") {
    selection.removeAllRanges();
  }
}
