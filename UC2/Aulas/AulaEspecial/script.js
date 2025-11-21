/*const notaAcessorios = Number(prompt("Qual a nota para o fator acessórios (1 a 10)?"))
const notaCores = Number(prompt("Qual a nota para o fator Cores (1 a 10)?"))
const notaBrilho = Number(prompt("Qual a nota para o fator Brilho (1 a 10)?"))
const pontuacao = (notaAcessorios*5)+(notaCores*3)+(notaBrilho*10)
const metaPontuacao = 80
let resultado = pontuacao>= metaPontuacao
if(resultado===true){
    console.log("Parabéns, você foi aprovadooo!!!!!")
}
else
    console.log("Faltaram",metaPontuacao-pontuacao,"pontos, para atingir a meta.","Você fez",pontuacao,"pontos.")
*/
const descricao = prompt("Descreva a sua fantasia:")
const corPrincipal = prompt("Quais as cores da sua fantasia?")
console.log(descricao.length)
const temTamanhoAdequado = (descricao.length)>=20
const descricaoLower = descricao.toLocaleLowerCase()
const brilho = descricaoLower.indexOf("brilho")
const listras = descricaoLower.indexOf("listras")
const temBrilho = brilho !== -1
const temListras = listras !== -1
const aprovacao = temTamanhoAdequado&&(temBrilho||temListras)
console.log(aprovacao)