
const navSlide = () => {
    const menu = document.querySelector('.menu');
    const nav = document.querySelector('.nav-list');
    const navLinks = document.querySelectorAll('.nav-list li');
   
    menu.addEventListener('click',() => {
         //Toggle Nav
        nav.classList.toggle('nav-active');
    })
}

navSlide();
