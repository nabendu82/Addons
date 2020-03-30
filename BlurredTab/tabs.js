const inputs = document.querySelectorAll('.controls input');

function handleUpdate() {
    console.log("this.dataset.sizing ->",this.dataset.sizing);
    console.log("this.name ->",this.name);
    console.log("this.value ->",this.value);
    const suffix = this.dataset.sizing;
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));