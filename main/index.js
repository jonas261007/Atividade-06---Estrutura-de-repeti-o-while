// Questão 1: Diferenças entre "for" e "while" são:
// 1. Inicialização: "for" inicializa a variável de controle no próprio comando, enquanto "while" não.
// 2. Condição de Parada: "for" verifica a condição no início de cada iteração e "while" também, mas é mais flexível.
// 3. Incremento/Decremento: "for" incrementa ou decrementa no próprio comando, "while" manualmente dentro do corpo.
// 4. Uso: "for" é ideal para loops com iterações conhecidas, "while" para condições que podem mudar.

// Questão 2: Circunstâncias para usar "for" e "while":
// - "for" é usado quando o número de iterações é conhecido antes do início do loop.
// - "while" é usado quando o número de iterações depende de uma condição que pode mudar durante a execução do loop.

// Questão 3: Código do slide de número 9
let i = 0;
while (i < 10) {
    console.log(i);
    i++;
}

// Questão 4: Código do slide de número 16
let j = 1;
while (j <= 100) {
    if (j % 2 === 0) {
        console.log(j);
    }
    j++;
}

// Questão 5: Código do slide de número 26
let k = 1;
while (k <= 10) {
    console.log(`2 x ${k} = ${2 * k}`);
    k++;
}

// Questão 6: Exibir números de 1 a 10 em ordem crescente utilizando o while
let a = 1;
while (a <= 10) {
    console.log(a);
    a++;
}

// Questão 7: Exibir números de 10 a 1 em ordem decrescente utilizando o while
let b = 10;
while (b >= 1) {
    console.log(b);
    b--;
}

// Questão 8: Calcular a soma dos números de 1 a 100 utilizando o while
let soma = 0;
let c = 1;
while (c <= 100) {
    soma += c;
    c++;
}
console.log(`Soma dos números de 1 a 100: ${soma}`);

// Questão 9: Calcular o produto dos números de 1 a 5 utilizando o while
let produto = 1;
let d = 1;
while (d <= 5) {
    produto *= d;
    d++;
}
console.log(`Produto dos números de 1 a 5: ${produto}`);

// Questão 10: Exibir a tabuada do 9 utilizando o while
let e = 1;
while (e <= 10) {
    console.log(`9 x ${e} = ${9 * e}`);
    e++;
}

// Questão 11: Ler sequência de números inteiros e exibir maior e menor valor até o usuário digitar 0
let maior, menor;
let primeiroNumero = true;
let numero;

while (true) {
    numero = parseInt(prompt("Digite um número (0 para parar):") || "0");
    if (numero === 0) break;

    if (primeiroNumero) {
        maior = menor = numero;
        primeiroNumero = false;
    } else {
        if (numero > maior) maior = numero;
        if (numero < menor) menor = numero;
    }
}

console.log(`Maior número: ${maior}`);
console.log(`Menor número: ${menor}`);

// Questão 12: Ler sequência de números inteiros e exibir média dos números até o usuário digitar -1
let somaTotal = 0;
let quantidadeNumeros = 0;
let num;

while (true) {
    num = parseInt(prompt("Digite um número (-1 para parar):") || "-1");
    if (num === -1) break;

    somaTotal += num;
    quantidadeNumeros++;
}

let media = quantidadeNumeros > 0 ? somaTotal / quantidadeNumeros : 0;
console.log(`Média dos números digitados: ${media}`);

// Questão 13: Ler um número inteiro e exibir a soma dos seus dígitos elevados ao cubo
let numeroCubo = parseInt(prompt("Digite um número inteiro:") || "0");
let somaCubos = 0;

while (numeroCubo !== 0) {
    let digito = numeroCubo % 10;
    somaCubos += Math.pow(digito, 3);
    numeroCubo = Math.floor(numeroCubo / 10);
}

console.log(`Soma dos dígitos elevados ao cubo: ${somaCubos}`);

// Questão 14: Exibir os números ímpares de 1 a 100 utilizando o while
let f = 1;
while (f <= 100) {
    if (f % 2 !== 0) {
        console.log(f);
    }
    f++;
}

// Questão 15: Exibir todos os múltiplos de 3 no intervalo de 1 a 50 utilizando o while
let g = 1;
while (g <= 50) {
    if (g % 3 === 0) {
        console.log(g);
    }
    g++;
}

// Questão 16: Ler 5 notas de alunos e exibir quantos foram aprovados (nota maior ou igual a 7)
let h = 0;
let notasAprovados = 0;

while (h < 5) {
    let notaAluno = parseFloat(prompt(`Digite a nota do aluno ${h + 1}:`) || "0");
    if (notaAluno >= 7) {
        notasAprovados++;
    }
    h++;
}

console.log(`Número de alunos aprovados: ${notasAprovados}`);

// Questão 17: Quantos números pares foram digitados antes do primeiro número ímpar
let paresAntesImpar = 0;

while (true) {
    let numSeq = parseInt(prompt("Digite um número (0 para parar):") || "0");
    if (numSeq === 0) break;

    if (numSeq % 2 !== 0) break;
    paresAntesImpar++;
}

