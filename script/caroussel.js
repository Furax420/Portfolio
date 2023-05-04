class Carousel {
  constructor(images, elementId) {
    this.images = images;
    this.currentIndex = 0;
    this.translateValue = 0;
    this.carouselElement = document.getElementById(elementId);
    this.autoDefilement;
    this.initCarousel();
  }

  initCarousel() {
    this.carouselElement.innerHTML = this.renderCarousel();
    this.carouselElement
      .querySelector(".prev-btn")
      .addEventListener("click", this.prevSlide.bind(this));
    this.carouselElement
      .querySelector(".next-btn")
      .addEventListener("click", this.nextSlide.bind(this));
    this.carouselElement.addEventListener(
      "mouseover",
      this.arreterDefilement.bind(this)
    );
    this.carouselElement.addEventListener(
      "mouseout",
      this.demarrerDefilement.bind(this)
    );

    this.demarrerDefilement();
  }

  renderCarousel() {
    return `
      <section class="carousel">
        ${this.images.length > 1 ? this.renderButtonsAndIndicator() : ""}
        <div class="carousel-images" style="transform: translateX(${
          this.translateValue
        }%)">
          ${this.images
            .map(
              (image, index) => `
            <div class="carousel-image-container">
              <img src="${
                image.src
              }" alt="carousel-image-${index}" class="carousel-image">
              <div class="carousel-text">
                <h2 class="carousel-text-title">${image.title}</h2>
                <ul class="carousel-text-items">
                  ${image.items.map((item) => `<li>${item}</li>`).join("")}
                </ul>
              </div>
            </div>
          `
            )
            .join("")}
        </div>
      </section>
    `;
  }

  renderButtonsAndIndicator() {
    return `
      <button class="carousel-btn prev-btn">&#10094;</button>
      <button class="carousel-btn next-btn">&#10095;</button>
      <div class="carousel-indicator">${this.currentIndex + 1}/${
      this.images.length
    }</div>
    `;
  }

  updateCarousel() {
    this.carouselElement.querySelector(
      ".carousel-images"
    ).style.transform = `translateX(${this.translateValue}%)`;
    this.carouselElement.querySelector(".carousel-indicator").textContent = `${
      this.currentIndex + 1
    }/${this.images.length}`;
  }

  prevSlide() {
    if (this.currentIndex === 0) {
      this.currentIndex = this.images.length - 1;
      this.translateValue = (this.images.length - 1) * -100;
    } else {
      this.currentIndex--;
      this.translateValue += 100;
    }
    this.updateCarousel();
  }

  nextSlide() {
    if (this.currentIndex === this.images.length - 1) {
      this.currentIndex = 0;
      this.translateValue = 0;
    } else {
      this.currentIndex++;
      this.translateValue -= 100;
    }
    this.updateCarousel();
  }

  arreterDefilement() {
    clearInterval(this.autoDefilement);
  }

  demarrerDefilement() {
    this.autoDefilement = setInterval(this.nextSlide.bind(this), 2000);
  }
}

const images = [
  {
    src: "./media/informatique.jpg",
    title: "Informatique & Technologie",
    items: ["Développement", "Jeux-Vidéos", "Innovation informatique"],
  },
  {
    src: "./media/science.jpg",
    title: "Science",
    items: ["Astronomie", "Biologie", "Physique"],
  },
  {
    src: "./media/nature.jpg",
    title: "Nature",
    items: ["Randonnées", "Bushcraft", "Montagne"],
  },
];
new Carousel(images, "carousel");
