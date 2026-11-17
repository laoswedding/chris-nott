document.querySelectorAll('.slideshow').forEach(slideshow => {
  const slides = slideshow.querySelectorAll('.slide');
  let current = 0;

  setInterval(() => {
    slides[current].classList.remove('active');
    current = (current + 1) % slides.length;
    slides[current].classList.add('active');
  }, 4000);
});

////
document.querySelectorAll('.slideshow2').forEach(slideshow => {
  const slides2 = slideshow.querySelectorAll('.slide2');
  let current = 0;

  setInterval(() => {
    slides2[current].classList.remove('active');
    current = (current + 1) % slides2.length;
    slides2[current].classList.add('active');
  }, 4000);
});