# Somatório de Números Divisíveis por 3 ou 5

Este projeto consiste em uma função simples em JavaScript que calcula o somatório dos números divisíveis por 3 ou 5 até um determinado número inteiro positivo.

Exemplos:

- Caso sua função receba o inteiro 10, ela deve retornar 23, resultante do somatório dos números 3, 5, 6 e
  9 que são menores que 10.
- Caso sua função receba o inteiro 11, ela deve retornar 33, resultante do somatório dos números 3, 5, 6, 9
  e 10 que são menores que 11.

## Como Rodar o Projeto

1. Certifique-se de ter o [Node.js](https://nodejs.org/) instalado em seu sistema.

2. Clone o repositório para o seu ambiente local:

   ```bash
   git clone https://github.com/WarleyLeandro/desafio-js.git

   ```

3. Navegue até o diretório do projeto:

   ```bash
   cd desafio-js

   ```

4. Execute a função em seu terminal ou editor de código preferido - Recomendo VScode

   ```bash
   node main.js
   ```

## Como Testar

Você pode testar a função somarorio chamando-a com diferentes valores de entrada. No arquivo main.js, você encontrará chamadas de exemplo:

somarorio(-1);
somarorio(6);
somarorio(10);
somarorio(11);

Observe que a primeira chamada apresenta uma regra inválida, pois o valor passado como parâmetro, "-1", não se enquadra como um número inteiro positivo. Portanto, a função deve lidar com essa exceção e fornecer um retorno para o usuário.

### Funções e seus retornos:

somarorio(-1) -> Insira um número inteiro positivo!
somarorio(6) -> O somatório dos números divisíveis por 3 ou 5 é: 8
somarorio(10) -> O somatório dos números divisíveis por 3 ou 5 é: 23
somarorio(11) -> O somatório dos números divisíveis por 3 ou 5 é: 33

### Sua vez!

Agora execute a função com os valores de seu interesse e tire a prova real!
