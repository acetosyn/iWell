function initFeatureSlider() {
    const slider = document.getElementById('feature-slider');
    const slides = slider.querySelectorAll('.slide');
    const dotsContainer = document.getElementById('feature-dots');
  
    let currentIndex = 0;
  
    // Create dots dynamically
    slides.forEach((_, index) => {
      const dot = document.createElement('span');
      dot.addEventListener('click', () => goToSlide(index));
      dotsContainer.appendChild(dot);
    });
  
    const dots = dotsContainer.querySelectorAll('span');
    if (dots.length > 0) dots[0].classList.add('active');
  
    function goToSlide(index) {
      slider.style.transform = `translateX(-${index * 100}%)`;
      dots[currentIndex].classList.remove('active');
      dots[index].classList.add('active');
      currentIndex = index;
    }
  
    // Auto-slide every 6 seconds
    setInterval(() => {
      let next = (currentIndex + 1) % slides.length;
      goToSlide(next);
    }, 6000);
  }
  
  window.addEventListener('DOMContentLoaded', initFeatureSlider);
  