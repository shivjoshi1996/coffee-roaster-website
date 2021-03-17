// Accordion 

var accordianHeaders = document.getElementsByClassName("accordion-header");
var i;

for (i = 0; i < accordianHeaders.length; i++) {
  accordianHeaders[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("accordion-header--active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "flex") {
      panel.style.display = "none";
    } else {
      panel.style.display = "flex";
    }
  });
}


var accordionContent = document.getElementsByClassName("accordion-content");

var accordionOption = document.getElementsByClassName("accordion-option");


for (var x = 0; x < accordionOption.length; x++) {

  accordionOption[x].addEventListener("click", function(){

    var children = [...this.parentElement.children];

    if (this.classList.contains("option-active")) {
      this.classList.remove("option-active");
    } else {

      children.forEach(child => {

        if (child.classList.contains("option-active")) {
            
          child.classList.remove("option-active");
        }
  
      });
  
      this.classList.toggle("option-active");
      console.log(this.children[0].textContent);
      // console.log(this.parentElement);
      console.log(this.children);

      // if capsule is selected, hide accordion 4

      if (this.children[0].textContent === "Capsule") {
        document.querySelector(".accordion-4").style.display = "none";
      } else {
        document.querySelector(".accordion-4").style.display = "block";
      }


      // Strings for order summary 

      // How Do you Drink your Coffee

      let howDoYouDrinkCoffee = "";

      if (this.children[0].textContent === "Capsule") {
        howDoYouDrinkCoffee = "using Capsules";
      } else if (this.children[0].textContent === "Filter") {
        howDoYouDrinkCoffee = "as Filter";
      } else if (this.children[0].textContent === "Espresso") {
        howDoYouDrinkCoffee = "as Espresso";
      }
      
      console.log(howDoYouDrinkCoffee);

      // What Type of Coffee

      let typeOfBean = "";

      if (this.children[0].textContent === "Single origin") {
        typeOfBean = "Single origin";
      } else if (this.children[0].textContent === "Decaf") {
        typeOfBean = "Decaf";
      } else if (this.children[0].textContent === "Blended") {
        typeOfBean = "Blended";
      }
      
      console.log(typeOfBean);

      // How much would you like

      let howMuchWouldYouLike = "";

      if (this.children[0].textContent === "250g") {
        howMuchWouldYouLike = "250g";
      } else if (this.children[0].textContent === "500g") {
        howMuchWouldYouLike = "500g";
      } else if (this.children[0].textContent === "1000g") {
        howMuchWouldYouLike = "1000g";
      }
      
      console.log(howMuchWouldYouLike);

        
    }

  });
}
