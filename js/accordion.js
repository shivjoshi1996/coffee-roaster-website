// Initialize variables

let howDoYouDrinkCoffee = "";
let howMuchWouldYouLike = "";
let typeOfBean = "";
let wantUsToGrindThem = "";
let howOftenShouldWeDeliver = "";


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
        wantUsToGrindThem = "";
      } else {
        document.querySelector(".accordion-4").style.display = "block";
      }


      // Strings for order summary 

      // How Do you Drink your Coffee

      

      if (this.children[0].textContent === "Capsule") {
        howDoYouDrinkCoffee = "using Capsules";
      } else if (this.children[0].textContent === "Filter") {
        howDoYouDrinkCoffee = "as Filter";
      } else if (this.children[0].textContent === "Espresso") {
        howDoYouDrinkCoffee = "as Espresso";
      }
      
      console.log(howDoYouDrinkCoffee);

      // What Type of Coffee

     

      if (this.children[0].textContent === "Single origin") {
        typeOfBean = "Single origin";
      } else if (this.children[0].textContent === "Decaf") {
        typeOfBean = "Decaf";
      } else if (this.children[0].textContent === "Blended") {
        typeOfBean = "Blended";
      }
      
      console.log(typeOfBean);

      // How much would you like

     

      if (this.children[0].textContent === "250g") {
        howMuchWouldYouLike = "250g";
      } else if (this.children[0].textContent === "500g") {
        howMuchWouldYouLike = "500g";
      } else if (this.children[0].textContent === "1000g") {
        howMuchWouldYouLike = "1000g";
      }
      
      console.log(howMuchWouldYouLike);


      // Want us to grind them

     

      if (this.children[0].textContent === "ground ala Wholebean") {
        wantUsToGrindThem = "Wholebean";
      } else if (this.children[0].textContent === "ground ala Filter") {
        wantUsToGrindThem = "Filter";
      } else if (this.children[0].textContent === "ground ala Cafetiére") {
        wantUsToGrindThem = "Cafetiére";
      }
      
      console.log(wantUsToGrindThem);

      // How Often Should we Deliver

     

      if (this.children[0].textContent === "Every week") {
        howOftenShouldWeDeliver = "Every week";
      } else if (this.children[0].textContent === "Every 2 weeks") {
        howOftenShouldWeDeliver = "Every 2 weeks";
      } else if (this.children[0].textContent === "Every month") {
        howOftenShouldWeDeliver = "Every month";
      }
      
      console.log(howOftenShouldWeDeliver);

  
    


      // Show order summary
    document.getElementById("order-summary-text").innerHTML = 
    `I drink coffee <span> ${howDoYouDrinkCoffee}</span>, with a <span>${typeOfBean}</span> type of bean. <span> ${howMuchWouldYouLike} </span> <span>${wantUsToGrindThem}</span>
    sent to me <span>${howOftenShouldWeDeliver}</span>.`;
        
    }

  });
}
