const readline = require('readline-sync')

let num = readline.question('Digite um numero:');

if(+num > 0){
    console.log(`${num} é positivo`);
}else if (+num < 0){
    console.log(`${num} é negativo`);
}else {
    console.log(`${num} é igual a zero`);
}