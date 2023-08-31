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
// Language switcher
function googleTranslateElementInit() {
  new google.translate.TranslateElement(
    { pageLanguage: "en" },
    "google_translate_element"
  );
}

// Load Google Translate script
function loadGoogleTranslateScript(selectedLanguage) {
  var script = document.createElement("script");
  script.type = "text/javascript";
  script.src =
    "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
  document.head.appendChild(script);
}

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
  
  translateButtons.forEach(button => {
    button.addEventListener('click', () => {
      const targetLanguage = button.getAttribute('data-lang');
      translatePage(targetLanguage);
    });
  });
});

function removeTranslateEventListeners() {
  const translateButtons = document.querySelectorAll('[data-lang]');
  
  translateButtons.forEach(button => {
    const newButton = button.cloneNode(true);
    button.parentNode.replaceChild(newButton, button);
  });
}

function translatePage(targetLanguage) {
  const elementsToTranslate = document.querySelectorAll('.translatable'); // Select elements with the class "translatable"
  
  const translator = new Translator(apiKey);
  
  translator.translate(targetLanguage, Array.from(elementsToTranslate)).then(translations => {
    translations.forEach((translation, index) => {
      elementsToTranslate[index].textContent = translation;
    });
  });
}

class Translator {
  constructor(apiKey) {
    this.apiKey = apiKey;
  }

  async translate(targetLanguage, elements) {
    const sourceLanguage = 'en'; // Assuming your content is in English
    
    const translations = await Promise.all(
      Array.from(elements).map(element => {
        const text = element.textContent;
        return this.googleTranslate(text, sourceLanguage, targetLanguage);
      })
    );
    
    return translations;
  }

  googleTranslate(text, sourceLanguage, targetLanguage) {
    const url = `https://translation.googleapis.com/language/translate/v2?key=${this.apiKey}`;
    const data = {
      q: text,
      source: sourceLanguage,
      target: targetLanguage,
      format: 'text'
    };

    return fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(data => data.data.translations[0].translatedText)
    .catch(error => {
      console.error('Translation error:', error);
      return text; // Return the original text on error
    });
  }
}


