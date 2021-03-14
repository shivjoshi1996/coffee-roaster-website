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
      // console.log(this);
      // console.log(this.parentElement);
      
    }

  });
}
