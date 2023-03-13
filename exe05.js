const readline = require('readline-sync')

let num = readline.question('Digite um numero:');

num = parseInt(num);

for(let i = 0; i <=  num; i++){
    console.log(i);
}