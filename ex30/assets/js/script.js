class DispositivoEletronico {
	constructor(nome){
		this.nome = nome;
		this.status = false;
	}

	ligar(){
		if(this.status){
			console.log(this.nome + ' Já está ligado!');
			return;
		}

		this.status = true;
		console.log(this.nome + ' está ligado!');
	}


	Desligar(){
		if(!this.status){
			console.log(this.nome + ' Já está desligado!');
			return;
		}

		this.status = false;
		console.log(this.nome + ' está desligado!');
	}
	
}

class SmartPhone extends DispositivoEletronico {
	constructor(nome, cor, modelo){
		super(nome);
		this.cor = cor;
		this.modelo = modelo;
	}
}