let pessoa = {
    nome: "Lucas",
    idade: 24,
    altura: 1.80
}

let json = JSON.stringify(pessoa)

console.log(json)

let objeto = JSON.parse(json)

console.log(objeto)