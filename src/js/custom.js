// import { gsap } from 'gsap';
// import { SplitText } from "gsap/SplitText";
// import { ScrollToPlugin } from "gsap/ScrollToPlugin";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollToPlugin, ScrollTrigger, SplitText);


// // parrallax monete

// const parallax = gsap.utils.toArray(".money");

// gsap.set(parallax, {y: -80})

// parallax.forEach((item)=>{
//   gsap.to(item, {
//     yPercent: 100,
//     ease: "none",
//     scrollTrigger: {
//       trigger: item,
//       scrub: true
//     }, 
//   });
// })

// // parallax illustration

// const parallaxIll = gsap.utils.toArray(".parallax");

// gsap.set(parallaxIll, {y: -100})

// parallaxIll.forEach((item)=>{
//   gsap.to(item, {
//     yPercent: 50,
//     ease: "none",
//     scrollTrigger: {
//       trigger: item,
//       scrub: true
//     }, 
//   });
// })



// const fadeUp = gsap.utils.toArray("[fade]");
// fadeUp.forEach((el, i) => {
//   const anim = gsap.fromTo(el, {autoAlpha: 0, y:0}, {duration: 1.5, autoAlpha: 1});
//   ScrollTrigger.create({
//     trigger: el,
//     animation: anim,
//     toggleActions: 'play none none none',
//     once: true,
//   });
// });


// // text anim
// const textAnim = document.querySelectorAll(".text-anim");
// textAnim.forEach((quote, i) => {
    
//       quote.split = new SplitText(quote, {
//       type:"words,chars",
//       wordsClass: "split-line"
//     });
//     gsap.set(quote, {perspective: 100});
//     let tl = gsap.timeline({
//       scrollTrigger :{
//         trigger: quote,
//       }
//     })
//     tl.fromTo(quote.split.words,
//     {autoAlpha: 0},{  duration: 1, autoAlpha: 1,ease: "ease",stagger: 0.03});

//   });

//   // menu
// let arrow = document.querySelector(".scroll_up_btn");
// arrow.addEventListener("click", function(){
//   gsap.to(window, {duration: 1, scrollTo: 0});
// });


// // navigation 

// // let navlink = document.querySelectorAll(".navigation_section");
// // let chapter = document.querySelectorAll(".chapter")
// //   navlink.forEach((item, index )=> {
// //       item.addEventListener("click", function(){
// //         gsap.to(window, {duration: 1, scrollTo:
// //           {
// //             y: chapter[index],
// //             offsetY: 100
// //           }}
// //          );
// //       })
// //   });


// let navlink = document.querySelectorAll(".navigation_section");
// let chapter = document.querySelectorAll(".chapter");

// navlink.forEach((item, index) => {
//   item.addEventListener("click", function () {
//     // Rimuovi la classe ".underline" da tutti gli elementi di navigazione
//     navlink.forEach(navItem => {
//       navItem.classList.remove("underline");
//       const paragraph = navItem.querySelector("p");
//       if (paragraph) {
//         paragraph.classList.remove("underline");
//       }
//     });

//     // Aggiungi la classe ".underline" all'elemento di navigazione cliccato
//     item.classList.add("underline");
//     const paragraph = item.querySelector("p");
//     if (paragraph) {
//       paragraph.classList.add("underline");
//     }

//     gsap.to(window, {
//       duration: 1,
//       scrollTo: {
//         y: chapter[index],
//         offsetY: 100
//       }
//     });
//   });
// });


//   // hero animation 
//   gsap.set(".hero-text h1", {zIndex: -1})
//   gsap.fromTo(".hero-text h1", {y: 200}, {y: 0, duration: 0.5, stagger: 0.2, ease: "ease"})


// // menu scroll 
// var prevScrollpos = window.pageYOffset;
// window.onscroll = function() {
//   var currentScrollPos = window.pageYOffset;
//   if (prevScrollpos > currentScrollPos) {
//     document.querySelector(".menu_container").style.top = "40px";
//   } else {
//     document.querySelector(".menu_container").style.top = "-90px";
//   }
//   prevScrollpos = currentScrollPos;
// }


// const hr = gsap.utils.toArray(".hr");
// hr.forEach((el, i) => {
//   gsap.set(el, {transformOrigin:"left"})
//   const anim = gsap.fromTo(el, {scaleX: 0}, {duration: 1.4, scaleX: 1, delay: 0.3, ease: "circ.out"});
//   ScrollTrigger.create({
//     trigger: el,
//     animation: anim,
//     ease: "circ.out",
//     toggleActions: 'play none none none',
//     once: true,
//   });
// });



var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}
