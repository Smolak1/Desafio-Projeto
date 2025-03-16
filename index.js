let nomeDoHeroi = "Junin Matador de porco"
let xpDoHeroi = 0
let classe
if (xpDoHeroi < 1000) classe = "Ferro"
    if else (xpDoHeroi >= 1000 && xpDoHeroi <= 2000) classe = "Bronze"
        if else (xpDoHeroi >= 1000 && xpDoHeroi <= 2000) classe = "Prata"
            if else (xpDoHeroi > 2000 && xpDoHeroi <= 5000) classe = "Ouro"
                if else (xpDoHeroi >= 6000 && xpDoHeroi <= 7000) classe = "Prata"
                     if else (xpDoHeroi >= 7000 && xpDoHeroi <= 8000) classe = "Prata"
                         if else (xpDoHeroi >= 8000 && xpDoHeroi <= 9000) classe = "Prata"
                            if else (xpDoHeroi >= 9000 && xpDoHeroi <= 10000) classe = "Prata"
                                if else (xpDoHeroi > 10000) xpDoHeroi = "Radiante"



                            console.log(classe)