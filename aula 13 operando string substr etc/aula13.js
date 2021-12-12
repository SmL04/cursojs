//                          1234567
let umaString = "um texto";

umaString = "teste";

console.log(umaString[4]);
//outra forma: console.log(umaString.charAt(4));
console.log(umaString.concat(" em um lindo dia"));
console.log(`${umaString} em um lindo dia`);
console.log(umaString.indexOf("um"));
console.log(umaString.indexOf("um", 3));

let data = "202106"; // 06/2021

let ano = data.substr(0, 4);
let mes = data.substr(4, 2);
console.log(`A data é: ${mes}/${ano}`);
console.log("Alex: " + data.substr(4, 2) + "/" + data.substr(0, 4));

/* let text = "Mozilla";
console.log(text.substring(2, 5)); // retorna "zil"
console.log(text.substr(2, 3)); // retorna "zil" */