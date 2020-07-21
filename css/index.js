
function sendEmail() {
	var asunto = document.getElementById("name").value
	var mensaje = document.getElementById("msg").value
	var correo = document.getElementById("email").value
    Email.send({
	Host: "smtp.gmail.com",
	Username : "personalmoncasaweb@gmail.com",
	Password : "moncasa2020",
	To : 'contactopersonalmoncasa@gmail.com',
	From : correo,
	Subject : asunto,
	Body : mensaje,
	}).then(
		message => alert("mail sent successfully")
	);
}
