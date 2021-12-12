/* const pessoa1 = {
    nome: "Luiz",
    sobrenome: "Miranda",
    idade: 25,
};

console.log(pessoa1.nome); */

function criaPessoa(nome, sobrenome, idade) {
    return {
        nome: nome,
        sobrenome: sobrenome, //posso deixar sem valor, que ele atribui
        idade: idade, //ao proprio valor, que é o que quero
    };
}
const pessoa1 = criaPessoa("Luiz", "otavio", "25");
console.log(pessoa1.nome);