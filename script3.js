function resultadoTab(){
	var v1 = document.getElementById('escolha').value
	var valor = document.querySelectorAll(".valorTab").forEach(element =>{
		element.innerHTML = v1
	})
	
	document.getElementById('resultTab0').innerHTML = v1 * 0
	document.getElementById('resultTab1').innerHTML = v1 * 1
	document.getElementById('resultTab2').innerHTML = v1 * 2
	document.getElementById('resultTab3').innerHTML = v1 * 3
	document.getElementById('resultTab4').innerHTML = v1 * 4
	document.getElementById('resultTab5').innerHTML = v1 * 5
	document.getElementById('resultTab6').innerHTML = v1 * 6
	document.getElementById('resultTab7').innerHTML = v1 * 7
	document.getElementById('resultTab8').innerHTML = v1 * 8
	document.getElementById('resultTab9').innerHTML = v1 * 9
	document.getElementById('resultTab10').innerHTML = v1 * 10
}