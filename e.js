// ex. 01
let nome = "joao"
console.log(nome)
// ex. 02
let a = 5, b = 10
console.log(a + b)
//ex. 03
let primeiroNome = "Josefa ", ultimoNome = "Silva"
console.log(primeiroNome + ultimoNome)
//ex .04
let pessoa = {
    nome: 'Josefa',
    idade: 20,
    endereço: 'garcia',
    telefone: 984301397,
}
console.log(pessoa)
//ex .04b
let frutas = ['maçã', 'banana', 'açai']
frutas[3] = 'pêra'
frutas.push('abacate')
console.log(frutas)

console.log('O tamanho do vetor é: ', frutas.length)

for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i])
}
//ex .05
let numero = [1, 2, 3, 4, 5]
console.log(numero[0], numero[numero.length - 1])
//ex.06
let cores = ['vermelho', 'verde', 'azul']
for (i = 0; i < cores.length; i++) {
    console.log(cores[i])
}
//ex.07
let idade = 16
console.log(idade)
if (idade < 18) {
    console.log('menor')
} else {
    console.log('maior')
}
//ex.08
let notas = 8
console.log(notas)
if (notas > 7) {
    console.log('aprovado')
} else if (notas >= 5 && notas <= 7) {
    console.log('recuperação')
} else if (notas < 5) {
    console.log('reprovado')
}
//ex.09
let diaDaSemana = 2
console.log(diaDaSemana)
switch (diaDaSemana) {
    case 1:
        console.log('domingo');
        break;
    case 2:
        console.log('segunda-feira');
        break;
    case 3:
        console.log('terça-feira');
        break;
    case 4:
        console.log('quarta-feira');
        break;
    case 5:
        console.log('quinta-feira');
        break;
    case 6:
        console.log('sexta-feira');
        break;
    case 7:
        console.log('sabado');
        break;
}
//ex.10
let numeroci = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for (i = 0; i < numeroci.length; i++) {
    console.log(numeroci[i])
}
//ex.11
let contador = 1
while (contador <= 5) {
    console.log(contador)
    contador++
}
//ex.12
//ex.13
let valores = [ 10, 20, 30, 40, 50]
let soma = 0
for(let i=0; i<valores.length; i++){
    soma += valores[i]
}
console.log('ex. 13: A soma é', soma);

//ex. 14
let vetor = [5,4,6,9,2,5,1,15]
let maior = 0, n = 0
while (n < vetor.length){
    if(vetor[n] > maior){
        maior = vetor[n]
    }
    n++
}
console.log('ex. 14: O maior numero é', maior);

//ex.15
vetor =[1,2,3]
let menor = 0
n=3
while(n> vetor.length){
    if(vetor[n] < menor){
        menor = vetor [n]
    }
}
console.log('ex.15: o menor numero e', menor);
//ex. 16
n = 10
let fatorial = 1
for(let i=1; i<=n; i++){
    fatorial *=i
}
console.log('ex. 16:', fatorial);

//ex.17

n = 10
for (i=1; i<=n; i++){
    if(i % 2 == 0){
        console.log(i, 'é par');
    }else{
        console.log(i, 'é impar');
    }
}

//ex.19
let texto = 'texto', resultado = ''
for(i = texto.length-1; i>=0; i--){
    resultado +=texto [i]
}
console.log('texto invertido: ', resultado);