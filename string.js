let texto = "Oi, eu sou o Lucas"

console.log(texto.length)
console.log(texto.indexOf("Lucas"))

let palavra = texto.slice(0,2)
console.log(palavra)

console.log(texto.split(" "))

console.log(texto.replace("Lucas","Victor"))

let texto2 = "Olá, sou Carlos!"
let nomeUsuario = texto2.slice(texto2.indexOf("Carlos"),texto2.length - 1)
console.log(nomeUsuario)