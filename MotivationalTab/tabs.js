const panels = document.querySelectorAll('.panel');

function toggleOpen() {
    console.log('Hello');
    this.classList.toggle('open');
}

function toggleActive(e) {
    console.log(e.propertyName);
    if (e.propertyName.includes('flex')) {
        this.classList.toggle('open-active');
    }
}

(function () {
    var r = Math.round(Math.random()) + 9;
    console.log('r is ', r);
    document.getElementById('panels' + r).style.display = 'flex';
    document.getElementById('panels' + r).style.overflow = 'hidden';
    document.getElementById('panels' + r).style.minHeight = '100vh';
})();

panels.forEach(panel => panel.addEventListener('click', toggleOpen));
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));
