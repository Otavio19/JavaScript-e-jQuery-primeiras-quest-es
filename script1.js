function reset() {	
	for(let i = 1; i <= 5; i++){
		if(i != 4)
		document.getElementById(`ex${i}`).style.display = 'none';
	}
}

function exercicio(e1){
	reset();
	document.getElementById(e1).style.display = 'flex'
}

function resultado(){
	let val1 = document.getElementById('v1').value;
	let val2 = document.getElementById('v2').value;

	var c1 = parseInt(val1);
	var c2 = parseInt(val2);
	return	document.getElementById('resultado1').value = c1 + c2
}