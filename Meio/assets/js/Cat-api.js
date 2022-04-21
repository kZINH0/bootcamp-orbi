// Script para troca de fotos de gatos com uma api

const BASE_URL = 'https://thatcopy.pw/catapi/rest/';
const catBtn = document.getElementById('change-cat');

async function getCats() {
    try {
        const data = await fetch(BASE_URL);
        const json = await data.json();

        return json.webpurl;
    }
    catch (e) {
        console.log(e.message);
    }
}

async function loadImg() {
    const catImg = document.getElementById('cats');

    catImg.src = await getCats();
}

catBtn.addEventListener('click', loadImg);

loadImg();