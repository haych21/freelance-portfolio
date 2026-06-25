/* =================================
   HAMBURGER MENU TOGGLE
================================= */

document.addEventListener("DOMContentLoaded", () => {

  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");

  if (hamburger && navLinks) {

    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("mobile-active");
    });

  }

});


/* =================================
   PROJECT CARD HOVER EFFECT
================================= */


const projectCards = document.querySelectorAll(".project-card");

if(projectCards.length){
  projectCards.forEach(card => {
    card.addEventListener("mouseenter", () => {
      projectCards.forEach(c => {

        if(c !== card){
          c.style.opacity = "0.6";
        }

      });

      card.style.transform = "scale(1.05)";
      card.style.boxShadow =
      "0 20px 50px rgba(90,78,124,0.5)";

    });



    card.addEventListener("mouseleave", () => {


      projectCards.forEach(c => {

        c.style.opacity = "1";

      });


      card.style.transform = "scale(1)";
      card.style.boxShadow =
      "0 10px 25px rgba(0,0,0,0.08)";


    });


  });

}



/* =================================
   ABOUT SECTION SCROLL ANIMATION
================================= */


const rightCard = document.querySelector(".about-card");
const leftText = document.querySelector(".about-text p");
const aboutImage = document.querySelector(".about-text img");


if(rightCard && leftText && aboutImage){



let isHovering = false;



function updateRightCardTransform(){


  const scrollX =
  rightCard.dataset.scrollState === "in"
  ? 0
  : 50;


  const hoverY =
  isHovering ? -10 : 0;


  const scale =
  isHovering ? 1.05 : 1;



  rightCard.style.transform =
  `translateX(${scrollX}px) translateY(${hoverY}px) scale(${scale})`;


}



const aboutObserver =
new IntersectionObserver(entries => {


 entries.forEach(entry => {


  const target = entry.target;



  if(entry.isIntersecting){


    if(target === leftText){

      target.style.opacity = "1";
      target.style.transform =
      "translateX(0)";

    }



    if(target === aboutImage){

      target.style.opacity = "1";
      target.style.transform =
      "translateY(0)";

    }



    if(target === rightCard){

      rightCard.dataset.scrollState = "in";
      rightCard.style.opacity = "1";

    }



  }else{



    if(target === leftText){

      target.style.opacity = "0";
      target.style.transform =
      "translateX(-50px)";

    }



    if(target === aboutImage){

      target.style.opacity = "0";
      target.style.transform =
      "translateY(-30px)";

    }



    if(target === rightCard){

      rightCard.dataset.scrollState = "out";
      rightCard.style.opacity = "0";

    }


  }



  updateRightCardTransform();


 });


},{threshold:0.2});





aboutObserver.observe(rightCard);
aboutObserver.observe(leftText);
aboutObserver.observe(aboutImage);





rightCard.addEventListener("mouseenter",()=>{


 isHovering = true;


 rightCard.style.boxShadow =
 "0 20px 50px rgba(90,78,124,0.5)";


 updateRightCardTransform();


});




rightCard.addEventListener("mouseleave",()=>{


 isHovering = false;


 rightCard.style.boxShadow =
 "0 10px 25px rgba(0,0,0,0.1)";


 updateRightCardTransform();


});





rightCard.dataset.scrollState="out";

rightCard.style.opacity="0";

rightCard.style.transition =
"transform .4s ease, opacity .6s ease";



leftText.style.opacity="0";
leftText.style.transform =
"translateX(-50px)";



aboutImage.style.opacity="0";
aboutImage.style.transform =
"translateY(-30px)";



}




/* =================================
   SKILLS SECTION ANIMATION
================================= */


const skillBlocks =
document.querySelectorAll(".skill-block");



if(skillBlocks.length){



skillBlocks.forEach(block => {


const icon =
block.querySelector(".skill-icon");


const desc =
block.querySelector(".skill-desc");



if(!icon) return;



icon.style.opacity="0";

icon.style.transform =
"translateY(50px)";




if(desc){

desc.style.opacity="0";

desc.style.transform =
"translateY(50px)";

}




const observer =
new IntersectionObserver(entries=>{


entries.forEach(entry=>{


if(entry.isIntersecting){


icon.style.opacity="1";

icon.style.transform =
"translateY(0)";



if(desc){

desc.style.opacity="1";

desc.style.transform =
"translateY(0)";

}


}else{


icon.style.opacity="0";

icon.style.transform =
"translateY(50px)";



if(desc){

desc.style.opacity="0";

desc.style.transform =
"translateY(50px)";

}


}



});


},{threshold:.2});



observer.observe(block);





icon.addEventListener("mouseenter",()=>{


icon.style.transform =
"translateY(-10px) scale(1.05)";


});



icon.addEventListener("mouseleave",()=>{


icon.style.transform =
"translateY(0) scale(1)";


});



});


}



/* =================================
   CREATIONS SECTION ANIMATION
================================= */


const creationCards =
document.querySelectorAll(".creation-card");



if(creationCards.length){


const creationHover =
new Map();



creationCards.forEach((card,index)=>{



const start =
index % 2 === 0
? "translateX(-50px)"
: "translateX(50px)";



card.dataset.start = start;


creationHover.set(card,false);



card.style.opacity="0";

card.style.transform=start;



card.addEventListener("mouseenter",()=>{


creationHover.set(card,true);


card.style.transform =
`${card.dataset.start} scale(1.05)`;


card.style.boxShadow =
"0 20px 50px rgba(90,78,124,.5)";



});




card.addEventListener("mouseleave",()=>{


creationHover.set(card,false);


card.style.transform =
`${card.dataset.start} scale(1)`;


card.style.boxShadow =
"0 10px 25px rgba(0,0,0,.08)";



});



});





const creationObserver =
new IntersectionObserver(entries=>{



entries.forEach(entry=>{


const card=entry.target;



if(entry.isIntersecting){


card.style.opacity="1";


card.style.transform =
"translateX(0) scale(1)";



}else{


card.style.opacity="0";


card.style.transform =
`${card.dataset.start} scale(1)`;


}



});



},{threshold:.2});




creationCards.forEach(card=>{

creationObserver.observe(card);

});



}