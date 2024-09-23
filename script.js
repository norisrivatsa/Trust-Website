
document.addEventListener("scroll", function () {
    const fadeSections = document.querySelectorAll(".fade-section");

    fadeSections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const windowHeight = window.innerHeight;   
        const thresholdTop = windowHeight * 0.2;  
        const thresholdBottom = windowHeight * 0.8; 

        if (rect.top < thresholdBottom && rect.bottom > thresholdTop) {
            section.classList.add("visible");
        } else {
            section.classList.remove("visible");
        }
    });
});

document.addEventListener('scroll', () => {
    const cards = document.querySelectorAll('.js-stack-cards__item');
    const scrollTop = window.scrollY;
  
    cards.forEach((card, index) => {
      const rect = card.getBoundingClientRect();
      const offset = rect.top + scrollTop;
  
      if (scrollTop > offset) {
        // Add 'shrink' class when the user scrolls past the card
        card.classList.add('shrink');
        card.style.zIndex = 0; // Send the card to the back when it's scrolled past
      } else {
        // Remove 'shrink' class when the card is in view
        card.classList.remove('shrink');
        card.style.zIndex = 1; // Bring the card to the front when it's in view
      }
    });
  });

function showSidebar() {
  const sidebar = document.querySelector('.sidebar')
  sidebar.classList.toggle('show')
}

function hideSidebar() {
  const sidebar = document.querySelector('.sidebar')
  sidebar.classList.remove('show');
}

/* slide section */

  document.addEventListener('DOMContentLoaded', function () {
    const slideInElements = document.querySelectorAll('.slide-in');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    });

    slideInElements.forEach((element) => {
      observer.observe(element);
    });
  });

  window.addEventListener('DOMContentLoaded', () => {
    const introScreen = document.getElementById('intro-screen');

    // Set the delay for the intro screen to play (e.g., 4 seconds)
    setTimeout(() => {
        // Start lifting up animation
        introScreen.style.animation = 'liftUp 1s ease-out forwards';

        // Remove the intro screen from the document after animation is done
        setTimeout(() => {
            introScreen.style.display = 'none'; // Optionally hide the intro screen after the animation
        }, 1000); // This matches the duration of the 'liftUp' animation
    }, 2500); // Time delay for the intro screen to be visible (4 seconds)
});
