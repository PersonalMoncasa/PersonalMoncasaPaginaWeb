
function sendEmail() {
    Email.send({
	Host: "smtp.gmail.com",
	Username : "personalmoncasaweb@gmail.com",
	Password : "moncasa2020",
	To : 'personalmoncasaweb@gmail.com',
	From : email,
	Subject : name,
	Body : telefono, msg,
	}).then(
		message => alert("mail sent successfully")
	);
}
