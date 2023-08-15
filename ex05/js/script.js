/*const num1 = "10";
const num2 = 10;
 const compara = num1 === num2;

 console.log(compara);*/

 //operadores logicos

 const senhabd = "12345";
 const usuariobd = "Gabriel";
 
 const senhaUser= "123445";
 const usarioUser="Gabriel";
 if(senhaUser === senhabd && usuariobd === usarioUser){
    console.log("Você está logado!");
 }else if(senhaUser !== senhabd || usuariobd !== usarioUser){
    console.log("Senha ou usuario incorretos!");
 }