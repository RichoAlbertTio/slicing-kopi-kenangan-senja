    // Toggle class active untuk hamburger menu
    const navbarNav = document.querySelector('.navbar-nav');

    // ketika hamburger menu di klik
    document.querySelector('#hamburger-menu').onclick = () => {
      navbarNav.classList.toggle('active');
    };


    // kilk diluar sidebar untuk menghilangkan menu
    const hamburger = document.querySelector('#hamburger-menu');

    document.addEventListener('click', (e) => {
      if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)){
        navbarNav.classList.remove('active');
      }
    });