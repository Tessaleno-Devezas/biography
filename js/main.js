// Smooth Scrolling - Top Navigation and Side Menu
$('#navbar a, #navbar2 a, a.link-top').on('click', function(event) {
    if (this.hash !== '') {
      event.preventDefault();
      const hash = this.hash;    
      $('html, body').animate(
        {
          scrollTop: $(hash).offset().top - 95
        },
        900
      );
    }
});

// Main Menu button
let mainMenuBtn = document.querySelector('.main-menu-btn');
let sideNav = document.querySelector('.side-nav');

mainMenuBtn.addEventListener('click', function() {
  mainMenuBtn.classList.toggle('rotate-line');
  sideNav.classList.toggle('side-nav-change');
});

// Spy Links
let sections = document.querySelectorAll('section');
console.log(sections);
let navbarLinks = document.querySelectorAll('#navbar2 a');
console.log(navbarLinks);

navbarLinks[0].classList.add("change-link");

window.addEventListener("scroll", () => {
  // console.log(window.pageYOffset);
  sections.forEach((section, i) => {
    if (window.pageYOffset >= section.offsetTop - 96) {
      navbarLinks.forEach((navLink) => {
        navLink.classList.remove("change-link");
      });
      navbarLinks[i].classList.add("change-link");
    }
  });
});

// Date
let date = new Date();
let year = date.getFullYear();
let month = date.getMonth();

let monthArray = new Array("January","February","March","April","May","June","July","August","September","October","November","December");
console.log(monthArray[month]);

let showDate = document.getElementById('date');
// showDate.innerHTML = `${monthArray[month]} / ${year}`;
showDate.textContent = year;