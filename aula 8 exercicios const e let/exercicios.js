/*
JJJJJJ AAAAA BBBBB tem 30 anos, pesa 84 kg
tem 1.8 de altura e seu IMC é de 25.925925925925924
Luíz Otávio nasceu em 1980
*/
const nome = "Luíz Otávio";
const sobrenome = "Miranda";
const idade = 30;
const peso = 84;
const alturaEmM = 1.8;
let imc; //peso/ (altura * altura)
let anoNascimento;
imc = peso / (alturaEmM * alturaEmM);
anoNascimento = 2021 - idade;
console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg`);
console.log(`tem ${alturaEmM} de altura e seu IMC é de ${imc}`);
console.log(`${nome} nasceu em ${anoNascimento}.`);