import { gsap } from 'gsap';
import { SplitText } from "gsap/SplitText";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger, SplitText);


let videos = document.querySelectorAll("video");
videos.forEach((item)=>{
  item.play();
})


const cards = document.querySelectorAll('.animation_card');

gsap.to(cards, {
  y: 0,
  stagger: 0.25,
  duration: 1,
  scrollTrigger: {
    trigger: ".section_cards_headline",
    start: 'top 80%',
  }
});



const fadeUp = gsap.utils.toArray("[fade]");
fadeUp.forEach((el, i) => {
  const anim = gsap.fromTo(el, {autoAlpha: 0, y:0}, {duration: 1.5, autoAlpha: 1});
  ScrollTrigger.create({
    trigger: el,
    animation: anim,
    toggleActions: 'play none none none',
    once: true,
  });
});



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



let navTabs = document.querySelectorAll(".tab_link");

navTabs.forEach((item)=>{
  let tabId = item.getAttribute("tab");

  item.addEventListener("click", function(evt){
      let i;
      let tabContent = document.getElementsByClassName("tab_content");
      for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
      }
      for (i = 0; i < navTabs.length; i++) {
        navTabs[i].className = navTabs[i].className.replace(" active", "");
      }

      document.getElementById(tabId).style.display = "flex";
      let currentTab = document.querySelector(`[tab="${tabId}"]`)
      currentTab.classList.add("active")

      gsap.to(window, { duration: 0, scrollTo: {
        y: ".tabs_section",
        offsetY: 100,
      } });
  });
})




let arrows = document.querySelectorAll(".scroll_up_btn");

arrows.forEach(function(arrow) {
  arrow.addEventListener("click", function() {
    gsap.to(window, { duration: 1, scrollTo: 0 });
  });
});


// video mobile
let video = document.querySelectorAll("video");
video.forEach((item)=>{
  item.play()
})



function handleIntersection(entries, observer) {
  entries.forEach(entry => {
    const index = entry.target.dataset.index;
    const bullet = document.querySelector(`.bullet_${index}`);
    const bullets = document.querySelectorAll('.bullet');

    if (entry.isIntersecting) {
      bullet.classList.add('active');
      bullets.forEach((item) => {
        if(item != bullet){
          item.classList.remove('active');
        }
      });
    } else {
      bullet.classList.remove('active');
      if(!bullets[0].classList.contains('active') && !bullets[1].classList.contains('active')){
        bullets[0].classList.add('active');
      }
    }
  });
}



function handleIntersection2(entries, observer) {
  entries.forEach(entry => {
    const index = entry.target.dataset.index;
    let cont = document.querySelector(`.bullet_bottom`);
    const bullet = cont.querySelector(` .bullet_${index}`);
    const bullets = cont.querySelectorAll('.bullet');
    if (entry.isIntersecting) {
      bullet.classList.add('active');
      bullets.forEach((item) => {
        if(item != bullet){
          item.classList.remove('active');
        }
      });
    } else {
      bullet.classList.remove('active');
    }
  });
}

const cardContainer = document.querySelector('card_content_container');
const content_card = document.querySelectorAll('.principi_card');
const observer = new IntersectionObserver(handleIntersection, { threshold: 0.5 });
let bullets1 = document.querySelectorAll('.section_scelta .bullet');
content_card.forEach((card, index) => {
  card.dataset.index = index + 1; 
  observer.observe(card);

  bullets1[index].addEventListener('click', function(){
    gsap.to(".principi_cards_wrapper", { duration: 0.5, scrollTo: {
      x:  content_card[index],
      offsetX: 24,
    } });
  })

});


let animation_card_container = document.querySelector(".animation_cards_wrapper");
let animation_cards = document.querySelectorAll(".animation_card");
const observer2 = new IntersectionObserver(handleIntersection2, { threshold: 0.5 });
let bullets2 = document.querySelectorAll('.section_card_animated .bullet');

animation_cards.forEach((card, index) => {
  card.dataset.index = index + 1; 
  observer2.observe(card);

  bullets2[index].addEventListener('click', function(){
    gsap.to(".animation_cards_wrapper", { duration: 0.5, scrollTo: {
      x:  animation_cards[index],
      offsetX: 24,
    } });
  })

});