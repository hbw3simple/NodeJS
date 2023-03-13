const readline = require('readline-sync')

let num1 = readline.question("Digite um Numero:");

let num2 = readline.question("Digite um outro Numero:");

num1 = parseInt(num1);
num2 = parseInt(num2);

for (let i = num1; i <= num2; i++){

    console.log(i);

}