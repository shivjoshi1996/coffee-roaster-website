import { createMyPlanButton,  modalBackground, modal } from './elements.js';
import { orderSummary, accordionSelectionLogic} from './handlers.js';

export function showModal(){
  modalBackground.style.display = "block";
  populateModal();
}

function populateModal() {
  const summary = orderSummary(accordionSelectionLogic()); 
  const orderSummaryText = document.querySelector('.modal-summary-text');
  orderSummaryText.innerText = summary;
}

export function closeModal(e) {
  if (e.target.classList.value === 'modal-background') {
    modalBackground.style.display = "none";
  };
}