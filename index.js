// Exercicio 1
let indice = 13;
let soma = 0;

for (let i = 0; i < indice; i++) {
  soma += i;
}
console.log(soma);

// Exercicio 2
const fibonacci = (n) => {
  if (n < 0) return false;
  if (n === 0) return 0;
  if (n === 1 || n === 2) return 1;

  let a = 1;
  let b = 1;

  for (let i = 3; i <= n; i++) {
    let c = a + b;
    a = b;
    b = c;
  }

  return b;
};

const verificarFibonnaci = (number) => {
  let encontrado = false;

  for (let i = 0; i <= number; i++) {
    if (fibonacci(i) === number) {
      encontrado = true;
      break;
    }
  }

  if (encontrado) {
    console.log(`${number} pertence à sequência de Fibonacci`);
  } else {
    console.log(`${number} não pertence à sequência de Fibonacci`);
  }
};
verificarFibonnaci(15);

// Exercicio 3
const faturamento = [
  {
    dia: 1,
    valor: 22174.1664,
  },
  {
    dia: 2,
    valor: 24537.6698,
  },
  {
    dia: 3,
    valor: 26139.6134,
  },
  {
    dia: 4,
    valor: 0.0,
  },
  {
    dia: 5,
    valor: 0.0,
  },
  {
    dia: 6,
    valor: 26742.6612,
  },
  {
    dia: 7,
    valor: 0.0,
  },
  {
    dia: 8,
    valor: 42889.2258,
  },
  {
    dia: 9,
    valor: 46251.174,
  },
  {
    dia: 10,
    valor: 11191.4722,
  },
  {
    dia: 11,
    valor: 0.0,
  },
  {
    dia: 12,
    valor: 0.0,
  },
  {
    dia: 13,
    valor: 3847.4823,
  },
  {
    dia: 14,
    valor: 373.7838,
  },
  {
    dia: 15,
    valor: 2659.7563,
  },
  {
    dia: 16,
    valor: 48924.2448,
  },
  {
    dia: 17,
    valor: 18419.2614,
  },
  {
    dia: 18,
    valor: 0.0,
  },
  {
    dia: 19,
    valor: 0.0,
  },
  {
    dia: 20,
    valor: 35240.1826,
  },
  {
    dia: 21,
    valor: 43829.1667,
  },
  {
    dia: 22,
    valor: 18235.6852,
  },
  {
    dia: 23,
    valor: 4355.0662,
  },
  {
    dia: 24,
    valor: 13327.1025,
  },
  {
    dia: 25,
    valor: 0.0,
  },
  {
    dia: 26,
    valor: 0.0,
  },
  {
    dia: 27,
    valor: 25681.8318,
  },
  {
    dia: 28,
    valor: 1718.1221,
  },
  {
    dia: 29,
    valor: 13220.495,
  },
  {
    dia: 30,
    valor: 8414.61,
  },
];

let diaMenorValor = 0;
let menorValor = 9999999999999;

let diaMaiorValor = 0;
let maiorValor = 0;

let diasValorMaiorMensal = 0;
let quatidadeDiasMensal = 0;
let somaMensal = 0;

faturamento.forEach((dia) => {
  if (dia.valor > 0.0) {
    quatidadeDiasMensal++;
    somaMensal += dia.valor;

    if (dia.valor < menorValor) {
      diaMenorValor = dia.dia;
      menorValor = dia.valor;
    } else if (dia.valor > maiorValor) {
      diaMaiorValor = dia.dia;
      maiorValor = dia.valor;
    }
  }
});

let mediaMensal = somaMensal / quatidadeDiasMensal;
let numDiasValorSupMedia = 0;

faturamento.forEach((dia) => {
  if (dia.valor > mediaMensal) {
    numDiasValorSupMedia++;
  }
});

console.log(`Dia com o menor faturamento do mês: ${diaMenorValor} - R$${menorValor}
Dia com o maior faturamento do mês: ${diaMaiorValor} - R$${maiorValor}
Media do faturamento mensal: ${mediaMensal}
Número de dias que o valor diário foi maior que a média mensal: ${numDiasValorSupMedia} `);

//Exercicio 4
const faturamentoDistribuidora = {
  SP: 67836.43,
  RJ: 36678.66,
  MG: 29229.88,
  ES: 27165.48,
  Outros: 19849.53,
};

let totalFaturamentoDistribuidora = 0;

for (let estado in faturamentoDistribuidora) {
  totalFaturamentoDistribuidora += faturamentoDistribuidora[estado];
}

for (let estado in faturamentoDistribuidora) {
  let percentual =
    (faturamentoDistribuidora[estado] / totalFaturamentoDistribuidora) * 100;
  console.log(`${estado} - ${percentual.toFixed(2)}%`);
}

//Exercicio 5
function inverterString(str) {
  let palavraInvertida = "";
  for (let i = str.length - 1; i >= 0; i--) {
    palavraInvertida += str[i];
  }
  return palavraInvertida;
}

console.log(inverterString("Vitor Silva Santos"));
