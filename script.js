
// Hero Slider
document.addEventListener("DOMContentLoaded", function() {
  var swiper = new Swiper('#slider-container', {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
});

// FAQ
document.addEventListener("DOMContentLoaded", function () {
  const accordionItems = document.querySelectorAll(".accordion-item");

  accordionItems.forEach((item) => {
    const title = item.querySelector(".accordion-title");
    const content = item.querySelector(".accordion-content");
    const plusMinusIcon = title.querySelector(".plus-minus");

    title.addEventListener("click", () => {
      item.classList.toggle("active");
      content.classList.toggle("hidden");
      plusMinusIcon.classList.toggle("fa-plus");
      plusMinusIcon.classList.toggle("fa-minus");
    });
  });
});

// The team
function toggleOperations(operationsId, detailsId, button) {
  var operationsDiv = document.getElementById(operationsId);
  var detailsDiv = document.getElementById(detailsId);

  if (operationsDiv.style.display === "none") {
    operationsDiv.style.display = "block";
    detailsDiv.style.display = "none";
    button.innerText = "See Doctor Details";
  } else {
    operationsDiv.style.display = "none";
    detailsDiv.style.display = "block";
    button.innerText = "Check Operations";
  }
}
