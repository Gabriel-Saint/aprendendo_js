function pessoa (nome, sobrenome){
    this.nome = nome,
    this.sobrenome =  sobrenome,
    this.nomeCompleto = () => this.nome + ' ' + this.sobrenome;
}


const pessoa1 = new pessoa('Gabriel', 'Silva');

console.log(pessoa1.nomeCompleto());

