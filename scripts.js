
function confirmacion() {
	var pregunta = confirm("¿Deseas visitar la página principal?")
	if (pregunta){
		alert("Te envío allí rápidamente")
		window.location = "https://strikeranon.github.io/pereirodev/";
	}
	else{
		alert("Esta bien...\n Sigue explorando por aqui:)")
	}
}

