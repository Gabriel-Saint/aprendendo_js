// factory functions

function criarUsuario(nome, idade) {
    return {
        nome: nome,
        idade: idade,
        saudacao: function() {
            console.log(`Olá meu nome  é ${this.nome} e eu tenho ${this.idade} anos. `);
        }
    };
}

const user1 = criarUsuario("Gabriel", 18);

user1.saudacao();