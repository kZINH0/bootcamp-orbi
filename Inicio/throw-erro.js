// Função criada para lançar um erro caso a validação falhe.

function thowErro(arr, num) {
    try {
        if (!arr && !num) throw new ReferenceError("Parametros vazios!");

        if (typeof arr !== 'object') throw new TypeError("Tipo de array invalido!");

        if (typeof num !== 'number') throw new TypeError("Não é um número!");

        if (arr.lenght !== num) throw new RangeError("Tamanho inválido");

        return arr;
    }
    catch (e) {
        if (e instanceof ReferenceError) {
            console.log("Este erro é um erro de referencia");
            throw e;
        } else if (e instanceof TypeError) {
            console.log("Este erro é um erro de tipo");
            throw e;
        } else if (e instanceof RangeError) {
            console.log("Este erro é um erro de tamanho");
            throw e;
        } else {
            console.log("Erro não esperado: " + e);
        }
    }
}
