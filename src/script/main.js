const button = document.querySelector('button');
const dots = document.querySelectorAll('.dot');

button.addEventListener('click', () => {
    button.classList.toggle('clicked');
    dots.forEach(dot => {
        dot.classList.toggle('dance')
    })
});