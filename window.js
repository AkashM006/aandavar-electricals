const accordionCheckBoxes = document.querySelectorAll('.accordion-checkbox');
let currentWidth = getMaxWidth();
const TABLETMAXWIDTH = 768;

function getMaxWidth() {
    return (window.innerWidth > 0) ? window.innerWidth : screen.width;
}

window.addEventListener('resize', function(event) {
    let newWidth = getMaxWidth()
    if(currentWidth <= TABLETMAXWIDTH && newWidth > TABLETMAXWIDTH) {
        for(let checkbox of accordionCheckBoxes) checkbox.checked = false;
        
        navLinksContainer.classList.remove("active");

    }
    currentWidth = newWidth;
});