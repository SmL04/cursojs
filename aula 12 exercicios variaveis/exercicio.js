let varA = "A"; // B
let varB = "B"; // C
let varC = "C"; // A

const varATemp = varA;
varA = varB;
varB = varC;
varC = varATemp;
/*
 *OUTRA FORMA DE RESOLVER SERIA:
 [varA, varB, varC] = [varA, varB, varC]
 */

console.log(varA, varB, varC);