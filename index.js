let nomeDoHeroi = "Junin Matador de porco";
let xpDoHeroi = 0;
let classe;

if (xpDoHeroi < 1001) {
    classe = "Ferro";
} else if (xpDoHeroi <= 2000) {
    classe = "Bronze";
} else if (xpDoHeroi <= 5000) { // no código passado pelo felipe, 5500 FICARIA COMO NULL, JA QUE NÃO FOI ESPECIFICADO.
    classe = "Prata";
} else if (xpDoHeroi <= 7000) {
    classe = "Ouro";
} else if (xpDoHeroi <= 8000) {
    classe = "Platina";
} else if (xpDoHeroi <= 9000) {
    classe = "Ascendente";
} else if (xpDoHeroi <= 10000) {
    classe = "Imortal";
} else {
    classe = "Radiante";
}

console.log(classe);
