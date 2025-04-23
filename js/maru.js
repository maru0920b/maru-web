document.addEventListener('DOMContentLoaded', function () {
  const modal = document.getElementById('contactModal');
  const modalButtons = document.querySelectorAll('.open-modal');
  const closeBtn = document.querySelector('.close-modal');

  modalButtons.forEach(button => {
    button.addEventListener('click', function (e) {
      e.preventDefault();
      modal.style.display = 'block';
      document.body.style.overflow = 'hidden';
    });
  });

  closeBtn.addEventListener('click', function () {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
  });

  window.addEventListener('click', function (e) {
    if (e.target === modal) {
      modal.style.display = 'none';
      document.body.style.overflow = 'auto';
    }
  });

  const hamburgerBtn = document.querySelector('.hamburger-btn');
  const mobileMenu = document.querySelector('.mobile-menu');
  const mobileMenuLinks = document.querySelectorAll('.mobile-menu__item a');

  hamburgerBtn.addEventListener('click', function () {
    hamburgerBtn.classList.toggle('active');
    mobileMenu.classList.toggle('active');

    if (mobileMenu.classList.contains('active')) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  });

  mobileMenuLinks.forEach(link => {
    link.addEventListener('click', function () {
      if (!link.classList.contains('open-modal')) {
        hamburgerBtn.classList.remove('active');
        mobileMenu.classList.remove('active');
        document.body.style.overflow = 'auto';
      }
    });
  });
});
