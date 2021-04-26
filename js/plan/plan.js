import { accordionHeaders, accordionContent, accordionOption } from './elements.js';
import { handleAccordionChoiceClick, handleAccordionHeaderClick } from './handlers.js';

console.log(accordionHeaders);

// Add event listener to all accordion headers

for (const accordion of accordionHeaders) {
  accordion.addEventListener("click", handleAccordionHeaderClick);
}

// Add event listener to all accordion buttons

for (const accordionChoice of accordionOption) {
  accordionChoice.addEventListener("click", handleAccordionChoiceClick);
}

