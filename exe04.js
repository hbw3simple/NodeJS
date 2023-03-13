const readline = require('readline-sync')

let num = readline.question(`Digite um numero:`)

if(+num == 10){
    console.log(`O numero ${num} é iqual a 10`);
}else if(+num > 10){
    console.log(`O numeor ${num} é maior que 10`);
}else{
    console.log(`O numero ${num} é menor que 10`);
}