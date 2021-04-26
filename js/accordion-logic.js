// Accordion JavaScript

// Get all accordion headers
let accordionHeaders = document.getElementsByClassName("accordion-header");

// Get accordion content (wrapper of accordion options)
let accordionContent = document.getElementsByClassName("accordion-content");


// Get accordion options (each individual option)
let accordionOption = document.getElementsByClassName("accordion-option");


// Add event listener to all accordion headers

for (accordion of accordionHeaders) {
  accordion.addEventListener("click", accordionHeaderLogic);
}

// Function to add and remove active class on accordion headers
function accordionHeaderLogic(event) {
  event.currentTarget.classList.toggle("accordion-header--active");

    /* Toggle between hiding and showing the active panel */
    let panel = event.currentTarget.nextElementSibling;
    if (panel.style.display === "flex") {
      panel.style.display = "none";
    } else {
      panel.style.display = "flex";
    }
}