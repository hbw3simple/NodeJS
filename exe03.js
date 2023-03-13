const readline = require('readline-sync')

let salario = readline.question(`Digite o salario:`)

let salarioreajustado

if (+salario <= 300){
    salarioreajustado = salario *1.5;
    console.log(`O salario a´pos o reajuste é de RS${salarioreajustado}`);
}else if (+salario >= 300){
    salarioreajustado = salario *1.3;
    console.log(`O salario após o reajuste é de RS${salarioreajustado}`);
}else{
    console.log(`Algum valor foi digirado de maneira errada!`);
}