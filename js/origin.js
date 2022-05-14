

function getDatos(){
	var contadorUser= Math.round(Math.random()*5);
	let usuario=["kevin", "alejandro" ,"gabriel"];



	const datos=[` ${usuario[contadorUser]} debes pararte en un solo pie por 1 minuto` , "lorem plus plus" , "lorem plus plus plus"];

	

 	
 		var contenedor= document.getElementById('datos')
 var random=Math.round(Math.random()*2);
var color= '#'+Math.round(Math.random()*54321);

 	// contenedor.innerHTML= "";
 		contenedor.innerHTML= `<div readonly id="divInterno" style="background-color: ${color}; margin:auto;"> <p id="texto"> ` + datos[random] + "</p> </div>";

 		

 		
}
















// function apagar() {
// 	document.getElementById("imagen").src = 'media/encendido.png'
// }

// function encender(){
// 	document.getElementById("imagen").src ='media/apagado.png'
// }

// function romper(){
// 	document.getElementById("imagen").style.visibility='hidden';
// }

// function comprarNuevo(){
// 	document.getElementById("imagen").style.visibility='visible';
// }


// function opcion1(){

// 	alert("has seleccionado html");

// }

// function opcion2(){

// 	alert("has seleccionado css");

// }



// function pasar(){
// 	var texto=	document.getElementById('texto').value;
// 	var mostrar= document.getElementById('mostrar');

// 	mostrar.innerHTML+=texto;
// }

// function calculo(){
// 	num1=parseInt(document.getElementById('num1').value);
// 	num2=parseInt(document.getElementById('num2').value);

// 	if(num1>num2){
// 		alert(num1+ " es mayor");
// 	}else if (num2>num1){
// 		alert(num2+ " es mayor")
// 	}


// }


// function getRan() {
// 	var aleatorio ="";
// 	var agregar=document.getElementById("sele");

// for (var i =0; i <= 10; i++) {
//  aleatorio +="<option>" + Math.round(Math.random()*10)+"</option>" ;

// }
// agregar.innerHTML+=aleatorio;	



// }



// function getDatos(){
// 	var nombre= document.getElementById('nombre').value;
// 	var edad = document.getElementById('edad').value;
// 	var dpi = document.getElementById('dpi').value;

// 	var datos= document.getElementById('datos');

// 	datos.innerHTML +="<p> <b>Hola </b>  " + nombre+ " tienes " + edad+ "<b> anios y tu numero de DPI es: </b>" + dpi + " </p>";


// }


