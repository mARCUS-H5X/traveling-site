// initialize swiper js

const swiper = new Swiper('.swiper', {
    loop: true,

     // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },


})



let prev = document.getElementById('prev');
let next = document.getElementById('next');
let image = document.querySelector('.images');
let item1s = document.querySelectorAll('.images .item1');
let contents = document.querySelectorAll('.content .item1');

let rotate = 0;
let active = 0;
let countitem1 = item1s.length;
let rotateAdd = 360 / countitem1;

function nextSlider(){
    active = active + 1 > countitem1 - 1 ? 0 : active + 1;
    rotate = rotate + rotateAdd; 
    show();
}
function prevSlider(){
    active = active - 1 < 0 ? countitem1 - 1 : active - 1;
    rotate = rotate - rotateAdd; 
    show();     
     
}
function show(){
    image.style.setProperty("--rotate", rotate + 'deg');
    image.style.setProperty("--rotate", rotate + 'deg');
    contents.forEach((content, key) => {
        if(key == active){
            content.classList.add('active');
        }else{
            content.classList.remove('active');
        }
    })
}
next.onclick = nextSlider;
prev.onclick = prevSlider;
// const autoNext = setInterval(nextSlider, 3000);


//Main Page//

window.addEventListener('scroll', function () {

    let value = window.scrollY;   //Get Scroll Value (Mobile - High)

    text.style.top = Math.min(20 + value * 0.1, 70) + "%";

    cloud.style.opacity = Math.max(0, Math.min(1, 1 - value * 0.005));

    rockR.style.left = value * 1.2 + 'px';
    rockL.style.left = value * -1.2 + 'px';
    
    forest.style.top = Math.min(20 + value * 0.00001, 70) + "%";
    forest.style.transform = Math.min(20 + value * 0.01, 70) + "%";

    sky.style.top = Math.max(0, value * 0.00002 + 'px');
    
    let scaleValue = 1 + value * 0.004;
    scaleValue = Math.max(1, Math.min(scaleValue, 1.5)); // Restricts between 1 and 1.5
    mountains.style.transform = `scale(${scaleValue})`;

    header.style.top = value * 0.7 + 'px';
    sun.style.top = value * 1 + 'px';
    sun.style.opacity = Math.max(0, Math.min(1, 1 - value * 0.005));

    //To prevent splash to move above sea water
    if (value < 380) {
        splash.style.top = 20 + value * -0.3 + 'px';
    }

    //Move fishes horizontally
    fish1.style.right = (value - 100) * 1 + 'px';
    fish2.style.left = (value - fish2move) * 1 + 'px';
    fish3.style.right = (value - fish3move) * 1 + 'px';
    fish4.style.left = (value - fish4move) * 1 + 'px';
})


// Contains the link for all social media handles
var links = document.getElementsByClassName("social-media");

links[0].addEventListener("click", () => { openlink(1) });
links[1].addEventListener("click", () => { openlink(2) });
links[2].addEventListener("click", () => { openlink(3) });
links[3].addEventListener("click", () => { openlink(4) });

function openlink(x) {
    if (x == 1) {
        window.open("https://www.instagram.com/_.vini._02_/", "_blank");
    }
    if (x == 2) {
        window.open("https://www.linkedin.com/in/vineet-kumar-gupta-2833ab196/", "_blank");
    }
    if (x == 3) {
        window.open("https://github.com/VineetKumar02", "_blank");
    }
    if (x == 4) {
        window.open("https://vineet-portfolio-site.netlify.app/", "_blank");
    }
}

//Contains the link for the project