console.log(`Números pares digitados antes do primeiro ímpar: ${paresAntesImpar}`);

// Questão 18: Exibir quantos números pares e ímpares foram digitados até o usuário digitar 0
let pares = 0;
let impares = 0;

while (true) {
    let numSeq2 = parseInt(prompt("Digite um número (0 para parar):") || "0");
    if (numSeq2 === 0) break;

    if (numSeq2 % 2 === 0) {
        pares++;
    } else {
        impares++;
    }
}

console.log(`Números pares digitados: ${pares}`);
console.log(`Números ímpares digitados: ${impares}`);

// Questão 19: Exibir quantos números são divisíveis por 2, 3 e 5 até o usuário digitar 0
let divisiveisPor2 = 0;
let divisiveisPor3 = 0;
let divisiveisPor5 = 0;

while (true) {
    let numSeq3 = parseInt(prompt("Digite um número (0 para parar):") || "0");
    if (numSeq3 === 0) break;

    if (numSeq3 % 2 === 0) divisiveisPor2++;
    if (numSeq3 % 3 === 0) divisiveisPor3++;
    if (numSeq3 % 5 === 0) divisiveisPor5++;
}

console.log(`Números divisíveis por 2: ${divisiveisPor2}`);
console.log(`Números divisíveis por 3: ${divisiveisPor3}`);
console.log(`Números divisíveis por 5: ${divisiveisPor5}`);

// Questão 20: Exibir a média dos números divisíveis por 3 até o usuário digitar 0
let somaDiv3 = 0;
let qtdeDiv3 = 0;

while (true) {
    let numSeq4 = parseInt(prompt("Digite um número (0 para parar):") || "0");
    if (numSeq4 === 0) break;

    if (numSeq4 % 3 === 0) {
        somaDiv3 += numSeq4;
        qtdeDiv3++;
    }
}

let mediaDiv3 = qtdeDiv3 > 0 ? somaDiv3 / qtdeDiv3 : 0;
console.log(`Média dos números divisíveis por 3: ${mediaDiv3}`);

// Questão 21: Exibir quantos números possuem mais de três dígitos até o usuário digitar 0
let maisDeTresDigitos = 0;

while (true) {
    let numSeq5 = parseInt(prompt("Digite um número (0 para parar):") || "0");
    if (numSeq5 === 0) break;

    if (Math.abs(numSeq5) > 999) {
        maisDeTresDigitos++;
    }
}

console.log(`Números com mais de três dígitos: ${maisDeTresDigitos}`);

// Questão 22: Exibir a média dos números entre 50 e 100 até o usuário digitar 0
let somaEntre50e100 = 0;
let qtdeEntre50e100 = 0;

while (true) {
    let numSeq6 = parseInt(prompt("Digite um número (0 para parar):") || "0");
    if (numSeq6 === 0) break;

    if (numSeq6 >= 50 && numSeq6 <= 100) {
        somaEntre50e100 += numSeq6;
        qtdeEntre50e100++;
    }
}

let mediaEntre50e100 = qtdeEntre50e100 > 0 ? somaEntre50e100 / qtdeEntre50e100 : 0;
console.log(`Média dos números entre 50 e 100: ${mediaEntre50e100}`);

// Questão 23: Exibir o menor valor digitado que seja positivo e ímpar até o usuário digitar 0
let menorPositivoImpar;
let primeiroNumPositivoImpar = true;

while (true) {
    let numSeq7 = parseInt(prompt("Digite um número (0 para parar):") || "0");
    if (numSeq7 === 0) break;

    if (numSeq7 > 0 && numSeq7 % 2 !== 0) {
        if (primeiroNumPositivoImpar) {
            menorPositivoImpar = numSeq7;
            primeiroNumPositivoImpar = false;
        } else {
            if (numSeq7 < menorPositivoImpar) {
                menorPositivoImpar = numSeq7;
            }
        }
    }
}

console.log(`Menor valor positivo e ímpar: ${menorPositivoImpar}`);

// Questão 24: Exibir quantos números são pares e quantos são ímpares entre o primeiro e o último número digitado até o usuário digitar 0
let seqNumeros = [];

while (true) {
    let numSeq8 = parseInt(prompt("Digite um número (0 para parar):") || "0");
    if (numSeq8 === 0) break;

    seqNumeros.push(numSeq8);
}

let paresEntrePrimeiroEUltimo = 0;
let imparesEntrePrimeiroEUltimo = 0;

if (seqNumeros.length > 1) {
    let primeiro = seqNumeros[0];
    let ultimo = seqNumeros[seqNumeros.length - 1];

    for (let num of seqNumeros) {
        if (num >= primeiro && num <= ultimo) {
            if (num % 2 === 0) {
                paresEntrePrimeiroEUltimo++;
            } else {
                imparesEntrePrimeiroEUltimo++;
            }
        }
    }
}

console.log(`Números pares entre o primeiro e o último digitado: ${paresEntrePrimeiroEUltimo}`);
console.log(`Números ímpares entre o primeiro e o último digitado: ${imparesEntrePrimeiroEUltimo}`);
