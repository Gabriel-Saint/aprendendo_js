

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

/*promise('Conexão 1 - ok', rand()).then(msg =>{console.log(msg)
return promise('Conexão 2 - ok', rand());
}).then(msg => { console.log(msg);
return promise('Conexão 3 - ok', rand());
}).then(msg=>{console.log(msg);
return promise("tudo ok", rand())}).then(msg=> {console.log(msg)}).catch(erro => {console.log(erro)});
*/
async function executa() {
    try {
   const fase1 = await promise("fase1", rand());
   console.log(fase1);
   const fase2 = await promise("fase2", rand());
   console.log(fase2);
   const fase3 = await promise("fase3", rand());
   console.log(fase3);
   const fase4 = await promise("fase4", rand());
   console.log(fase4);

}
   catch(e){
   console.log(e);
}
}
executa();