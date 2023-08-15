// aprendendo datas em js

function colocarZeroNaFrente(num){
    return num >= 10 ? num : `0${num}`;
}

function formataData(data){
    const dia = colocarZeroNaFrente(data.getDate());
    const mes = colocarZeroNaFrente(data.getMonth()+1);
    const ano = colocarZeroNaFrente(data.getFullYear());
    const hora = colocarZeroNaFrente(data.getHours());
    const  min = colocarZeroNaFrente(data.getMinutes());
    const seg = colocarZeroNaFrente(data.getSeconds());

    return `${dia} /${mes}/ ${ano} ${hora}:${min}:${seg} `;
}

const data = new Date();

const dataBrasil = formataData(data);
console.log(dataBrasil);

const controle =  false;

/*do{
    console.log(dataBrasil);
}while( controle === true)*/