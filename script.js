// Hero Slider
document.addEventListener("DOMContentLoaded", function () {
  const videoFrame = document.getElementById("video-frame");

  setTimeout(() => {
    videoFrame.src += "&autoplay=1"; // Start autoplay
  }, 3000); // Adjust delay time according to your preference
});

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

// mobile settings
document.addEventListener("DOMContentLoaded", function () {
  const mobileMenuToggle = document.getElementById("mobile-menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");

  mobileMenuToggle.addEventListener("click", function () {
    mobileMenu.classList.toggle("hidden");
  });
});

// Testimonial
document.addEventListener("DOMContentLoaded", function () {
  const testimonialContainers = document.querySelectorAll(
    ".testimonial-container"
  );
  const totalTestimonials = testimonialContainers.length;

  // Initialize the first two testimonials as visible
  for (let i = 0; i < 2; i++) {
    testimonialContainers[i].classList.add("visible");
  }

  function showNextTestimonials() {
    const visibleContainers = document.querySelectorAll(
      ".testimonial-container.visible"
    );

    for (const container of visibleContainers) {
      container.classList.remove("visible");
    }

    for (let i = 0; i < 2; i++) {
      const nextIndex = (currentTestimonialIndex + i + 1) % totalTestimonials;
      const nextContainer = testimonialContainers[nextIndex];
      nextContainer.classList.add("visible");
    }

    currentTestimonialIndex = (currentTestimonialIndex + 1) % totalTestimonials;
  }

  let currentTestimonialIndex = 0;
  setInterval(showNextTestimonials, 3000);
});

// translator
const apiKey = 'AIzaSyA1LL5Hltmj0d3_MCagHYD-zPk7g60RAn8';
document.addEventListener('DOMContentLoaded', () => {
  const translateButtons = document.querySelectorAll('[data-lang]');
  const elementsToTranslate = document.querySelectorAll('.translatable');
  
  // Store the original English content in a data attribute
  elementsToTranslate.forEach(element => {
    element.dataset.originalText = element.textContent;
  });
  
  translateButtons.forEach(button => {
    button.addEventListener('click', () => {
      const targetLanguage = button.getAttribute('data-lang');
      translatePage(targetLanguage);
    });
  });
});

function translatePage(targetLanguage) {
  const elementsToTranslate = document.querySelectorAll('.translatable'); // Select elements with the class "translatable"
  
  elementsToTranslate.forEach(element => {
    const text = element.textContent;
    
    if (targetLanguage === 'en') {
      // Restore the original English content when English is selected
      element.textContent = element.dataset.originalText;
    } else {
      // Translate to the selected language
      googleTranslate(text, 'en', targetLanguage)
        .then(translation => {
          element.textContent = translation;
        })
        .catch(error => {
          console.error('Translation error:', error);
        });
    }
  });
}

function googleTranslate(text, sourceLanguage, targetLanguage) {
  const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${sourceLanguage}&tl=${targetLanguage}&dt=t&q=${text}`;

  return fetch(url)
    .then(response => response.json())
    .then(data => {
      const translatedText = data[0][0][0];
      return translatedText;
    })
    .catch(error => {
      console.error('Translation error:', error);
      return Promise.reject(error);
    });
}
