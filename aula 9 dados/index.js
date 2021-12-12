// Os dados primitivos são -> String, number, undefined, null, boolean, symbol
const nome = "luiz"; //String        se eu quiser escapar um caractere dentro de uma string: \" aa"\
const num1 = 10; //Number
const num2 = 10.52; //Number
let nomeAluno; //undefined -> não aponta para local nenhum na memória (js faz)
const sobrenomeAluno = null; // não aponta para local nenhum na memória (dev faz)
const aprovado = false; // Booleano -> true, false (lógico)

console.log(typeof nome, nome); //verificará o tipo de dado, e logo em seguida exibiráo valor