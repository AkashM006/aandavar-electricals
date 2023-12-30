const navLinks = document.querySelectorAll('.nav__link-item');
const navLinksContainer = document.getElementById("nav-links-container");
const menuIcon = document.getElementById("nav-menu");

function getMaxWidth() {
    return (window.innerWidth > 0) ? window.innerWidth : screen.width;
}

menuIcon.addEventListener("click", function(event) {
    navLinksContainer.classList.toggle("active");
});

for(let navLink of navLinks) {
    navLink.addEventListener('click', function(event) {
        if(getMaxWidth() > 768) return;

        navLinksContainer.classList.toggle('active');
    });
}

