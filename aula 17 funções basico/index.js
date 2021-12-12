function soma(x = 1, y = 1) {
    const resultado = x + y; //Igualei a 1 para caso n seja passado valor
    return resultado; //Ele assumir o valor de 1
}
console.log(soma(2, 2));

function saudacao(nome) {
    return `Bom dia ${nome}!`;
}
const variavel = saudacao("Luiz");
console.log(variavel);

const raiz = (n) => n ** 0.5; //Arrow function
console.log(raiz(9));