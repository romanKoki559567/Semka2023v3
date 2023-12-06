function Validation(values) {
	let error = {};
	const email_pattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;

	if (values.email === "") {
		error.email = "Zabudli ste vyplniť email";
	} else if (!email_pattern.test(values.email)) {
		error.email = "Neplstný email";
	} else {
		error.email = "";
	}

	if (values.password === "") {
		error.password = "Zabudli ste vyplniť heslo";
	} else {
		error.password = "";
	}

	return error;
}

export default Validation;
