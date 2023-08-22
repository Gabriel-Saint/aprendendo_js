const numeros = [1,2,3,4,5,6,78,89,7,56,4,3,5,6,7,8,5,4,3,6,8,9,67,9,6,6,5,4,34,57,86,8,8,8,8];

const total =  numeros.reduce((acumulador, valor)=> acumulador += valor,0)



const pessoas = [
    {nome: 'luiz', idade: 62 },
    {nome: 'Maria', idade: 13 },
    {nome: 'eduardo', idade: 4200 },
    {nome: 'luiza', idade: 77 },
    {nome: 'Raphael', idade: 22 },
    ];

const maiorIdade = pessoas.reduce((acumulador, valor) => valor.idade >= acumulador ? acumulador = valor.idade: acumulador = acumulador,0)
console.log(maiorIdade);