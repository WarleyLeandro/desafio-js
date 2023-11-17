const somatorio = (num) => {
  if (num <= 0) {
    console.log("Insira um número inteiro positivo!");
    return;
  }
  let soma = 0;
  for (let i = 1; i < num; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      soma += i;
    }
  }
  console.log("O somatório dos números divisíveis por 3 ou 5 é: ", soma);
};

somatorio(-1);
somatorio(6);
somatorio(10);
somatorio(11);
