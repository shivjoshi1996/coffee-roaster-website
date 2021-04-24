let selections = [];

// Function to add and remove active class on accordion headers
export function handleAccordionHeaderClick(event) {
  event.currentTarget.classList.toggle("accordion-header--active");

    /* Toggle between hiding and showing the active panel */
    let panel = event.currentTarget.nextElementSibling;
    panel.style.display === "flex" ? panel.style.display = "none" : panel.style.display = "flex";
  }


  export function handleAccordionChoiceClick(event) {
    switchChoiceColour(event);
    orderSummary(accordionSelectionLogic()); 
  }



  function switchChoiceColour(event) {
    const choice = event.currentTarget;
    const choiceParent = choice.parentElement;
    const children = choiceParent.children;

    if (choice.classList.contains('option-active')) {
      choice.classList.remove('option-active');
    } else {
      for (const item of children) {
        item.classList.remove('option-active');
      }
      choice.classList.toggle("option-active");
    }
      
  }

  function accordionSelectionLogic() {
    const options = document.querySelectorAll('.option-active');
    const optionsArray = []
    for (const option of options) {
      optionsArray.push(option.id);
    }
    console.log(optionsArray);
    return optionsArray;
  }

  function orderSummary(selectionArray) {
    const orderSummarySection = document.querySelector('.order-summary-text');
    console.log(orderSummarySection);
    let accordion1 = '____,';
    let accordion2 = '____,';
    let accordion3 = '____,';
    let accordion4 = '____,';
    let accordion5 = '____.';

    // Put accordion 4 back on the page
    document.querySelector('.accordion-4').style.display = "block";

    if(selectionArray.includes('1-capsule')) {
      accordion1 = 'Capsule';
      // Remove accordion 4 if capsule is selected
      document.querySelector('.accordion-4').style.display = "none";
      accordion4 = '_____,';
    }  
    if (selectionArray.includes('1-filter')) {
      accordion1 = 'filter';
    } 
    if (selectionArray.includes('1-espresso')) {
      accordion1 = 'espresso';
    }
    if (selectionArray.includes('2-single-origin')) {
      accordion2 = 'single origin';
    }  
    if (selectionArray.includes('2-decaf')) {
      accordion2 = 'decaf';
    } 
    if (selectionArray.includes('2-blended')) {
      accordion2 = 'blended';
    }
    if (selectionArray.includes('3-250g')) {
      accordion3 = '250g';
    }  
    if (selectionArray.includes('3-500g')) {
      accordion3 = '500g';
    } 
    if (selectionArray.includes('3-1000g')) {
      accordion3 = '1000g';
    }
    if (selectionArray.includes('4-wholebean')) {
      accordion4 = 'Wholebean';
    }  
    if (selectionArray.includes('4-filter')) {
      accordion4 = 'Filter';
    } 
    if (selectionArray.includes('4-cafetiere')) {
      accordion4 = 'Cafetiere';
    }
    if (selectionArray.includes('5-every-week')) {
      accordion5 = 'Every week';
    }  
    if (selectionArray.includes('5-every-two-weeks')) {
      accordion5 = 'Every Two Weeks';
    } 
    if (selectionArray.includes('5-every-month')) {
      accordion5 = 'Every Month';
    }



    let orderSummary = `I drink coffee ${accordion1} with a ${accordion2} type of bean. ${accordion3} ground ala ${accordion4} sent to me ${accordion5}`;
    orderSummarySection.innerText = orderSummary;
  }