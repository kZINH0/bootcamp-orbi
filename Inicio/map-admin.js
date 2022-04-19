//Função que utiliza map para armazenar e retornar os usuarios com valor Admin

function getAdmins(map) {
    let admins = [];
    for ([key, value] of map) {
        if (value === 'Admin') {
            admins.push(key)
        }
    }
    return admins;
}

const usuarios = new map();

usuarios.set('Renan', 'Admin')
usuarios.set('Lucas', 'RH')
usuarios.set('Cassio', 'Helpdesk')
usuarios.set('Vinicius', 'IT')
usuarios.set('Andre', 'NOC')
usuarios.set('Bogo', 'Ex')
usuarios.set('Cesar', 'New')
usuarios.set('Rene', 'Admin')
usuarios.set('Francine', 'Manager')

console.log(getAdmins(usuarios));