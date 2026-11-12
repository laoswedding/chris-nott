const navMenu = document.querySelector(".nav-menu");
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelectorAll(".nav-link");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  hamburger.classList.toggle("active");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
    hamburger.classList.remove("active");
  });
});

// Force the browser to reset scroll position on reload
if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}

// Ensure the page scrolls to the top once the DOM is ready
window.addEventListener("DOMContentLoaded", () => {
  window.scrollTo(0, 0);
});

const intro = document.querySelector(".intro");
const body = document.querySelector("body");
const button = document.getElementById("muteBtn");
const audio = document.getElementById("myAudio");

function playAudio() {
  intro.classList.add("fade-out");
  body.style.overflow = "auto";
  // audio.muted = false;
  // audio.currentTime = 0; // Resets audio to start if clicked multiple times
  // audio.play();
  // button.classList.add("active");
  // button.innerHTML = audio.muted
  //   ? '<i class="fa-solid fa-volume-xmark"></i>'
  //   : '<i class="fa-solid fa-volume-high"></i>';
}

function toggleMuteAudio() {
  const audio = document.getElementById("myAudio");
  audio.muted = !audio.muted;
  button.innerHTML = audio.muted
    ? '<i class="fa-solid fa-volume-xmark"></i>'
    : '<i class="fa-solid fa-volume-high"></i>';
}

audio.addEventListener("ended", () => {
  button.innerHTML = '<i class="fa-solid fa-volume-xmark"></i>';
});

//countdown
// Set your target date/time here (uses the visitor's local timezone)
const targetDate = new Date("2027-03-20T17:00:00");

const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
const wrapEl = document.getElementById("countdown");

function pad(num) {
  return String(num).padStart(2, "0");
}

function updateCountdown() {
  const now = new Date();
  const diff = targetDate - now;

  if (diff <= 0) {
    wrapEl.innerHTML = '<div class="finished">🎉 It\'s here!</div>';
    clearInterval(timer);
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  daysEl.textContent = pad(days);
  hoursEl.textContent = pad(hours);
  minutesEl.textContent = pad(minutes);
  secondsEl.textContent = pad(seconds);
}

updateCountdown();
const timer = setInterval(updateCountdown, 1000);

document.addEventListener('DOMContentLoaded', () => {
    // 1. Create the lightbox elements dynamically
    const overlay = document.createElement('div');
    overlay.className = 'lightbox-overlay';

    const lightboxImg = document.createElement('img');
    overlay.appendChild(lightboxImg);

    const closeBtn = document.createElement('button');
    closeBtn.className = 'lightbox-close';
    closeBtn.innerHTML = '&times;';
    overlay.appendChild(closeBtn);

    document.body.appendChild(overlay);

    // 2. Select all images inside the gallery container
    const galleryImages = document.querySelectorAll('.gallery-container img');

    // 3. Attach click event listener to open lightbox
    galleryImages.forEach(img => {
        img.addEventListener('click', () => {
            lightboxImg.src = img.src;
            lightboxImg.alt = img.alt;
            overlay.classList.add('active');
            document.body.style.overflow = 'hidden'; // Prevent background scrolling
        });
    });

    // 4. Close functions
    const closeLightbox = () => {
        overlay.classList.remove('active');
        document.body.style.overflow = 'auto'; // Explicitly restore scrolling
    };

    // Close when clicking the close button
    closeBtn.addEventListener('click', closeLightbox);

    // Close when clicking outside the image (on the dark background)
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            closeLightbox();
        }
    });

    // Close when pressing the 'Escape' key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && overlay.classList.contains('active')) {
            closeLightbox();
        }
    });
});