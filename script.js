/*  
  Developed by Swayam Swarup Panda as part of the NexTech Solutions Landing Page project.
  © 2025. All rights reserved. For educational and portfolio showcase purposes only.
*/

document.addEventListener("DOMContentLoaded", function () {
  // Mobile Navigation Toggle
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");

  if (hamburger) {
    hamburger.addEventListener("click", function () {
      hamburger.classList.toggle("active");
      navLinks.classList.toggle("active");
    });
  }

  // Close mobile menu when clicking a link
  const navItems = document.querySelectorAll(".nav-links a");
  navItems.forEach((item) => {
    item.addEventListener("click", function () {
      hamburger.classList.remove("active");
      navLinks.classList.remove("active");
    });
  });

  // Sticky Header
  const header = document.querySelector("header");
  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      header.style.padding = "15px 0";
      header.style.backgroundColor = "rgba(0, 0, 0, 0.95)";
      header.style.boxShadow = "0 5px 15px rgba(0, 0, 0, 0.1)";
    } else {
      header.style.padding = "20px 0";
      header.style.backgroundColor = "rgba(0, 0, 0, 0.9)";
      header.style.boxShadow = "none";
    }
  });

  // Testimonials Slider
  const slides = document.querySelectorAll(".testimonial-slide");
  const dots = document.querySelectorAll(".dot");
  const prevBtn = document.querySelector(".control.prev");
  const nextBtn = document.querySelector(".control.next");

  let currentSlide = 0;

  function updateSlider() {
    slides.forEach((slide) => {
      slide.classList.remove("active");
    });
    dots.forEach((dot) => {
      dot.classList.remove("active");
    });

    slides[currentSlide].classList.add("active");
    dots[currentSlide].classList.add("active");
  }

  if (prevBtn) {
    prevBtn.addEventListener("click", function () {
      currentSlide--;
      if (currentSlide < 0) {
        currentSlide = slides.length - 1;
      }
      updateSlider();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", function () {
      currentSlide++;
      if (currentSlide >= slides.length) {
        currentSlide = 0;
      }
      updateSlider();
    });
  }

  dots.forEach((dot, index) => {
    dot.addEventListener("click", function () {
      currentSlide = index;
      updateSlider();
    });
  });

  // Auto slide testimonials
  setInterval(function () {
    currentSlide++;
    if (currentSlide >= slides.length) {
      currentSlide = 0;
    }
    updateSlider();
  }, 5000);

  /*  
  Developed by Swayam Swarup Panda as part of the NexTech Solutions Landing Page project.
  © 2025. All rights reserved. For educational and portfolio showcase purposes only.
*/

  // Form Submission
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // Collect form data
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const subject = document.getElementById("subject").value;
      const message = document.getElementById("message").value;

      // Basic form validation
      if (!name || !email || !message) {
        alert("Please fill in all required fields.");
        return;
      }

      // In a real application, you would send this data to your server
      console.log("Form submitted:", { name, email, subject, message });

      // Reset form and show success message
      contactForm.reset();
      alert("Thank you for your message. We will get back to you soon!");
    });
  }

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      if (targetId === "#") return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        const headerHeight = header.offsetHeight;
        const targetPosition =
          targetElement.getBoundingClientRect().top +
          window.pageYOffset -
          headerHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      }
    });
  });

  // Newsletter subscription
  const newsletterForm = document.querySelector(".newsletter-form");
  if (newsletterForm) {
    newsletterForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const email = this.querySelector('input[type="email"]').value;

      if (!email) {
        alert("Please enter your email address.");
        return;
      }

      // In a real application, you would send this data to your server
      console.log("Newsletter subscription:", { email });

      // Reset form and show success message
      this.reset();
      alert("Thank you for subscribing to our newsletter!");
    });
  }

  // Animation on scroll (simple implementation)
  const animateOnScroll = function () {
    const elements = document.querySelectorAll(
      ".service-card, .about-image, .testimonial-content, .contact-info, .contact-form"
    );

    elements.forEach((element) => {
      const elementPosition = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (elementPosition < windowHeight - 100) {
        element.style.opacity = "1";
        element.style.transform = "translateY(0)";
      }
    });
  };

  // Initial animation setup
  document
    .querySelectorAll(
      ".service-card, .about-image, .testimonial-content, .contact-info, .contact-form"
    )
    .forEach((element) => {
      element.style.opacity = "0";
      element.style.transform = "translateY(30px)";
      element.style.transition = "all 0.8s ease";
    });

  // Call animation function on scroll
  window.addEventListener("scroll", animateOnScroll);

  // Call it once on page load
  animateOnScroll();
});

/*  
  Developed by Swayam Swarup Panda as part of the NexTech Solutions Landing Page project.
  © 2025. All rights reserved. For educational and portfolio showcase purposes only.
*/
