function darkMode() {
    mudarClasses();
    mudarTexto();
}

function mudarClasses() {
    darkButtom.classList.toggle('dark-mode');
    body.classList.toggle('dark-mode');
    footer.classList.toggle('dark-mode');
    for (let i = 0; i < quad.length; i++) {
        quad[i].classList.toggle('dark-mode');
    }
}

function mudarTexto() {
    const lightMode = 'Light Mode'
    const darkMode = 'Dark Mode'

    if (darkButtom.classList.contains('dark-mode')) {
        darkButtom.innerHTML = lightMode;
        return;
    }
    
    darkButtom.innerHTML = darkMode;
}

const darkButtom = document.getElementById('mode-selector');
const body = document.getElementsByTagName('body')[0];
const footer = document.getElementsByTagName('footer')[0];
const quad = document.querySelectorAll('.quad');

darkButtom.addEventListener('click', darkMode);