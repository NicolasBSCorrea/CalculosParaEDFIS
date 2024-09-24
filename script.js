var idade = document.querySelector('idade')
var altura = document.querySelector('altura')
var peso = document.querySelector('peso')
var resultado = document.querySelector('span')

function calcular(){
    resultado.innerHTML = (13.75 * parseInt(peso)) + (5 + parseInt(altura)) - (6.75 * parseInt(idade)) + 66.5

    //resultado.innerHTML = parseInt(peso) + parseInt(altura)
}