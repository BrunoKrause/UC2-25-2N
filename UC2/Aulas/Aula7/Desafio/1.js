//A

let grausFahrenheit = 77
let grausKelvinC = (grausFahrenheit-32)*(5/9)+273.15
console.log(grausKelvinC,"K")

//B

let grausCelsius = 80
let grausFahrenheitC = (grausCelsius)*(9/5)+32
console.log(grausFahrenheitC,"°F")

//C

grausCelsius = 30
grausFahrenheitC = ((grausCelsius)*(9/5)+32)
grausFahrenheit = grausFahrenheitC
grausKelvinC = (grausFahrenheit-32)*(5/9)+273.15
console.log(grausFahrenheitC,"°F",grausKelvinC,"K")

//D

grausCelsius = prompt("Insira a temperatura em Graus Celsius")
const grausCelsiusN = Number(grausCelsius)
grausFahrenheitC = ((grausCelsiusN)*(9/5)+32)
grausFahrenheit = grausFahrenheitC
grausKelvinC = (grausFahrenheit-32)*(5/9)+273.15
console.log(grausFahrenheitC,"°F",grausKelvinC,"K")