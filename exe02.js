const readline = require('readline-sync')

const hei = readline.question('Digite a altura:')
const sex = readline.question('Digite o seu sexo(M/F):').toUpperCase()

let pideal

if (sex === "M" ){
    pideal = (72.7 * hei) - 58;
    console.log(`Seu peso ideal é de ${pideal.toFixed(2)}`)
}else if(sex === "F" ){
    pideal = (62.1 * hei) - 44.7;
    console.log(`Seu peso ideal é de ${pideal.toFixed(2)}`)
}else{
    return 'Sexo inválido. Informe "M" para masculino ou "F" para feminino.';
}

