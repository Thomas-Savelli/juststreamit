let galleryWraps = document.querySelectorAll(".gallery__wrap");

galleryWraps.forEach((galleryWrap) => {
  let backBtn = galleryWrap.querySelector(".backBtn");
  let nextBtn = galleryWrap.querySelector(".nextBtn");
  let gallery = galleryWrap.querySelector(".gallery");

  gallery.addEventListener("wheel", (event) => {
    event.preventDefault();
    gallery.scrollLeft += event.deltaY;
  });

  nextBtn.addEventListener("click", () => {
    gallery.scrollTo({
      left: gallery.scrollLeft + 400,
      behavior: "smooth",
    });
  });

  backBtn.addEventListener("click", () => {
    gallery.scrollTo({
      left: gallery.scrollLeft - 400,
      behavior: "smooth",
    });
  });
});
