
// ******************* Cortina

function mostrarForm(form) {
	cerrarForm();
	document.getElementsByClassName('cortina')[0].style.height="100%";
	document.getElementsByClassName(form)[0].style.top="175px";
}


function cerrarForm(){
	document.getElementsByClassName('cortina')[0].style.height="0px";
	for (var i = 0; i < document.getElementsByClassName('form').length; i++) 
	{
		document.getElementsByClassName('form')[i].style.top="-550px";
	}
	
}

// ****************** Filtros

//**************** Estrellas

function pintar(estrella)
{

	for (var i = 0; i <= estrella; i++){
		var star= document.getElementsByClassName("fa-star")[i];
		star.className="fas fa-star";
	}

}

function despintar(){

	var star= document.getElementsByClassName("fa-star");
	for (var i = star.length-1;i>calificacion; i--){
		star[i].className="far fa-star";
			
	}

}

function cambio(estrella){

	calificacion=estrella;
	despintar();

}

//******************* Genero

function marcarItem(item){
	var etiqueta = document.getElementsByClassName('etiqueta')[item];
	etiqueta.className+=" marcado";
}

//******************* Años

function anios(){
	var options = "";
	for (var i = 2018; i > 1990; i--) {
		options=options+"<option>"+i+"</option>";
	}

	document.getElementById("anio").innerHTML+=options;

}

// ************** Filtros

// ************ Marcar filtro en peliculas (main)

function itemMarcado(x){

	var marcar = document.getElementsByClassName('item');
	for (var i = 0; i < marcar.length; i++) {
		marcar[i].style.background="#2999A5";
	}
	marcar[x].style.background="#024A59";

}
