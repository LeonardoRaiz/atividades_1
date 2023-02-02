/*
Faça um programa que receba um número positivo e
maior que zero, calcule e mostre:
a) O número digitado ao quadrado;
b) O número digitado ao cubo;
c) A raiz quadrada do número digitado;
d) A raiz cúbica de número digitado.
*/

//Inicio
namespace exercicio_11 {
  //Entrada de dados
  //let numero: number;
  const numero = 10;

  let numQ: number;

  numQ = numero * numero;
  numQ = Math.pow(numero, 2);
  numQ = numero ** 2;

  let numC: number;

  numC = numero * numero * numero;
  numC = Math.pow(numero, 3);
  numC = numero ** 3;

  let raizQ: number;
  raizQ = Math.sqrt(numero);

  let raizC: number;

  raizC = Math.cbrt(numero);

  console.log(
    `O número elevado ao quadrado: ${numQ} \n O número elevado ao cubo: ${numC} \n A raiz quadrada do número: ${raizQ} \n A raiz cubica do número: ${raizC}`
  );
}
