const pessoa = {
    cliente: "Bruno",
    idade: 28,
    compras: [
        { produto: "cadeira", preco: "R$ 100" },
        { produto: "pc", preco: "R$ 200" },
        { produto: "jogo", preco: "R$ 300" },
    ],
};

const total = pessoa.compras
    .map((item) => {
        return Number(item.preco.replace("R$", ""));
    })
    .reduce((a, b) => {
        return a + b;
    });

console.log("--------------");
console.log(total);