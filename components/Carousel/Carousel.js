/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/


function carouselCreator(){
  // creating elements
  const carousel = document.createElement('div');
  const Lbtn = document.createElement('div');
  const img1 = document.createElement('img');
  const img2 = document.createElement('img');
  const img3 = document.createElement('img');
  const img4 = document.createElement('img');
  const Rbtn = document.createElement('div');

  // structuring elements
  carousel.appendChild(Lbtn);
  carousel.appendChild(img1);
  carousel.appendChild(img2);
  carousel.appendChild(img3);
  carousel.appendChild(img4);
  carousel.appendChild(Rbtn);

  // adding content
  img1.src = './assets/carousel/mountains.jpeg';
  img2.src = './assets/carousel/computer.jpeg';
  img3.src = './assets/carousel/trees.jpeg';
  img4.src = './assets/carousel/turntable.jpeg';
  Lbtn.textContent = '<';
  Rbtn.textContent = '>';

  // adding classes
  carousel.classList.add('carousel');
  Lbtn.classList.add('left-button');
  Rbtn.classList.add('right-button');
  img1.classList.add('carousel-imgs');
  img2.classList.add('carousel-imgs');
  img3.classList.add('carousel-imgs');
  img4.classList.add('carousel-imgs');

  Lbtn.addEventListener('click', ()=>{
    changeImg(-1);
  })

  Rbtn.addEventListener('click', ()=>{
    changeImg(1);
  })

  return carousel;
}

const carouselContainer = document.querySelector('.carousel-container');
carouselContainer.appendChild(carouselCreator());




// Carousel slideshow

let index = 1;
displayImgs(index);


function changeImg(n) {
  displayImgs(index += n);
}

function currentImg(n) {
  displayImgs(index = n);
}


function displayImgs(n) {
  let slides = document.getElementsByClassName("carousel-imgs");

  if (n > slides.length) {
    index = 1
  }
  if (n < 1) {
    index = slides.length
  }
  for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[index - 1].style.display = "block";
}