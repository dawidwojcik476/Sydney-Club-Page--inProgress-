const menuBtn = document.querySelector('.menuBtn');
const mainMenu = document.querySelector('.mainMenu');
const navBar = document.querySelector('.navbar');
const logoImg = document.querySelector('.logo');
const contact = document.querySelector('.contact');
const headerBgc = document.querySelector('.headerbgc');
let menuOpen = false;


const menu = () => {
    if (!menuOpen) {
        menuBtn.classList.add('open');
        mainMenu.classList.add('open');
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        mainMenu.classList.remove('open');
        menuOpen = false;
    }
}

const stickymenu = () => {
    if (window.scrollY > (500)) {
        navBar.classList.add("sticky");
        logoImg.classList.add("sticky");
        contact.classList.add("sticky");
    } else {
        navBar.classList.remove("sticky");
        logoImg.classList.remove("sticky");
        contact.classList.remove("sticky");
    }
}

const parallax = (e) => {
    let w = window.innerWidth / 2;
    let h = window.innerHeight / 2;
    let mouseX = e.clientX;
    let mouseY = e.clinetY;
    let depth1 = `${50-(mouseX-w)*0.01}% ${50-(mouseY-h)*0.01}%`;
    let depth2 = `${50-(mouseX-w)*0.02}% ${50-(mouseY-h)*0.02}%`;
    let depth3 = `${50-(mouseX-w)*0.06}% ${50-(mouseY-h)*0.06}%`;
    let x = `${depth3}, ${depth2}, ${depth1}`;
    headerBgc.style.backgroundPosition = x;
}

headerBgc.addEventListener('mousemove', parallax)
menuBtn.addEventListener('click', menu);
window.addEventListener("scroll", stickymenu);