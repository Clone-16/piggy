let lastScroll = 0;
const navBar = document.querySelector('.nav');

window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;

    if(currentScroll > lastScroll){
        navBar.style.top = '-80px'
    }
    else{
        navBar.style.top = '0'
    }

    lastScroll = currentScroll
})


const menuIcon = document.querySelector('.threeline')
const navLinks = document.querySelector('.sidebar')
let menuOpen = false;

menuIcon.addEventListener('click', () => {
        menuOpen = !menuOpen
        navLinks.classList.toggle("active");

        if (menuOpen) {
            menuIcon.innerHTML = '<i class="fa fa-times"></i>'
        }else{
            menuIcon.innerHTML = '<i class="fa fa-bars"></i>'
        }
})


