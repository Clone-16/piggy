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