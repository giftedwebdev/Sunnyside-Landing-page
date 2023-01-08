const navSlide = () => {
    const hamburger = document.querySelector('.hamburger-icon');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    const closeMenu = document.querySelector('.menu-close-icon');
    const main = document.querySelector('main');

    // function closeMenu(e) {
    //     if (
    //         nav.classList.contains('show-nav') && e.target !== hamburger && !hamburger.contains(e.target) && e.target !== navLinks && !navLinks.contains(e.target)
    //     ) {
    //         nav.classlist.toggle('nav-active');nav.removeEventListener('click', closeMenu);
    //     } else if (!nav.classList.contains('nav-active')) {
    //         nav.removeEventListener('click', closeMenu);
    //     }
    // }

    // // Toggle Navs
    hamburger.addEventListener('click', ()=> {
        nav.classList.toggle('nav-active');
    });

    // closeMenu.addEventListener('click', ()=> {
    //     nav.classList.toggle('nav-active');
    // });
    

    

    // Animate Links
    // navLinks.forEach((link, index) => {
    //     link.style.animation = `navLinksfade 0.5s ease forwards ${index / 7 + 2}s`;
    // })


}  

navSlide();