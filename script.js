document.addEventListener("DOMContentLoaded", function () {
  var swiper = new Swiper(".swiper-container", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 10000, // Delay in milliseconds (10 seconds)
      disableOnInteraction: true, // Stop autoplay when user interacts with the slider
    },
  });
});
