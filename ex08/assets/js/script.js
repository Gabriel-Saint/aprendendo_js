class Media {
   
    constructor(nome, nota1, nota2){
        this.nome = nome;
        this.nota1 = nota1;
        this.nota2 = nota2;
    }
     
    calcularMedia(){
        const media = (this.nota1 + this.nota2)/2;
        if(media<6){
            console.log(`Olá ${this.nome} sua média geral é: ${media}, você está reprovado! `);
        }else{
            console.log(`Olá ${this.nome} sua média geral é: ${media}, você está aprovado, parabéns! `);
        }
        
    }
    
}

const media1 = new Media("Gabriel", 9.5, 2.5);

media1.calcularMedia();


