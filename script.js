var peso = document.querySelector('#peso')
var altura = document.querySelector('#altura')
var idade = document.querySelector('#idade')


var resultado = document.querySelector('span')

function calcular() {
    resultado.innerHTML = ((13.75 * parseInt(peso.value)) + (5 + parseInt(altura.value)) - (6.75 * parseInt(idade.value)) + (66.5))

}
