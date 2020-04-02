const gallery = document.querySelector('.photo__gallery');
const grid = document.getElementById('grid__gallery');

function toggleMargin() {
    grid.style.transition = 'grid-gap 1s';
    grid.style.gridGap = '30px';
}

function resetMargin() {
    grid.style.transition = 'grid-gap 1s';
    grid.style.gridGap = '10px';
}


gallery.addEventListener('mouseenter', toggleMargin);
gallery.addEventListener('mouseleave', resetMargin);
