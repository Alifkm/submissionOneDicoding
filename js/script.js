// --------------------------------------------------------------------------- //
// bagian ini digunakan untuk responsive navbar pada website
const burgerButton = document.querySelector('.burgerBtn');
const navButton = document.querySelector('.navBtn');

burgerButton.addEventListener('click', function() {
  if(document.querySelector('.navBtnActive')) {
    navButton.classList.remove("navBtnActive");
  }else {
    navButton.classList.add("navBtnActive");
  }
});
// --------------------------------------------------------------------------- //



// --------------------------------------------------------------------------- //
// bagian ini digunakan untuk memunculkan animasi saat user melakukan scroll pada bagian agent
window.addEventListener("scroll", function() {
  const shows = document.querySelectorAll(".show");

  for (let i = 0; i < shows.length; i++) {
    const windowHeight = window.innerHeight;
    const elementTop = shows[i].getBoundingClientRect().top;
    const elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      shows[i].classList.add("active");
    } else {
      shows[i].classList.remove("active");
    }
  }
});
// --------------------------------------------------------------------------- //


// --------------------------------------------------------------------------- //
// bagian ini digunakan untuk mengaktifkan voice lines dari tiap agent
const sageVoiceLine = document.querySelector('#sageVoiceLine')
const sageButton = document.querySelector('.sageButton');

const killjoyVoiceLine = document.querySelector('#killjoyVoiceLine')
const killjoyButton = document.querySelector('.killjoyButton');

const cypherVoiceLine = document.querySelector('#cypherVoiceLine')
const cypherButton = document.querySelector('.cypherButton');

const chamberVoiceLine = document.querySelector('#chamberVoiceLine')
const chamberButton = document.querySelector('.chamberButton');

sageButton.addEventListener('click', function() {
  sageVoiceLine.play();
});

killjoyButton.addEventListener('click', function() {
  killjoyVoiceLine.play();
});

cypherButton.addEventListener('click', function() {
  cypherVoiceLine.play();
});

chamberButton.addEventListener('click', function() {
  chamberVoiceLine.play();
});
// --------------------------------------------------------------------------- //


// --------------------------------------------------------------------------- //
// bagian ini digunakan untuk slider pada gallery
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

let slideIndex = 1;
slides(slideIndex);

nextBtn.addEventListener('click', function() {
  slides(slideIndex += 1);
});

prevBtn.addEventListener('click', function() {
  slides(slideIndex += -1);
});

function slides(n) {
  let slides = document.getElementsByClassName("galleryImg");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  
  slides[slideIndex-1].style.display = "block";  
}
// --------------------------------------------------------------------------- //