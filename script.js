// Navbar dropdown menu
  document.addEventListener("DOMContentLoaded", function () {
    const surgeriesDropdown = document.querySelector(".group");
    surgeriesDropdown.addEventListener("mouseover", function () {
      this.querySelector("ul").classList.remove("hidden");
    });
    surgeriesDropdown.addEventListener("mouseout", function () {
      this.querySelector("ul").classList.add("hidden");
    });
  });


// Hero Slider
document.addEventListener("DOMContentLoaded", function() {
  var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    autoplay: {
      delay: 300000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    on: {
      slideChange: function() {
        var activeSlideIndex = this.realIndex;
        var heroSection = document.getElementById('hero-section');
        heroSection.className = '';
        heroSection.classList.add('slide-' + (activeSlideIndex + 1));
      },
    },
  });
});



// navbar hero script
window.addEventListener('scroll', function() {
  var contactHeader = document.getElementById('contact-header');
  var navbar = document.getElementById('navbar');
  var heroSection = document.getElementById('hero-section');

  if (window.pageYOffset > 0) {
    contactHeader.classList.remove('connected');
    navbar.classList.add('navbar-separate');
    heroSection.classList.add('navbar-separate');
  } else {
    contactHeader.classList.add('connected');
    navbar.classList.remove('navbar-separate');
    heroSection.classList.remove('navbar-separate');
  }
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


//Testimonial
document.addEventListener("DOMContentLoaded", function () {
  const testimonialContainers = document.querySelectorAll(".testimonial-container");
  const totalTestimonials = testimonialContainers.length;

  function showNextTestimonials() {
    const currentContainer = testimonialContainers[currentTestimonialIndex];
    const nextIndex = (currentTestimonialIndex + 1) % totalTestimonials;
    const nextContainer = testimonialContainers[nextIndex];

    currentContainer.classList.remove("visible");
    nextContainer.classList.add("visible");

    currentTestimonialIndex = nextIndex;
  }

  let currentTestimonialIndex = 0;
  testimonialContainers[currentTestimonialIndex].classList.add("visible");

  setInterval(showNextTestimonials, 3000);
});

// Packages
const packages = document.querySelectorAll(".package");

packages.forEach((package) => {
  package.addEventListener("mouseenter", () => {
    package.classList.add("hovered");
  });

  package.addEventListener("mouseleave", () => {
    package.classList.remove("hovered");
  });
});

//contact form
  const contactForm = document.querySelector("#contact-form");
  const successMessage = document.querySelector("#success-message");

  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();
    contactForm.classList.add("hidden");
    successMessage.classList.remove("hidden");
  });