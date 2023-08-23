const objA = {
    chaveA: 'Sou o obj A'
}
const objB = {
    chaveB: 'Sou o obj B'
}

Object.setPrototypeOf(objB, objA);

console.log(objB.chaveA);
