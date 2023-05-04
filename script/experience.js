const experiences = [
  {
    titre: "Technicien de Laboratoire BTP",
    duree: "15 mois",
    description: [
      "- Déplacements sur chantier",
      "- Contrôle résistance béton par écrasement",
      "- Création de rapport d'intervention pour les clients",
    ],
  },
  {
    titre: "Pizzaïolo Foodtruck",
    duree: "5 ans",
    description: [
      "- Préparation des pizzas",
      "- Mise en place et rangement / nettoyage du camion",
      "- Accueil et encaissement des clients",
    ],
  },
  {
    titre: "Assistant d'écudation",
    duree: "4 ans",
    description: [
      "- Surveillance des élèves en interclasses",
      "- Accueil téléphonique et physique des parents d'élèves",
      "- Gestion de tâches administratives et de Vie Scolaire",
    ],
  },
];

const elementsExperience = document.querySelectorAll(".experience");
const infoExperience = document.getElementById("experience-info");
const titreExperience = document.getElementById("experience-title");
const dureeExperience = document.getElementById("experience-duration");
const descriptionExperience = document.getElementById("experience-description");

let selectedIndex = null;

elementsExperience.forEach((el, index) => {
  el.addEventListener("click", (e) => {
    e.stopPropagation();
    if (selectedIndex === index) {
      // Désélection de la carte
      elementsExperience.forEach((otherEl) => {
        otherEl.classList.remove("active");
        otherEl.classList.remove("inactive");
      });
      infoExperience.classList.add("hidden");
      selectedIndex = null;
    } else {
      // Sélection d'une carte
      elementsExperience.forEach((otherEl, otherIndex) => {
        if (otherIndex !== index) {
          otherEl.classList.add("inactive");
          otherEl.classList.remove("active");
        } else {
          otherEl.classList.add("active");
          otherEl.classList.remove("inactive");
        }
      });

      const donneesExperience = experiences[index];
      titreExperience.innerText = donneesExperience.titre;
      dureeExperience.innerText = donneesExperience.duree;

      descriptionExperience.innerHTML = "";
      donneesExperience.description.forEach((item) => {
        const li = document.createElement("li");
        li.innerText = item;
        descriptionExperience.appendChild(li);
      });

      infoExperience.classList.remove("hidden");

      selectedIndex = index;
    }
  });
});

document.addEventListener("click", () => {
  if (selectedIndex !== null) {
    elementsExperience.forEach((el) => {
      el.classList.remove("active");
      el.classList.remove("inactive");
    });
    infoExperience.classList.add("hidden");
    selectedIndex = null;
  }
});
