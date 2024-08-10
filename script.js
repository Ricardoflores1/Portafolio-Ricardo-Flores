const listInfo = document.querySelector('.list-info');
const listImg = document.querySelector('.list-img');
const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');
const bgs = document.querySelectorAll('.bg');

let index = 0;
const infoTransformPercent = 25;  // Percentage transform for list-info
const imgTransformPercent = 100;  // Percentage transform for list-img

if (nextBtn && prevBtn) {
    nextBtn.addEventListener('click', () => {
        index = (index < 3) ? index + 1 : 3;
        listInfo.style.transform = `translateY(${index * -infoTransformPercent}%)`;
        listImg.style.transform = `translateY(${index * -imgTransformPercent}%)`;

        bgs[index].classList.add('active');
    });

    prevBtn.addEventListener('click', () => {
        indexPrev = (index > 0) ? index : 0;
        index = (index > 0) ? index - 1 : 0;
        listInfo.style.transform = `translateY(${index * -infoTransformPercent}%)`;
        listImg.style.transform = `translateY(${index * -imgTransformPercent}%)`;

        bgs[indexPrev].classList.remove('active');
    });
} else {
    console.error('Next or Previous button not found');
}

document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
  
      targetElement.scrollIntoView({ behavior: 'smooth' });
    });
  });
  
  const sections = document.querySelectorAll("section");
  const navbar = document.querySelector(".navbar");
  
  const options = {
    threshold: 0.6,
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const sectionId = entry.target.id;
        document.querySelector('.navbar a.active').classList.remove('active');
        document.querySelector(`.navbar a[href="#${sectionId}"]`).classList.add('active');
      }
    });
  }, options);
  
  sections.forEach((section) => {
    observer.observe(section);
  });
  document.addEventListener("DOMContentLoaded", function() {
    // Encapsulamos todo el código en una función autoejecutable
    (function() {
        let menuIcon = document.querySelector('#menu-icon');
        let navbar = document.querySelector('.navbar');
        let sections = document.querySelectorAll('section');
        let navLinks = document.querySelectorAll('header nav a');

        window.onscroll = () => {
            sections.forEach(sec => { 
                let top = window.scrollY;
                let offset = sec.offsetTop - 150;
                let height = sec.offsetHeight;
                let id = sec.getAttribute('id');

                if (top >= offset && top < offset + height) {
                    navLinks.forEach(link => {
                        link.classList.remove('active');
                        // Corrección: Remover el espacio entre 'a' y '[href'
                        let activeLink = document.querySelector('header nav a[href*=' + id + ']');
                        if (activeLink) {
                            activeLink.classList.add('active');
                        }
                    });
                }
            });
        };

        menuIcon.onclick = () => {
            menuIcon.classList.toggle('bx-x');
            navbar.classList.toggle('active');
        };
    })();
});

  