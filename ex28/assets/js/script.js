// usando o map

const pessoas = [
	{id: 3, nome: "Maria"},
	{id: 2, nome: "Maria"},
	{id: 1, nome: "Maria"},
];

const novasPessoas = new Map();
for (const pessoa of pessoas){
	const { id } = pessoa;
	novasPessoas.set(id, {...pessoa});
}

console.log(novasPessoas.get(3));