function sendEmail() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var msg = document.getElementById("msg").value;
    var telefono = document.getElementById("telefono").value;
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