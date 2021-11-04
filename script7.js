/*
custo final = custo de fábrica + 
(custo de fábrica * percentual do distribuidor) + 
(custo de fábrica * percentual de impostos)
*/

function calcular() {

var custoFabrica = parseInt($('#custoFabrica').val())
var percDistribuidor = parseInt($('#percDistribuidor').val())
var percImpostos = parseInt($('#percImpostos').val())
var valorFinal = custoFabrica + (custoFabrica * percDistribuidor) + (custoFabrica * percImpostos)

$('#valorFinal').val(valorFinal)
}