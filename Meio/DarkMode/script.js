function darkMode() {
    mudarClasses();
    mudarTexto();
}

function mudarClasses() {
    darkButtom.classList.toggle('dark-mode');
    h1.classList.toggle('dark-mode');
    body.classList.toggle('dark-mode');
    footer.classList.toggle('dark-mode');
}

function mudarTexto() {
    const lightMode = 'Light Mode'
    const darkMode = 'Dark Mode'

    if (darkButtom.classList.contains('dark-mode')) {
        darkButtom.innerHTML = lightMode;
        h1.innerHTML = darkMode + " ON";
        return;
    }
    
    darkButtom.innerHTML = darkMode;
    h1.innerHTML = lightMode + " ON";
}

const darkButtom = document.getElementById('mode-selector');
const h1 = document.getElementById('page-title');
const body = document.getElementsByTagName('body')[0];
const footer = document.getElementsByTagName('footer')[0];

darkButtom.addEventListener('click', darkMode);