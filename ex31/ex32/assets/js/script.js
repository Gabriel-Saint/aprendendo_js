//promises
// o js executa as promises em paralelo ao codigo entao, somente quando elas estiverem prontas ele finaliza elas,


function rand(){
    const max = 3000;
    const min = 1000;

    return Math.floor(Math.random()*(max - min)+ min);
}


function promise (msg, tempo){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(typeof(msg) === 'number'){
                reject("ocorreu um erro!");
                
            }else{
                resolve(msg);
            };
        }, tempo);
    });
}

promise('Conexão 1 - ok', rand()).then(msg =>{console.log(msg)
return promise('Conexão 2 - ok', rand());
}).then(msg => { console.log(msg);
return promise('Conexão 3 - ok', rand());
}).then(msg=>{console.log(msg);
return promise("tudo ok", rand())}).then(msg=> {console.log(msg)}).catch(erro => {console.log(erro)});