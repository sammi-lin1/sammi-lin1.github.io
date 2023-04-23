const navBar = document.querySelectorAll('nav ul li a');
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section');

navBar.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();

    const href = link.getAttribute('href');
    const targetElement = document.querySelector(href);
    const targetPosition = targetElement.offsetTop;

    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  });
});

window.addEventListener('scroll', () => {
  let currentSection = '';

  // Iterate through all sections to find the one that is currently scrolled to
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (window.scrollY >= sectionTop - sectionHeight / 3) {
      currentSection = section.getAttribute('id');
    }
  });

  // If the user hasn't scrolled yet, manually set the first link to be active
  if (window.scrollY === 0) {
    navLinks[0].classList.add('active');
  } else {
    // Add active class to corresponding link in the navbar
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href').includes(currentSection)) {
        link.classList.add('active');
      }
    });
  }
});
