const ind = {
    nome: "Joao",
    sobrenome: "José",
    idade: 19,

    fala(nome2) {
        console.log(
            `Eu sou ${this.nome} ${this.sobrenome} e tenho ${this.idade} anos. ${nome2}`
        );
    },
};
ind.fala("alexandre");

/* const cidade = {
    nome: "fortaleza",
    habitantes: 50,
    hora: 21,

    horario() {
        console.log(`o horário é ${this.hora}`);
    },
};
cidade.horario(); */