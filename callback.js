const somar = (numeroA, numeroB) => numeroA + numeroB 
const subtrair = (numeroA, numeroB) => numeroA - numeroB
const multiplicar = (numeroA, numeroB) => numeroA * numeroB
const dividir = (numeroA, numeroB) => numeroA / numeroB

const calculadora = (numeroA, numeroB, operacao) =>{
    return operacao(numeroA, numeroB)
}

console.log(calculadora(32, 5, somar))
console.log(calculadora(32, 5, subtrair))
console.log(calculadora(32, 5, multiplicar))
console.log(calculadora(32, 5, dividir))

console.log(calculadora(32, 5, (numeroA, numeroB) => numeroA % numeroB))