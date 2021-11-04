function parOuImpar() {
	
	var test =  [1,2,3,4,5,6,7,8,9,10]

	test.forEach(function (tests) {

		var verificar = tests % 2
		if (verificar != 1)
			console.log(tests)
	})
}