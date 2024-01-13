function Validation(values) {
	let error = {};
	const email_pattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
	console.log("values.name", values.name);
	console.log("values.email", values.email);
	console.log("values.password", values.password);
	console.log("values.date", values.date);

	if (values.name === "" || values.name[0] === "") {
		error.name = "Zabudli ste vyplniť meno";
	} else {
		error.name = "";
	}

	if (values.email === "" || values.email[0] === "") {
		error.email = "Zabudli ste vyplniť email";
	} else if (!email_pattern.test(values.email)) {
		error.email = "Neplstný email";
	} else {
		error.email = "";
	}

	if (values.password === "" || values.password[0] === "") {
		error.password = "Zabudli ste vyplniť heslo";
	} else {
		error.password = "";
	}

	if (values.date === "" || !values.date || values.date[0] === "") {
		error.date = "Nezadali ste dátum narodenia";
	} else {
		error.date = "";
	}

	return error;
}

export default Validation;
