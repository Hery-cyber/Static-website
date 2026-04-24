const carousels = document.querySelectorAll(".carousel");

carousels.forEach((carousel) => {
    const slides = carousel.querySelectorAll(".slide");
    const dots = carousel.querySelectorAll(".dot");
    const prevButton = carousel.querySelector('[data-carousel="prev"]');
    const nextButton = carousel.querySelector('[data-carousel="next"]');

    if (!slides.length) {
        return;
    }

    let currentIndex = 0;

    const showSlide = (index) => {
        currentIndex = (index + slides.length) % slides.length;

        slides.forEach((slide, slideIndex) => {
            slide.classList.toggle("active", slideIndex === currentIndex);
        });

        dots.forEach((dot, dotIndex) => {
            dot.classList.toggle("active", dotIndex === currentIndex);
        });
    };

    prevButton?.addEventListener("click", () => {
        showSlide(currentIndex - 1);
    });

    nextButton?.addEventListener("click", () => {
        showSlide(currentIndex + 1);
    });

    dots.forEach((dot, index) => {
        dot.addEventListener("click", () => {
            showSlide(index);
        });
    });

    setInterval(() => {
        showSlide(currentIndex + 1);
    }, 4500);
});
