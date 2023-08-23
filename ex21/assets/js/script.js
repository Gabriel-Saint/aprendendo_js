/*objeto é passado por referencia, se mudar um muda o outro;
apontam para o mesmo local da memoria

para evitar isso é ideal usar o spread operator ex const outra coisa = { ... produto}

const outra coisa = Object.assign ({}, produto ) copia o objeto

Object.keys  retorna  as chaves do objeto
Object.values retorna os os valores do objeto
Object.entries retorna um array com os valores e com os valores, separados
Object.freeze congela o objeto

Object.getOwnPropertyDescriptor(produto, 'nome') - para ver como estão definidas as propriedades da chave de um determinado objeto*/

const pessoa = {
    nome: "Gabriel",
    idade: 19,
    peso: 88,

}
Object.freeze(pessoa);

const pessoa2 = {...pessoa}

const pessoa3 = {...pessoa2}

const pessoa4 = Object.assign({}, pessoa);

pessoa.nome = 'José';

//console.log(Object.getOwnPropertyDescriptor(pessoa, 'nome'));
//console.log(Object.keys(pessoa2));
//console.log(Object.values(pessoa2));
//console.log(Object.entries(pessoa2));

console.log(pessoa4);
