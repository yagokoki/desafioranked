/*# 2️⃣ Calculadora de partidas Rankeadas
**O Que deve ser utilizado**

- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões
- Funções

## Objetivo:

Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)

Se vitórias for menor do que 10 = Ferro
Se vitórias for entre 11 e 20 = Bronze
Se vitórias for entre 21 e 50 = Prata
Se vitórias for entre 51 e 80 = Ouro
Se vitórias for entre 81 e 90 = Diamante
Se vitórias for entre 91 e 100= Lendário
Se vitórias for maior ou igual a 101 = Imortal

## Saída

Ao final deve se exibir uma mensagem:
"O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nivel}**"*/
function calculadora(vitorias, derrotas){
    resultado = vitorias - derrotas;
    return resultado;
}
function ranked(saldoVitorias){
    if (saldoVitorias <= 10){
        return "ferro";
    }
    else if (saldoVitorias > 10 && saldoVitorias < 21){
        return "bronze";
    }
    else if (saldoVitorias > 20 && saldoVitorias < 51){
        return "prata";
    }
    else if (saldoVitorias > 50 && saldoVitorias < 81){
        return "ouro";
    }
    else if (saldoVitorias > 80 && saldoVitorias < 91){
        return "diamante";
    }
    else if(saldoVitorias > 90 && saldoVitorias < 101){
        return "lendário";
    }
    else if(saldoVitorias > 100){
        return "Imortal";
    }
    else {
        return "Erro";
    }
}

let vitorias = 200;
let derrotas = 140;

let saldoVitorias = calculadora(vitorias, derrotas);
let nivel = ranked(saldoVitorias);

console.log("o Herói tem de saldo de " + saldoVitorias + " e está no nível " + nivel);