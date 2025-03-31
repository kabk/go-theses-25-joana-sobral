let seen_sections = document.getElementById("seen_sections");
let unseen_sections = document.getElementById("unseen_sections");

let navLinks = document.getElementsByClassName("navLink");

let tocLinks = document.getElementById("table_of_contents").children

const navegableElements = document.querySelectorAll(".navegable_element");

let main = document.querySelector("main")
const h2 = document.querySelectorAll("h2");
let p = document.querySelectorAll("p");

const backgroundImageSections = document.querySelectorAll(".background_image_section")
let backgroundVideo = document.getElementById("background_video")

const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);



addEventListener("load", () => {
  document.getElementById("home").scrollIntoView({behavior:"smooth"})
});

const observerOptionsH2 = {
  root: null,
  rootMargin: "0px",
  threshold: 0.2,
}
const observerH2 = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add('visible');
    } else {
      entry.target.classList.remove("visible")
    }
  })
}, observerOptionsH2);
h2.forEach(h2=>{
  observerH2.observe(h2);
})


var lastScrollTop = 0;
var scrollingDown;

window.addEventListener("scroll",()=>{
  var currentScrollTop = window.scrollY;
  if(currentScrollTop>lastScrollTop){
    scrollingDown = true;
  }
  if(currentScrollTop<lastScrollTop){
    scrollingDown = false;
  }
  lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
})

function assignTargetElements(){
  for(i=0;i<navLinks.length;i++){
    let targetElement = navegableElements[i];

    navLinks[i].addEventListener("click",()=>{
      targetElement.scrollIntoView({behavior:"smooth"})
    })
  }
}
assignTargetElements()

for(i=0;i<tocLinks.length;i++){
  let targetElement = navegableElements[i];
  tocLinks[i].addEventListener("click",()=>{
    targetElement.scrollIntoView({behavior:"smooth"})
  })
}

const observerOptionsProgression = {
  root: null,
  rootMargin: "0px 0px -50% 0px",
  threshold: 0,
}

let shiftFactor = 30;

const progressionObserver = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    let targetID = entry.target.id

    if(entry.isIntersecting){

      if(!isMobile){
        if(targetID == "abstract") {
          shiftFactor = 10
        } else if(targetID == "introduction") {
          shiftFactor = 25
        } else if(targetID == "partI") {
          shiftFactor = 50
        } else if(targetID == "partII") {
          shiftFactor = 100
        } else if(targetID == "partIII") {
          shiftFactor = 150
        } else if(targetID == "partIV") {
          shiftFactor = 200
        } else {
          shiftFactor = 0
        }
      } else {
        if(targetID == "abstract") {
          shiftFactor = 2
        } else if(targetID == "introduction") {
          shiftFactor = 4
        } else if(targetID == "partI") {
          shiftFactor = 8
        } else if(targetID == "partII") {
          shiftFactor = 16
        } else if(targetID == "partIII") {
          shiftFactor = 32
        } else if(targetID == "partIV") {
          shiftFactor = 40
        } else {
          shiftFactor = 0
        }
      }

      if(scrollingDown){
        let activeNavLink = unseen_sections.children[0];
        activeNavLink.remove();
        seen_sections.appendChild(activeNavLink)
      } else {
          let activeNavLink = seen_sections.children[0];
          activeNavLink.remove();
          unseen_sections.appendChild(activeNavLink)
      }
      assignTargetElements()
    }
  })
}, observerOptionsProgression);

navegableElements.forEach(navegableElement=>{
  progressionObserver.observe(navegableElement);
})

let firstNavLink = unseen_sections.children[0];
  firstNavLink.remove();
  seen_sections.appendChild(firstNavLink)



function getRandomArbitrary() {
  return Math.random() * (shiftFactor - (-shiftFactor)) -shiftFactor;
}

const pObserver = new IntersectionObserver((p)=>{
  p.forEach(singleP=>{
    if(singleP.isIntersecting){
      let randomShiftLeft = getRandomArbitrary();
      let randomShiftRight = getRandomArbitrary();
      singleP.target.style.marginLeft = randomShiftLeft + "px"
      singleP.target.style.marginRight = randomShiftRight + "px"
    }
  })
}, observerOptionsProgression)

p.forEach(p=>{
  pObserver.observe(p);
})



const observerOptionsImgs = {
  root: null,
  rootMargin: "-50% 0px -50% 0px",
  threshold: 0,
}

const backgroundImageObserver = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    let fileName = entry.target.id

    if(entry.isIntersecting){
      backgroundVideo.style.opacity = 1;
      if(fileName == "party" || fileName == "Stumpp"){
        backgroundVideo.src = "./assets/images/" + fileName + ".mp4";
        backgroundVideo.style.minWidth = "";
        backgroundVideo.style.minHeight = "";
        backgroundVideo.style.height = 80 + "vh";
        backgroundVideo.style.objectFit = "contain";
      } else {
        backgroundVideo.src = "./assets/images/" + fileName + ".mp4";
        backgroundVideo.style.minWidth = "100%";
        backgroundVideo.style.minHeight = "100%";
        backgroundVideo.style.height = "";
        backgroundVideo.style.objectFit = "cover";
      }

      if (isMobile) {
        if(fileName == "party" || fileName == "Stumpp"){
        backgroundVideo.style.width = 80 + "vh";
        backgroundVideo.style.height = "auto";
        backgroundVideo.style.top = "0";
        backgroundVideo.style.left = "-25%";
        backgroundVideo.style.transform = "rotate(90deg)";
        } else {
          backgroundVideo.style.width = "";
          backgroundVideo.style.top = "50%";
          backgroundVideo.style.left = "50%";
          backgroundVideo.style.transform = "translate(-50%, -50%)";
        }
      }
    } else {
      backgroundVideo.style.opacity = 0;
      setTimeout(()=>{
      backgroundVideo.src = "";
      },500)
      
    }
  })
}, observerOptionsImgs);

backgroundImageSections.forEach(backgroundImageSection=>{
  backgroundImageObserver.observe(backgroundImageSection);
})
