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

// let lastScrollTop = 0;
// navbar = document.getElementById("navbar");

// window.addEventListener("scroll", function () {
//   const scrollTop =
//     window.pageTOffset || this.document.documentElement.scrollTop;

//   if (scrollTop > lastScrollTop) {
//     navbar.style.top = "-50px";
//   } else {
//     navbar.style.top = "0";
//   }
//   lastScrollTop = scrollTop;
// });

//TYPED//
var typed = new Typed(".typed", {
  strings: [
    "Passionné par le secteur de l'informatique, j'ai entrepris une reconversion professionnelle, dans un premier temps par la validation d’une formation diplômante en développement web. J’ai ensuite souhaité poursuivre ce parcours par une année en Licence Pro. Métiers de l’Informatique: Applications Web – Systèmes Intra / Internet pour l’Entreprise. Actuellement en phase de finalisation de cette année, je suis à la recherche d'une opportunité de carrière qui me permettrait de mettre en pratique mes compétences techniques et contribuer efficacement à des projets innovants.",
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
