/*
and
or 
 */ ////////////////////////////////////////////////////////////
function saudac(x = "samuel", y = "olá") {
    return `${x} fala a você: ${y}`; //condicional sem if/else/else if
}

const exec = "teste";

console.log(exec && saudac("jorge", "foda"));
///////////////////////////////////////////////////////////////////////
const corUsr = null;
const corPadr = corUsr || "azul";
console.log(corPadr);