var EMes;
(function (EMes) {
    EMes["JAN"] = "Janeiro";
    EMes["FEV"] = "Fevereiro";
    EMes["MAR"] = "Mar\u00E7o";
})(EMes || (EMes = {}));
// console.log(EMes);
// console.log(EMes.JAN);
var pessoa = {
    nome: "Dener",
    mesAniversario: EMes.MAR,
};
if (pessoa.mesAniversario === EMes.MAR) {
    console.log(pessoa);
}
