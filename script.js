/*

1. Insira dois números:

  - Soma de dois números
  - Subtração de dois números
  - Multiplicação de dois números
  - Divisão de dois números
  - Resto de dois números

2. Verifique se a soma de dois números é par

3. Verifique se os dois números inseridos são iguais

*/

let firstNumber = prompt('Digite o primeiro número')
let secondNumber = prompt('Digite o segundo número')

firstNumber = Number(firstNumber)
secondNumber = Number(secondNumber)

const sum = firstNumber + secondNumber
const sub = firstNumber - secondNumber
const mult = firstNumber * secondNumber
const div = firstNumber / secondNumber
const restDiv = firstNumber % secondNumber

alert(`A soma de dois números é: ${sum}`)
alert(`A subtração de dois números é: ${sub}`)
alert(`A multiplicação de dois números é: ${mult}`)
alert(`A divisão de dois números é: ${div.toFixed(0)}`)
alert(`O resto da divisão de dois números é: ${restDiv}`)

if (firstNumber === secondNumber) {
  alert(`Os dois números inseridos são iguais`)
} 
else if (firstNumber !== secondNumber) {
  alert(`Os dois números inseridos são diferentes`)
}
 
if (sum % 2 == 0) {
  alert(`A soma dos dois números é par: ${sum}`);
} 
else {
  alert(`A soma dos dois números é impar: ${sum}`)
}
