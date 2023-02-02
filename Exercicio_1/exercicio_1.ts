//Comentar
/*
Faça um programa que receba quatro números inteiros,
calcule e mostre a soma desses números.
*/

//Primeiro bloco
//Inicio
namespace exercicio_1 
{
  //Entrada dos dados
  //var --- let --- const
  let numero1, numero2, numero3, numero4: number;

  numero1 = 6;
  numero2 = 7;
  numero3 = 16;
  numero4 = 34;

  let resultado: number;

  //Processar os dados
  resultado = numero1 + numero2 + numero3 + numero4;

  //Saida
  console.log("O resultado da soma é: " 
        + resultado + "\n");
  //Ou pode-se escrever
  console.log(`O resultado da soma é: ${resultado}`);
  
}
