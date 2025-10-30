//1
/*
const numeroPessoa = Number(prompt("A primeira pessoa digita um número:"))
let numeroTentativas = 0;
let numeroChutado = 0;

console.log('Vamos Jogar! --------------------------------------------------');

do{
    numeroChutado = Number(prompt('Tente advinha o número digitado desafio 1:'))
    if (numeroPessoa > numeroChutado) {
        console.log(`O número chutado é: ${numeroChutado}. Errrrou, é maior`)
    } else if (numeroPessoa < numeroChutado) {
        console.log(`O número chutado é: ${numeroChutado}. Errrrou, é menor`)
    } 
    numeroTentativas++

}while(numeroPessoa !== numeroChutado)
console.log(`O número chutado foi ${numeroChutado}. Acertoooou!!! Em ${numeroTentativas} tentativas.`)


//2
let numeros = []
for(let i=1; i<=10; i++){numeros.push[i]}

const numeroRamdom = numeros[Math.floor(Math.random() * 10)]
let numeroTentativas2 = 0
let numeroChutado2 = 0

console.log('Vamos Jogar!')

do {
    numeroChutado2 = Number(prompt('Tente advinhar o número gerado desafio 2:'))
    if (numeroRamdom > numeroChutado2) {
        console.log(`O número chutado é: ${numeroChutado2}. Errrrou, é maior`)
    } else if (numeroRamdom < numeroChutado) {
        console.log(`O número chutado é: ${numeroChutado2}. Errrrou, é menor`)
    }
    numeroTentativas2++
} while (numeroRamdom !== numeroChutado2)
console.log(`O número chutado foi ${numeroChutado2}. Acertoooou!!! Em ${numeroTentativas2} tentativas.`)
*/
//3

let vida = 1
let recursos = 0
let rodadas = 0

while((recursos<10) && (vida>0)){
    let escolha = prompt('Você quer EXPLORAR(encontrar recursos ou perigos) ou DESCANSAR(o que recupera energia ganhando uma vida a mais. Digite 0 ou 1, respectivamente)')
    switch(escolha){
        case '0': //Explorar
            const probabilidades = [0,1]
            const probabilidade = probabilidades[Math.floor(Math.random()*2)]
            if(probabilidade===0){ //Encontrar Recursos
                 recursos++
                console.log(`Você encontrou um recurso, agora você tem ${recursos} recursos.`)               
            } else if(probabilidade===1){
                const probabilidade2 = probabilidades[Math.floor(Math.random()*2)]
                
                if(probabilidade2===0){ //Encontrou Perigo
                    console.log('Você escapou do perigo, o jogo continua!')
                } else if(probabilidade2===1){ //Encontrou Gamemaker
                     vida--
                    console.log(`Você encontrou um 'Gamemaker' e perdeu um ponto de vida, agora você tem ${vida} pontos de vida, tome cuidado`)
                }
            }
            rodadas++
            break
        case '1': //Descansar
            vida++
            console.log(`Você descansou e ganhou 1 ponto de vida, agora tem ${vida} pontos de vida.`)
            rodadas++
            break
        default:
    }
}
console.log(`Você coletou ${recursos} recursos em ${rodadas} rodadas.`)