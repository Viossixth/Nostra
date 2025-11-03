
/////***For the submission button*/

function myFunction() {
  alert("Your reservation has been submitted, a confirmation shall follow shortly")
}

/*Hamburger Menu*/ 

function toggleMenu(){
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("menu-links-open");
  icon.classList.toggle("hamburger-icon-open");
}



  function toggleMenu() {
    const menu = document.getElementById("menuLinks");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("active");
    icon.classList.toggle("active");
  }


  

