// 01 - crie uma condição composta com uma variável dia e a condição verifica
//  se está de dia mostre 'claro' senão mostre está 'de noite'
let dia = "noite"


if(dia == "claro" ){
console.log("Está de dia")

}else{
    console.log("Está de noite")
}

console.log(dia)


// 02 - Crie um loop for() que exiba apenas números pares até o 20 no console.log()
for(let numb = 2;numb <= 10;numb+=2){
    
    console.log(numb)
}

// 03 - crie uma função que exiba uma mensagem no console
console.log("Academia VnW")


// 04 - crie uma função que receba o seu nome como (parâmetro) e exiba no console

let nome = "Giuliano"

console.log(`Olá, ${nome}!`)

// 05 - crie uma função que receba nome, idade, e um estilo musical preferido (parâmetros) e exiba no console

let name = "Giuliano"
let age = "28"
let music = "Gospel"

console.log (`Nome: ${name}, Idade:${age}, Estilo musical:${music}`)

// 06 - crie uma função que receba um filme, uma música (parâmetros) e exiba no console

let film = "Tudo em todo lugar ao mesmo tempo"
let opening = "Giorno Theme"

console.log(`Filme:${film}, Música:${opening}`)

// 07 - crie uma função que retorne o triplo do número recebido no parâmetro da função

let triplo = 3
console.log(triplo*3)

// 08 - crie uma função que  verifique se uma  variável é true ou false

let first = 1
console.log(first == 2)
// 09 - Crie um array que receba 5 itens e exiba no console.
let list = ["blue","white","red","green","yellow"]

console.log(list)

// 10 - Utilize um método para adicionar um nome ao inicio do array.

let JoJo = ["Joseph", "Jotaro", "Josuke","Giorno", "Jolyne"]
JoJo.unshift("Jonathan")
console.log(JoJo)

// 11 - Utilize um método para remover o último nome do array.

let boss = ["Dio","Kars", "Kira", "Diavollo","Pucci"]
boss.pop()
console.log(boss)

// 12 - Utilize um método para adicionar dois nomes ao fim do array.

let strawHats = ["Luffy", "Zoro","Nami","Sanji","Usop","Chopper","Robbin","Franky"]

strawHats.splice(8,9,"Brook","Jinbe")
console.log(strawHats)

// 13 - Utilize um método para remover o primeiro nome do array.

let FMA = ['Mom','Edward','Alphonse']
FMA.splice(0,1)
console.log(FMA)

// 14 - Utilize um método para organizar em ordem crescente o seguinte array:
 let numbers = [7,5,6,3,8,9,2,1,4]
 numbers.sort()
 console.log(numbers)

//  15 - Crie um objeto que receba ao menos três propriedades sobre você.

let sobre = {
    nome:"Giuliano",
    idade:"28",
    estadoCivil:"Casado"
}
console.log(sobre)

// 16 - Adicione uma nova propriedade sem alterar seu objeto inicial.

sobre.linguagem = 'JavaScript'
console.log(sobre)

// 17 - Remova uma propriedade desse objeto.

delete sobre.linguagem
console.log(sobre)

// 17 - Mostre no console todas as propriedades desse objeto.
console.log(sobre)

// 18 - Crie um array  chamado "cadastro" contendo ao menos 5 objetos.
// Cada objeto deve receber as seguintes propriedades: nome,  idade,  telefone, amigos.
// Na propriedade amigos, adicione ao menos 4 amigos.

const cadastro = [
    {
        nome: "Robert",
        idade: "38",
        telefone: "99999-9999",
        amigos: ["Lucas", "Mauricio", "Davi","Giuliano"]
    }
   , {
        nome: "Fabricio",
        idade:"40",
        telefone: "98888-8888",
        amigos: ["Cesar", "Romario", "Garcia", "Francisco"]
    }
    ,{
        nome: "Dani",
        idade: "25",
        telefone:"97777-7777",
        amigos: ["Hebert","Suzana","Aroldo","Frank"]
    }
    ,{
        nome:"William",
        idade: "19",
        telefone: "96666-6666",
        amigos: ["Fernando","Roberta","Alan","Miro"]
    }
   , {
        nome: "Levi",
        idade: "22",
        telefone:"95555-5555" ,
        amigos: ["Matheus","Giovanna","Samara","Larissa"]
    }
]

// 19 - Mostre no console o nome de um amigo de cada lista.
for(let amigo = 0; amigo < cadastro.length; amigo++){
    console.log(cadastro[amigo].amigos[0])
}


