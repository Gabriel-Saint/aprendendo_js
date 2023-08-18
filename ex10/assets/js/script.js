/*function rand(min = 1000, max = 3000) {
    const num = Math.random() * (max - min) + min;
    return Math.floor(num);
}

function f1(callback) {
    setTimeout(function () {
        console.log("f1 " + rand() + " s");
        if (callback) callback();
    }, rand());
}

function f2(callback) {
    setTimeout(function () {
        console.log("f2 " + rand() + " s");
        if (callback) callback();
    }, rand());
}

function f3(callback) {
    setTimeout(function () {
        console.log("f3 " + rand() + " s");
        if (callback) callback();
    }, rand());
}

f1(function () {
    f2(function () {
        f3(function () {
            console.log("Olá mundo!");
        })
    })
});

*/

function cozinhar(callback) {
    console.log(`Cozinhando prato...`);
    setTimeout(callback, 3000);
}

function pratoPronto(){
    console.log("O prato está pronto");
}

cozinhar(pratoPronto);