const maca = {
    value: 2,
}

const laranja = {
    value: 3,
}

function MapCom (arr) {
    return arr.map(function(item){
        return item * this.value;
    }, thisArg);
}

