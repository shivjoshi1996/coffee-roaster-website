import { accordionHeaders, accordionOption, createMyPlanButton,  modalBackground } from './elements.js';
import { handleAccordionChoiceClick, handleAccordionHeaderClick } from './handlers.js';
import {showModal, closeModal} from './modal.js';

// Add event listener to all accordion headers

for (const accordion of accordionHeaders) {
  accordion.addEventListener("click", handleAccordionHeaderClick);
}

// Add event listener to all accordion buttons

for (const accordionChoice of accordionOption) {
  accordionChoice.addEventListener("click", handleAccordionChoiceClick);
}

createMyPlanButton.addEventListener("click", showModal);

modalBackground.addEventListener("click", closeModal);
