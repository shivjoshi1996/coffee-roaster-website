import {  modalBackground } from './elements.js';
import { orderSummary, accordionSelectionLogic} from './handlers.js';


export function showModal(){
  modalBackground.style.display = "block";
  populateModal();
  calculateModalPrice();
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


function calculateModalPrice() {
  const modalCheckoutText = document.querySelector('.modal-checkout');
  const currentSelection = accordionSelectionLogic();

  if (currentSelection.includes('5-every-week')) {
    if (currentSelection.includes('3-250g')) {
      modalCheckoutText.innerText = `Checkout - $28.80/mo`;
    }
    if (currentSelection.includes('3-500g')) {
      modalCheckoutText.innerText = `Checkout - $19.20/mo`;
    }
    if (currentSelection.includes('3-1000g')) {
      modalCheckoutText.innerText = `Checkout - $12.00/mo`;
    }
  }
  if (currentSelection.includes('5-every-two-weeks')) {
    if (currentSelection.includes('3-250g')) {
      modalCheckoutText.innerText = `Checkout - $52.00/mo`;
    }
    if (currentSelection.includes('3-500g')) {
      modalCheckoutText.innerText = `Checkout - $35.00/mo`;
    }
    if (currentSelection.includes('3-1000g')) {
      modalCheckoutText.innerText = `Checkout - $22.00/mo`;
    }
  }
  if (currentSelection.includes('5-every-month')) {
    if (currentSelection.includes('3-250g')) {
      modalCheckoutText.innerText = `Checkout - $88.00/mo`;
    }
    if (currentSelection.includes('3-500g')) {
      modalCheckoutText.innerText = `Checkout - $64.00/mo`;
    }
    if (currentSelection.includes('3-1000g')) {
      modalCheckoutText.innerText = `Checkout - $42.00/mo`;
    }
  }
}