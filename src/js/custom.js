import { gsap } from 'gsap';
import { SplitText } from "gsap/SplitText";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger, SplitText);


let videos = document.querySelectorAll("video");
videos.forEach((item)=>{
  item.play();
})

ScrollTrigger.batch(".animation_card", {
  interval: .5,
  batchMax: 4,
  trigger: ".animation_cards_wrapper",
  onEnter: batch => {
    gsap.to(batch, {
      y: 0,
      duration: 1,
      // ease: "power4.out",
      stagger: 0.25
    });
  },
  onEnterBack: batch => console.log(batch),
});


ScrollTrigger.batch(".animation_card", {
  interval: .5,
  batchMax: 4,
  trigger: ".animation_cards_wrapper",
  onEnter: batch => {
    gsap.to(batch, {
      y: 0,
      duration: 1,
      stagger: 0.25
    });
  },
  onEnterBack: batch => console.log(batch),
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
        // navTabs[i].classList.remove("nav-active");
      }
      for (i = 0; i < navTabs.length; i++) {
        navTabs[i].className = navTabs[i].className.replace(" active", "");
      }

      document.getElementById(tabId).style.display = "flex";
      let currentTab = document.querySelector(`[tab="${tabId}"]`)
      currentTab.classList.add("active")

      gsap.to(window, { duration: 0.5, scrollTo: {
        y: ".tabs_section",
        offsetY: 100,
      } });

      if(tabId == "careguide"){
        gsap.to(".card_scrollUp", {
          y: "0%",
          stagger: 0.2, 
          duration: 1
        })
      }
  });
})


// card care guide scroll
let card_care_guide = document.querySelector(".card_careguide");

card_care_guide.addEventListener("click", function(){
    gsap.to(window, {duration: 1, scrollTo:
      {
        y: ".tabs_buttons",
        offsetY: 100,
        duration: 0.5,
        onComplete: () => {
          const tabId = document.querySelector('[tab="careguide"]');
          const tabPanel = document.querySelector("#careguide");
          let panels = document.querySelectorAll(".tab_content")

          navTabs.forEach((item)=>item.classList.remove("active"))
          panels.forEach((item)=>item.style.display ="none");

          tabId.classList.add("active");
          tabPanel.style.display = "flex";

          gsap.to(".card_scrollUp", {
            y: "0%",
            stagger: 0.25, 
            duration: 1
          })
        }
      }}
      );
  })



let arrows = document.querySelectorAll(".scroll_up_btn");

arrows.forEach(function(arrow) {
  arrow.addEventListener("click", function() {
    gsap.to(window, { duration: 1, scrollTo: 0 });
  });
});

let nextBtn = document.querySelectorAll(".next_btn_container");

nextBtn.forEach(function(item) {
  item.addEventListener("click", function() {
    gsap.to(window, { duration: 0.5, scrollTo: {
      y: ".tabs_section",
      offsetY: 100,
    } });
  });
});

