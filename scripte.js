const hamburger=document.querySelector(".navBarBtn");
const navMenu=document.querySelector(".nav-menu");
hamburger.addEventListener("click",mobileMenu);
 function mobileMenu(){
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}