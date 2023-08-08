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


//contact form
  // Attach submit event listener to the form
  const contactForm = document.querySelector("#contact-form");
  const successMessage = document.querySelector("#success-message");

  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();
    contactForm.classList.add("hidden");
    successMessage.classList.remove("hidden");
    // You can add your AJAX/PHP code here to handle form submission on the server-side
  });