const readline = require('readline-sync')

let num = readline.question('Digite um numero:');
let num_fat = 1

num = parseInt(num)
num_fat = parseInt(num_fat)

for(let i = num; i >= 1; i--) {

    num_fat *= i;

}
console.log(num_fat)