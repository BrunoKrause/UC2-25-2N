let kWH = 0.05

//A
let consumoResidencia = 280
let valorConta = consumoResidencia*kWH
console.log("R$",valorConta)

//B
let porcentagemDesconto = 85 //15% de desconto, 85% que será cobrado
valorConta = (porcentagemDesconto/100)*valorConta
console.log("R$",valorConta)