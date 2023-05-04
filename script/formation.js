document.addEventListener("DOMContentLoaded", function () {
  const projectsContaineur = document.querySelector(".projects-containeur");
  const projets = [
    {
      titre: "Projet 1 - HTML & CSS",
      langages: "HTML, CSS",
      notions:
        "Respect du design d'une maquette / Utilisation de balises sémantiques / Reponsive / Validation W3C",
      imageURL: "/media/projet1.webp",
      siteURL: "https://furax420.github.io/P1_Bookie/",
      codeURL: "https://github.com/Furax420/premierProjet/tree/main",
      description:
        "Ce projet consistait à fabriquer la partie Front-End d'un site de réservation d'hôtels en ligne. Etant le premier projet de la formation, les langages utilisés ont été HTML et CSS. A partir d'une maquette fournie par le client, j'ai recréé le site en partant de zéro, en respectant le design de la maquette. Le site devait également être responsive pour téléphone et tablette.",
    },
    {
      titre: "Projet 2 - Javascript",
      langages: "Javascript, CSS",
      notions:
        "Génération dynamique d'éléments / Log In avec stockage de token / Création de modal / Utilisation d'API",
      imageURL: "/media/projet2.webp",
      siteURL: "https://preeminent-tapioca-52a725.netlify.app/",
      codeURL: "https://github.com/Furax420/P3_JS",
      description:
        "Ce projet avait pour but de créer la partie front-end interractive d'un site d'architecte. La première étape à été de généré des boutons de filtres en fonction des catégories de photos postées par le client. Dans un second temps, j'ai mis en place un formulaire de Log In fonctionnel Ensuite, j'ai mis en place un modale qui permet de viualiser et supprimer les photos déjà postées sur le site et une autre modale qui permet de poster une nouvelle photo en renseignant un format d'image particulier, une taille maximal, un nom et une catégorie. Tout au long de se projet je me suis familiarisé avec l'utilisation de JavaScript et également les différents type de requêtes aux API.",
    },
    {
      titre: "Projet 3 - Gestion Agile",
      langages: "HTML, CSS, JavaScript",
      notions:
        "Gestion Agile / Sprint / Outils de Veille Technologique / Kanban via Notion",
      imageURL: "/media/projet3.webp",
      siteURL:
        "https://bedecked-digit-3f0.notion.site/6f4c39b29a2043bd8c608e6bb0d8c378?v=5c9cb6b3c23f4b479addc8e0be1b11d0",
      codeURL: "https://exemple-code-projet1.com",
      description:
        "Durant ce projet, j'ai été chargé de préparer au mieux le développement d'un nouveau site de création de menu pour un client. J'ai d'abord configuré un outils de veille technologique pour me permettre de trouver de l'inspiration et me tenir informé sur le monde du développement et de la technologie. Ensuite, grâce aux Users Stories déterminé en amont, j'ai pu travailler sur une solution logique et cohérente pour les équipes de développeurs. J'ai également établis un tableau KanBan sur Notion qui regroupe les différentes tâches et leur état d'avancement.",
    },
    {
      titre: "Projet 4 - Débug / Accésibilité & SEO",
      langages:
        "Essentiellement HTML (CSS pour quelques fixes et JavaScript pour la partie débug)",
      notions:
        "SEO / Accessibilité / Débug / Balises Méta / Données Structurées / Chargement Différé",
      imageURL: "/media/projet4.webp",
      siteURL: "https://furax420.github.io/Projet5/",
      codeURL: "https://github.com/Furax420/Projet5",
      description:
        "Ce projet avait pour but de me sensibiliser aux performances, à l'accessibilité et le SEO sur un site de photographe. Il y a eu également une partie Débug sur du code JavaScript qui en fonctionnait pas correctement (Section Filtres et Flèche de navigation de modale non réactifs) Une grosse partie de l'omptimisation de performances à été sur le format d'images et le chargement différé de certaines ressources. Enfin, l'optimisation du SEO m'a appris à utiliser divers balises Meta mais également des données structurées pour mieux influcencer le référencement local.",
    },
    {
      titre: "Projet 5 - React",
      langages: "HTML, CSS, JavaScript",
      notions: "2 semaines",
      imageURL: "/media/projet5.png",
      siteURL: "https://majestic-cranachan-7327f6.netlify.app",
      codeURL: "https://github.com/Furax420/projet6",
    },
    {
      titre: "Projet 6 - Back-End",
      langages: "HTML, CSS, JavaScript",
      notions: "2 semaines",
      imageURL: "/media/projet1.webp",
      siteURL: "https://exemple-site-projet1.com",
      codeURL: "https://exemple-code-projet1.com",
    },
    {
      titre: "Projet 7 - Ce Portfolio",
      langages: "HTML, CSS, JavaScript",
      notions: "2 semaines",
      imageURL: "/media/projet7.webp",
      siteURL: "https://exemple-site-projet1.com",
      codeURL: "https://github.com/Furax420/Portfolio",
    },
    // ajouter d'autres projets ici...
  ];

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
      projet.titre !== "Projet 7 - Ce Portfolio"
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

  projets.forEach(function (projet, index) {
    const carte = creerCarte(projet, index);
    projectsContaineur.appendChild(carte);
  });
});
