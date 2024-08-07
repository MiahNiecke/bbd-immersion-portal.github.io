document.addEventListener("DOMContentLoaded", function () {
  const prevButton = document.querySelector(".prev");
  const nextButton = document.querySelector(".next");
  const galleryWrapper = document.querySelector(".gallery-wrapper");
  const galleryImages = document.querySelectorAll(".gallery-image");

  let currentIndex = 0;

  prevButton.addEventListener("mouseenter", () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateGallery();
    }
  });

  nextButton.addEventListener("mouseenter", () => {
    if (currentIndex < galleryWrapper.children.length - 1) {
      currentIndex++;
      updateGallery();
    }
  });

  function updateGallery() {
    const translateX = -currentIndex * 100;
    galleryWrapper.style.transform = `translateX(${translateX}%)`;

    galleryImages.forEach((image) => {
      image.querySelector("img").style.transform = "scale(1)";
    });

    if (galleryImages[currentIndex]) {
      galleryImages[currentIndex].querySelector("img").style.transform =
        "scale(1.1)";
    }
  }
});
