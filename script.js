document.getElementById("enviar").addEventListener("click", validaFormulario);

var nome = document.querySelector("#nome");
var email = document.querySelector("#email");
var telefone = document.querySelector("#telefone");

function validaFormulario(){
	if(nome.value != "" && email.value != "" && telefone.value != "") {

	alert("Prontinho! você receberá as novidades por email.");

	}else{

		alert("Por favor, preencha os campos nome, email e telefone!");
	}

}

