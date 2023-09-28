
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
  const mobileMenu = document.getElementById("mobile-menu");
  const mobileMenuButton = document.getElementById("mobile-menu-button");
  const mobileCloseButton = document.getElementById("mobile-close-button");

  // Toggle the mobile menu when the hamburger button is clicked
  mobileMenuButton.addEventListener("click", function () {
    mobileMenu.style.display = "block";
    mobileMenuButton.style.display = "none";
    mobileCloseButton.style.display = "block";
  });

  // Toggle the mobile menu when the close button is clicked
  mobileCloseButton.addEventListener("click", function () {
    mobileMenu.style.display = "none";
    mobileMenuButton.style.display = "block";
    mobileCloseButton.style.display = "none";
  });
});

// translator
document.addEventListener("DOMContentLoaded", () => {
  const translateButtons = document.querySelectorAll("[data-lang]");
  const elementsToTranslate = document.querySelectorAll(".translatable");

  // Store the original English content in a data attribute
  elementsToTranslate.forEach((element) => {
    element.dataset.originalText = element.textContent;
  });

  translateButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const targetLanguage = button.getAttribute("data-lang");
      translatePage(targetLanguage);
    });
  });
});

function translatePage(targetLanguage) {
  const elementsToTranslate = document.querySelectorAll(".translatable"); // Select elements with the class "translatable"

  elementsToTranslate.forEach((element) => {
    const text = element.textContent;

    if (targetLanguage === "en") {
      // Restore the original English content when English is selected
      element.textContent = element.dataset.originalText;
    } else {
      // Translate to the selected language
      googleTranslate(text, "en", targetLanguage)
        .then((translation) => {
          element.textContent = translation;
        })
        .catch((error) => {
          console.error("Translation error:", error);
        });
    }
  });
}

function googleTranslate(text, sourceLanguage, targetLanguage) {
  const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${sourceLanguage}&tl=${targetLanguage}&dt=t&q=${text}`;

  return fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const translatedText = data[0][0][0];
      return translatedText;
    })
    .catch((error) => {
      console.error("Translation error:", error);
      return Promise.reject(error);
    });
}


