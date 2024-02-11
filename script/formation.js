document.addEventListener("DOMContentLoaded", function () {
  const projectsContaineur = document.querySelector(".projects-containeur");
  fetch('../data/projets.json')
  .then(response => response.json())
  .then(projets => {
    projets.forEach(function (projet, index) {
      const carte = creerCarte(projet, index);
      projectsContaineur.appendChild(carte);
    });
  });

  function creerCarte(projet, index) {
    const carte = document.createElement("div");
    carte.classList.add("carte");
    carte.classList.add(`projet${index + 1}`);
    // carte.style.backgroundImage = `url(${projet.imageURL})`;
    const titreContainer = document.createElement("div");
    titreContainer.classList.add("titre-container");
    const titre = document.createElement("h3");
    const imgBg = document.createElement("div");
    imgBg.classList.add("img-bg");
    imgBg.style.backgroundImage = `url(${projet.imageURL})`;
    titre.classList.add("carte-titre");
    titre.textContent = projet.titre;
    carte.appendChild(titreContainer);
    carte.appendChild(imgBg);
    titreContainer.appendChild(titre);

    carte.addEventListener("click", function () {
      ouvrirModal(projet);
    });

    return carte;
  }

  function ouvrirModal(projet) {
    const modal = document.createElement("div");
    modal.classList.add("modal");
    document.body.classList.add("modal-open");

    const contenu = document.createElement("div");
    contenu.classList.add("modal-contenu");

    const fermer = document.createElement("span");
    fermer.classList.add("fermer-modal");
    fermer.textContent = "×";
    fermer.addEventListener("click", function () {
      document.body.classList.remove("modal-open");
      modal.remove();
    });

    const titre = document.createElement("h2");
    titre.textContent = projet.titre;
    titre.style.fontWeight = "bold";
    titre.style.textDecoration = "underline";

    const langages = document.createElement("p");
    langages.classList.add("langages");
    const langagesLabel = document.createElement("span");
    langagesLabel.textContent = "Langages Utilisés";
    langagesLabel.style.fontWeight = "bold";
    langagesLabel.style.textDecoration = "underline";

    langages.appendChild(langagesLabel);

    const langagesText = document.createTextNode(` : ${projet.langages}`);
    langages.appendChild(langagesText);

    const description = document.createElement("p");

    const descriptionLabel = document.createElement("span");
    descriptionLabel.textContent = "Description du projet";
    descriptionLabel.style.fontWeight = "bold";
    descriptionLabel.style.textDecoration = "underline";

    description.appendChild(descriptionLabel);

    const descriptionText = document.createTextNode(` : ${projet.description}`);
    description.appendChild(descriptionText);

    const notions = document.createElement("p");
    const notionsLabel = document.createElement("span");
    notionsLabel.textContent = "Notions Abordées";
    notionsLabel.style.fontWeight = "bold";
    notionsLabel.style.textDecoration = "underline";
    notions.appendChild(notionsLabel);

    const notionsText = document.createTextNode(` : ${projet.notions}`);
    notions.appendChild(notionsText);

    const modalImage = document.createElement("img");
    modalImage.classList.add("modal-image", "grid-image");
    modalImage.src = `${projet.imageURL}`;

    const infoConteneur = document.createElement("div");
    infoConteneur.classList.add("info-conteneur", "grid-info");
    infoConteneur.appendChild(titre);
    if (projet.titre !== "Projet 3 - Gestion Agile") {
      infoConteneur.appendChild(langages);
    }
    infoConteneur.appendChild(description);
    infoConteneur.appendChild(notions);

    const btnConteneur = document.createElement("div");
    btnConteneur.classList.add("btn-conteneur");

    const btnSite = document.createElement("a");
    btnSite.classList.add("bouton-site");
    btnSite.href = projet.siteURL;
    btnSite.textContent = "Voir le site";

    const btnCode = document.createElement("a");
    btnCode.classList.add("bouton-code");
    btnCode.href = projet.codeURL;
    if (projet.titre === "Projet 3 - Gestion Agile") {
      btnCode.textContent = "Voir le Kanban";
    } else {
      btnCode.textContent = "Voir le code";
    }
    btnSite.addEventListener("click", (event) => {
      event.preventDefault();
      window.open(projet.siteURL, "_blank", "noopener,noreferrer");
    });

    btnCode.addEventListener("click", (event) => {
      event.preventDefault();
      window.open(projet.codeURL, "_blank", "noopener,noreferrer");
    });

    if (
      projet.titre !== "Projet 3 - Gestion Agile" &&
      projet.titre !== "Projet 7 - Ce Portfolio" &&
      projet.titre !== "Projet 6 - Back-End"
    ) {
      btnConteneur.appendChild(btnSite);
    }

    btnConteneur.appendChild(btnCode);

    infoConteneur.appendChild(btnConteneur);

    contenu.appendChild(modalImage);
    contenu.appendChild(infoConteneur);
    modal.appendChild(contenu);

    modal.addEventListener("click", function (e) {
      if (e.target === modal || e.target === fermer) {
        modal.remove();
      }
    });

    document.body.appendChild(modal);
    modal.style.display = "block";
  }
});
