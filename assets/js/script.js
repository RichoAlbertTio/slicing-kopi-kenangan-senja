    // Toggle class active untuk hamburger menu
    const navbarNav = document.querySelector('.navbar-nav');

    // ketika hamburger menu di klik
    document.querySelector('#hamburger-menu').onclick = () => {
      navbarNav.classList.toggle('active');
    };