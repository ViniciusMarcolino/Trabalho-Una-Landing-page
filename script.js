let currentIndex = 0;
function showReview(index) {
  const reviews = document.querySelectorAll(".review");
  reviews.forEach((review, i) => {
    review.style.display = i === index ? "block" : "none";
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const nextButton = document.getElementById("nextButton");
  const prevButton = document.getElementById("prevButton");
  const reviews = document.querySelectorAll(".review");

  nextButton.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % reviews.length;
    showReview(currentIndex);
  });

  prevButton.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + reviews.length) % reviews.length;
    showReview(currentIndex);
  });

  // Mostra a primeira análise inicialmente
  showReview(currentIndex);
});

// Rolagem suave
document.querySelectorAll("nav ul.menu-central a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href").substring(1);
    document.getElementById(targetId).scrollIntoView({
      behavior: "smooth",
    });
  });
});
