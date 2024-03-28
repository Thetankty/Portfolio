// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  });
  
  // Toggle Active Class on Navigation Links
  const navLinks = document.querySelectorAll('.NavLink');
  
  function toggleActiveLink() {
    navLinks.forEach(link => {
      const section = document.querySelector(link.getAttribute('href'));
      const sectionTop = section.offsetTop - 64; // Adjust for sticky header height
      const sectionBottom = sectionTop + section.offsetHeight;
      const currentScroll = window.pageYOffset;
  
      if (currentScroll >= sectionTop && currentScroll < sectionBottom) {
        link.classList.add('NavLinkActive');
      } else {
        link.classList.remove('NavLinkActive');
      }
    });
  }
  
  window.addEventListener('scroll', toggleActiveLink);
  
  // Background Blob Animation
  const blob = document.querySelector('#blob');
  
  document.addEventListener('mousemove', e => {
    const x = e.clientX / window.innerWidth - 0.5;
    const y = e.clientY / window.innerHeight - 0.5;
  
    blob.style.left = `${x * 30}vw`;
    blob.style.top = `${y * 30}vh`;
  });


  // Scrolling Animation

  const aboutDescriptions = document.querySelectorAll('.AboutDescription');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      } else {
        entry.target.classList.remove('visible');
      }
    });
  }, { threshold: 0.5 }); // Adjust the threshold value as needed
  
  aboutDescriptions.forEach(description => {
    observer.observe(description);
  });

