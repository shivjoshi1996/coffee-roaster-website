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

 function removeActiveClass(accordionId) {
   const activeAccordions = document.querySelectorAll('.option-active');
   console.log(activeAccordions);
   for (const activeAccordion of activeAccordions) {
     if (activeAccordion.id.includes(accordionId)) {
       activeAccordion.classList.remove('option-active');
     }
   }

 }

  function orderSummary(selectionArray) {
    const orderSummarySection = document.querySelector('.order-summary-text');
    let accordion1 = '____,';
    let accordion2 = '____,';
    let accordion3 = '____,';
    let accordion4 = '____';
    let accordion5 = '____.';
    let orderSummary = '';
    console.log(accordion1, accordion2, accordion3, accordion4, accordion5, orderSummary);

    // Put accordion 4 back on the page
    document.querySelector('.accordion-4').style.display = "block";

    if(selectionArray.includes('1-capsule')) {
      accordion1 = 'using Capsules';
      // Remove accordion 4 if capsule is selected
      document.querySelector('.accordion-4').style.display = "none";
      accordion4 = '';
      // TODO -- Need to remove the active class from the accordion choice
      removeActiveClass('4-');
      // remove the -4 value from selection array, so that it removes it from the order summary
      selectionArray = selectionArray.filter(selection => (!selection.includes('4-')));
    }  
    if (selectionArray.includes('1-filter')) {
      accordion1 = 'as Filter';
    } 
    if (selectionArray.includes('1-espresso')) {
      accordion1 = 'as Espresso';
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
      accordion4 = 'ground ala Wholebean';
    }  
    if (selectionArray.includes('4-filter')) {
      accordion4 = 'ground ala Filter';
    } 
    if (selectionArray.includes('4-cafetiere')) {
      accordion4 = 'ground ala Cafetiere';
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



    orderSummary = `I drink coffee ${accordion1} with a ${accordion2} type of bean. ${accordion3} ${accordion4}, sent to me ${accordion5}.`;
    orderSummarySection.innerText = orderSummary;
    console.log(orderSummary);
  }