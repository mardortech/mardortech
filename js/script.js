// ===============================
// MarDor Technologies JavaScript
// ===============================

// Mobile Menu

const menu = document.getElementById("mobile-menu");
const navLinks = document.querySelector(".nav-links");

menu.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    if(navLinks.classList.contains("active")){
        menu.innerHTML = "✖";
    }else{
        menu.innerHTML = "☰";
    }

});

// Close menu after clicking a link

document.querySelectorAll(".nav-links a").forEach(link=>{

    link.addEventListener("click",()=>{

        navLinks.classList.remove("active");

        menu.innerHTML="☰";

    });

});

// Smooth scrolling

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

    anchor.addEventListener("click",function(e){

        e.preventDefault();

        const target=document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});
// Scroll Reveal

function reveal(){

    const reveals=document.querySelectorAll(".reveal");

    reveals.forEach(item=>{

        const windowHeight=window.innerHeight;

        const elementTop=item.getBoundingClientRect().top;

        if(elementTop<windowHeight-100){

            item.classList.add("active");

        }

    });

}

window.addEventListener("scroll",reveal);

reveal();