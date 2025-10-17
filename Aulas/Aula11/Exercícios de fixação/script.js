//1 
const respostaDoUsuario = prompt('Digite o número que você quer testar')
const numero = Number(respostaDoUsuario)

if (numero % 2 === 0){
    console.log('Passou no teste')
} else {
    console.log('Não passou no teste.')
}
/*A) Explique o que o código faz. Qual teste ele realiza? (Testa se o número digitado pelo usuário é divisível por 2.)
B) Para que tipos de números ele imprime no console 'Passou no teste'? (Números divisíveis por 2.)
C) Para que tipos de números a mensagem é 'Não passou no teste'? (Números não divisíveis por 2.)
*/

//2
let fruta = prompt('Escolha uma fruta')
let preco
switch (fruta.toLowerCase()){
    case 'laranja':
        preco = 3.5
        break
    case 'maçã' || 'maça' || 'maca':
        preco = 2.25
        break
    case 'uva':
        preco = 0.30
        break
    case 'pera' || 'pêra':
        preco = 5.5
        break
    default:
        preco = 5
        break
}
console.log(`O preço da fruta, ${fruta} é R$${preco}`)
/*A) Para que serve o código? (Para dizer o preço da fruta escolhida)
B) Qual será a mensagem impressa no console, se o valor de fruta for "Maçã"? (O preço da fruta, Maça é R$2,25)
C) Qual seria a mensagem impressa no console se comprasse "pera" e retirassemos o "break" que está logo acima do "default"? (O preço da fruta, pera é R$5)
*/

//3
const numero2 = Number(prompt('Digite o primeiro número.'))

if(numero2 > 0){
    console.log('Esse número passou no teste')
    let mensagem = 'Essa mensagem é secreta!!!'
}
console.log(mensagem)

/*A) Pedindo ao usuário que digite um número.
B) Considere um usuário digitou o número 10. Qual será a mensagem do terminal? (Esse número passou no teste) E se o número for -10? (Não aparecerá mensagem)
C)Ficará em branco.
*/

//4
const podeDirigir = Number(prompt('Qual a sua idade?')) > 18
if(podeDirigir){
    console.log('Você pode dirigir')
} else{
    console.log('Você não pode dirigir')
}

//5
const periodoDoDia = prompt('Qual o período do dia? M(Matutino), V(Vespertino), N(Noturno).')

if(periodoDoDia === 'M'){
    console.log('Bom dia!')
} else if(periodoDoDia === 'V'){
    console.log('Boa tarde!')
} else if(periodoDoDia === 'N'){
    console.log('Boa noite!')
} else{
    console.log('Digitou errado :(')
}

//6
switch(periodoDoDia.toLowerCase()){
    case 'm':
        console.log('Bom dia!')
        break
    case 'v':
        console.log('Boa tarde!')
        break
    case 'n':
        console.log('Boa noite')
        break
    default:
        console.log('Digitou errado')
        break
}

//7
const generoFilme = prompt('Digite o gênero do filme (Drama, Comédia, Terror, Ação, Romance, Ficçao Científica ou Fantasia):')
const valorIngresso = Number(prompt('Qual o valor do ingresso?'))
const assistirFilme = (generoFilme.toLowerCase() === 'fantasia' && valorIngresso <= 15)
console.log(assistirFilme)

if(assistirFilme){
    console.log('Bom filme!')
} else {
    console.log('Escolha outro filme :(')
}