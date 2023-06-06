const carousel= document.querySelector("#carousel-image")
const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');
let currentIndex = 0;

let img=[
    "imgCarrousel/Dolphing.jpg",
    "imgCarrousel/gato.jpg",
    "imgCarrousel/Montaña.jpg",
    "imgCarrousel/perro.jpg"
]

 document.addEventListener('DOMContentLoaded', () => {
     startInterval()
    
  });

  function startInterval(){

    setInterval(() => {

      currentIndex++
      carousel.src=img[currentIndex];
      console.log(currentIndex)
      if(currentIndex>=3 || currentIndex<0){
        currentIndex=0
      }

    }, 1000);
  }
  

  function changeImageLeft() {
    if(currentIndex>=4 || currentIndex<0){
        currentIndex=0
      }
    currentIndex = (currentIndex - 1 + img.length) % img.length;
    carousel.style.transform = 'translateX(-100%)';
    setTimeout(() => {
        carousel.src = img[currentIndex];
        carousel.style.transform = 'translateX(0)';
    }, 500);

  }

  function changeImageRight() {
    if(currentIndex>=4 || currentIndex<0){
        currentIndex=0
      }
    currentIndex = (currentIndex + 1) % img.length;
    carousel.style.transform = 'translateX(100%)';
    setTimeout(() => {
        carousel.src = img[currentIndex];
        carousel.style.transform = 'translateX(0)';
    }, 500);

  }
  
prevButton.addEventListener('click', changeImageLeft);
nextButton.addEventListener('click', changeImageRight);