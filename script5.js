var n1 = 0
var n1 = 0
var n3 = 0
var op = ''
var res = ''
function numero(a) {
	n1 = parseInt(a)
	document.getElementById('monitor').value += n1
}

function operacao(esc){
	op = esc
	document.getElementById('monitor').value += op
	n3 = n1
}

function resultado(){
	document.getElementById('monitor').value =''
	switch(op){
		case '+':
		res = n3 + n1
		document.getElementById('monitor').value = res
		break;
		case '-':
		res = n3 - n1
		document.getElementById('monitor').value = res
		break;
		case '*':
		res = n3 * n1
		document.getElementById('monitor').value = res
		break;
		case '/':
		res = n3 / n1
		document.getElementById('monitor').value = res
		break;
	}
}

function limpar(){
	document.getElementById('monitor').value = ''
	n1 = 0
	n3 = 0
}