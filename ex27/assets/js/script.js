//factory function - cria obetos
//função construtora cria classes

const falar = {
	falar(){
	console.log(`${this.nome} está falando.`);
},
};

const criaPessoaPrototype = {...falar};
// issso faz com que todos objetos gerados tenham acesso a esses mesmo metodos, facilitando e economizando memoria;

function criaPessoa(nome, sobrenome){
	
	return Object.create(criaPessoaPrototype, {
        nome: {value: nome},
        sobrenome:{value: sobrenome}

    });


}

const p1 = criaPessoa('Luiz', 'Otávio');
console.log(p1);
p1.falar();