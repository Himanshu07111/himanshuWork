// Navbar
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    navbar.classList.remove('active');
}
// Dark Mode
let darkmode = document.querySelector('#darkmode');

darkmode.onclick = () => {
    if (darkmode.classList.contains('bx-moon')) {
        darkmode.classList.replace('bx-moon', 'bx-sun');
        document.body.classList.add('active');
    } else {
        darkmode.classList.replace('bx-sun', 'bx-moon');
        document.body.classList.remove('active');
    }
}


// Function to open the popup
function openPopup() {
    document.getElementById("overlay").style.display = "flex";
}

// Function to close the popup
function closePopup() {
    document.getElementById("overlay").style.display = "none";
}

// Add click event listener to the "Order Now" button
document.getElementById("orderButton").addEventListener("click", openPopup);


// Scroll Reveal
const sr = ScrollReveal({
    origin: 'bottom',
    distance: '40px',
    duration: 1000,
    reset: true
});


sr.reveal(`.home-text, .home-img,
              .box, .s-box,
              .btn, .connect-text,
              .contact-box`, {
    interval: 200
})