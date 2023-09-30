let currentSlide = 0;

function showSlide(n) {
  const slides = document.getElementsByClassName('slider')[0].getElementsByTagName('img');
  
  if (n >= slides.length) {
    currentSlide = 0;
  } else if (n < 0) {
    currentSlide = slides.length - 1;
  }
  
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  
  slides[currentSlide].style.display = 'block';
}

function nextSlide() {
  showSlide(currentSlide += 1);
}

function prevSlide() {
  showSlide(currentSlide -= 1);
}

// Automatically advance the slides every 3 seconds (adjust the interval as needed)
setInterval(nextSlide, 3000);
showSlide(currentSlide);