const panels = document.querySelectorAll('.panel');

function toggleOpen() {
    this.classList.toggle('open');
}

function toggleActive(e) {
    if (e.propertyName.includes('flex')) {
        this.classList.toggle('open-active');
    }
}

(function () {
    var r = Math.round(Math.random()) + 2;
    document.getElementById('panels' + r).style.display = 'flex';
    document.getElementById('panels' + r).style.overflow = 'hidden';
    document.getElementById('panels' + r).style.minHeight = '100vh';
})();

panels.forEach(panel => panel.addEventListener('click', toggleOpen));
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));
