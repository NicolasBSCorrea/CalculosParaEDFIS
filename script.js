var idade = document.querySelector('#idade')
var altura = document.querySelector('#altura')
var peso = document.querySelector('#peso')
var resultado = document.querySelector('span')

function calcular(){
    resultado = (13.75 * peso.value) + (5 + altura.value) - (6.75 * idade.value) + 66.5
}
