// -------------- Shwo nav menu

const navMenu = document.getElementById("nav__menu"),
  navToggle = document.getElementById("nav__toggle"),
  navClose = document.getElementById("nav__close");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

// -------------- Remove mobile menu

const navLink = document.querySelectorAll(".nav__link");

navLink.forEach((nl) => {
  nl.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
});

// -------- Onscroll blur effect

window.addEventListener("scroll", () => {
  const header = document.getElementById("header");

  if (scrollY >= 50) {
    header.classList.add("blur-header");
  } else {
    header.classList.remove("blur-header");
  }
});

// ------------ Email js

const contactForm = document.getElementById("contact__form"),
  contactMessage = document.getElementById("contact__message");

const sendEmail = (e) => {
  e.preventDefault();

  // serviceID - templateID - #form - publicKey
  emailjs
    .sendForm(
      "service_me5xqqf",
      "template_8xehyep",
      "#contact__form",
      "ix5EAGwU-Jk8aoi7w"
    )
    .then(
      () => {
        // Show sent message
        contactMessage.textContent = "Message sent successfully ✅";

        // Remove message after five seconds
        setTimeout(() => {
          contactMessage.textContent = "";
        }, 5000);

        // Clear input fields
        contactForm.reset();
      },
      () => {
        // Show error message
        contactMessage.textContent = "Message not sent (service error) ❌";
      }
    );
};

contactForm.addEventListener("submit", sendEmail);

// ----------- Scroll Up -------------
window.addEventListener("scroll", () => {
    const scrollUp = document.getElementById("scroll__up");
  
    if (scrollY >= 350) {
        scrollUp.classList.add("show__scroll");
    } else {
        scrollUp.classList.remove("show__scroll");
    }
  });

//   --------- Scroll Section Active Linkn 
const sections = document.querySelectorAll('section')

const scrollActive = ()=>{
  const scrollDown = window.scrollY
  sections.forEach((current) =>{
    const secHeight = current.offsetHeight,
          secTop = current.offsetTop -58,
          secId = current.getAttribute('id'),
          secClass = document.querySelector('.nav__menu a[href*=' + secId +']');

  if(scrollDown > secTop && scrollDown <= secTop + secHeight){
    secClass.classList.add('active__link')
  }else{
    secClass.classList.remove('active__link')
  }
  })
}

window.addEventListener('scroll', scrollActive)

// -------------- Scroll Reveal ---------

let sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 400,
})
sr.reveal(`.home__data, .experience, .skills, .contact__container`)
sr.reveal(`.home__image`, {delay: 600})
sr.reveal(`.home__scroll`, {delay: 800})
sr.reveal(`.work__card, .service__card`, {interval: 100})
sr.reveal(`.about__content`, {origin: 'right'})
sr.reveal(`.about__image`, {origin: 'left'})




