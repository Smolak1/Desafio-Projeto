let nomeDoHeroi = "Junin Matador de porco"
let xpDoHeroi = 100000000
let classe
if (xpDoHeroi < 1000) classe = "Ferro"
    if  (xpDoHeroi >= 1000 && xpDoHeroi <= 2000) classe = "Bronze"
            if  (xpDoHeroi > 2000 && xpDoHeroi <= 5000) classe = "Prata"
                if (xpDoHeroi >= 6000 && xpDoHeroi <= 7000) classe = "Ouro"
                     if (xpDoHeroi >= 7000 && xpDoHeroi <= 8000) classe = "Platina"
                         if (xpDoHeroi >= 8000 && xpDoHeroi <= 9000) classe = "Ascendente"
                             if (xpDoHeroi >= 9000 && xpDoHeroi <= 10000) classe = "Imortal"
                                if (xpDoHeroi > 10000) classe = "Radiante"



                            console.log(classe)