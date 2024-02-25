
// Exercise 6
function validate() {
	var error = 0;
	var fName = document.getElementById("fName");
	var fEmail = document.getElementById("fEmail");
	var fAddress = document.getElementById("fAddress");
	var fLastN = document.getElementById("fLastN");
	var fPassword = document.getElementById("fPassword");
	var fPhone = document.getElementById("fPhone");
	
	// Fetch all the forms we want to apply custom Bootstrap validation styles to
	var forms = document.querySelectorAll('.needs-validation');
	var form = forms[0];
  
	form.addEventListener('submit', function (event) {
		if (!form.checkValidity()) {
			event.preventDefault();
			event.stopPropagation();
		}
	}, false);

	var requirements = {
		letters: /^[a-zA-Z]+$/,
		numbers: /^[0-9]+$/,
		numbersLetters: /^(?=.*[0-9])(?=.*[a-zA-Z])[a-zA-Z0-9!@#$%^&*()-_+=?]+$/,
		mail: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
	}


/*	// Validate fields entered by the user: name, phone, password, and email
	var inputs = [fName, fEmail, fAddress, fLastN, fPassword, fPhone];
	inputs.forEach(input => {
		input.required = true;
		if (input.value == "") {
			input.classList.remove('is-valid');
			input.classList.add('is-invalid');
			error++;
		}
		else {
			input.classList.remove('is-invalid');
			input.classList.add('is-valid');
		}
		if (input.value.length < 3) {
			input.classList.remove('is-valid');
			input.classList.add('is-invalid');
			error++;
		}
		else {
			input.classList.remove('is-invalid');
			input.classList.add('is-valid');
		}
	});*/
	

	if(!(requirements.letters.test(fName.value)) || fName.value.length < 3){
		fName.classList.remove('is-valid');
		fName.classList.add('is-invalid');
		error++;
	} else {
		fName.classList.remove('is-invalid');
		fName.classList.add('is-valid');
	}

	if(!(requirements.letters.test(fLastN.value)) || fLastN.value.length < 3){
		fLastN.classList.remove('is-valid');
		fLastN.classList.add('is-invalid');
		error++;
	} else {
		fLastN.classList.remove('is-invalid');
		fLastN.classList.add('is-valid');
	}

	if(!(requirements.numbers.test(fPhone.value)) || fPhone.value.length < 3) {
		fPhone.classList.remove('is-valid');
		fPhone.classList.add('is-invalid');
		error++;
	} else {
		fPhone.classList.remove('is-invalid');
		fPhone.classList.add('is-valid');
	}

	if(!(requirements.numbersLetters.test(fPassword.value)) || fPassword.value.length < 3) {
		fPassword.classList.remove('is-valid');
		fPassword.classList.add('is-invalid');
		error++;
	} else {
		fPassword.classList.remove('is-invalid');
		fPassword.classList.add('is-valid');
	}

	if(fAddress.value.length < 3){
		fAddress.classList.remove('is-valid');
		fAddress.classList.add('is-invalid');
		error++;
	} else {
		fAddress.classList.remove('is-invalid');
		fAddress.classList.add('is-valid');
	}

	if(!(requirements.mail.test(fEmail.value)) || fEmail.value.length < 3) {
		fEmail.classList.remove('is-valid');
		fEmail.classList.add('is-invalid');
		error++;
	} else {
		fEmail.classList.remove('is-invalid');
		fEmail.classList.add('is-valid');
	}
	

	if(error > 0){
		inputs.forEach(input => {
			if (input.classList.contains('is-invalid')) input.value = "yujhgf";
		});
	}
	
}
