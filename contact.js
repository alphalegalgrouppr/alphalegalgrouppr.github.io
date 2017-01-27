function ValidateEmail(inputText)
{
	var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	if(inputText.match(mailformat))
		{
			return true;
		}
	else
		{
			return false;
		}
}

function SendEmail()
{
	var email = document.getElementById("email").value;
	var name = document.getElementById("name").value;
	var mensaje = document.getElementById("mensaje").value;
	var phone = document.getElementById("phone").value;
	if (ValidateEmail(email)) {
		document.getElementById("loader").style.visibility = "visible";
		document.getElementById("submit_contact").setAttribute("disabled", "disabled;");
		emailjs.send("gmail", "alphalegalgrouppr", {"message_html": mensaje,"from_name": name, "from_email": email, "phone": phone})
		.then(function(response) {
			document.getElementById("loader").style.visibility = "hidden";
   			//console.log("SUCCESS. status=%d, text=%s", response.status, response.text);
   			alert("Gracias " + name + "! Su mensaje fue enviado. Puede verificar su bandeja de entrada para confirmar.");
   			document.getElementById("submit_contact").removeAttribute("disabled");
		}, function(err) {
   			//console.log("FAILED. error=", err);
   			alert("Lo sentimos. Su mensaje no pudo ser enviado. Quizas la dirección ingresada no es válida o está teniendo problemas de conección.");
   			document.getElementById("submit_contact").removeAttribute("disabled");
		});
	} else {
			alert("Por favor, ingrese una dirección de correo electrónico válida.");
	}
}