const pessoas = [
    {nome: 'luiz', idade: 62 },
    {nome: 'Maria', idade: 13 },
    {nome: 'eduardo', idade: 42 },
    {nome: 'luiza', idade: 77 },
    {nome: 'Raphael', idade: 22 },
    ];
    
    const nomes = pessoas.map((valor, indice) => `${valor.nome} -> ID -> ${indice} -> idade -> ${valor.idade}`);
    
    console.log(nomes);