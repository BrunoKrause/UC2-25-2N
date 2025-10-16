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
const numero2 = Number(prompt())