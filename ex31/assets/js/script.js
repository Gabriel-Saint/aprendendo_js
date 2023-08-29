//promises
// o js executa as promises em paralelo ao codigo entao, somente quando elas estiverem prontas ele finaliza elas,


function rand(min, max){
    min *= 1000;
    max*= 1000;
    
    return Math.floor(Math.random()*(max - min) + min);
    }
    
    function esperaAi(msg, tempo) {
    return new Promise((resolve, reject)=>{
    
     setTimeout(()=> {
    resolve(msg);
    }, tempo);
    
    });
    }
    
    esperaAi('frase 1', rand(1, 3))
    .then(resposta=>{
        console.log(resposta);
        return esperaAi('frase 2', rand(1, 3))
    }).then( resposta=>{
        console.log(resposta);
        return esperaAi('frase 3', rand(1, 3))
    }).then(resposta=>{
        console.log(resposta);
    })
    .catch()


function rand(){
    const max = 3000;
    const min = 1000;

    return Math.floor(Math.random()*(max - min)+ min);
}
