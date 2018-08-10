var elementos = document.querySelectorAll("[data-color]");
var tallas = document.querySelectorAll("[data-talla]");

rojo.addEventListener("click", function (){
  for(var i = 0; i < elementos.length; i++){
    if(elementos[i].dataset.color == "rojo"){
      elementos[i].style.display = "block";
    } else {
      elementos[i].style.display = "none";
    }
  }
});

blanco.addEventListener("click", function (){
	for(var i = 0; i < elementos.length; i++){
    if(elementos[i].dataset.color == "blanco"){
      elementos[i].style.display = "block";
    } else {
      elementos[i].style.display = "none";
    }
  }
});



negro.addEventListener("click", function (){
	for(var i = 0; i < elementos.length; i++){
    if(elementos[i].dataset.color == "negro"){
      elementos[i].style.display = "block";
    } else {
      elementos[i].style.display = "none";
    }
  }
});


treintaCinco.addEventListener("click", function (){
	for(var i = 0; i < tallas.length; i++){
		if(tallas[i].dataset.talla == "35"){
			tallas[i].style.display = "block";
		} else {
			tallas[i].style.display = "none";
		}
	}
});

treintaSeis.addEventListener("click", function (){
	for(var i = 0; i < tallas.length; i++){
		if(tallas[i].dataset.talla == "36"){
			tallas[i].style.display = "block";
		} else {
			tallas[i].style.display = "none";
		}
	}
});


treintaSiete.addEventListener("click", function (){
	for(var i = 0; i < tallas.length; i++){
		if(tallas[i].dataset.talla == "37"){
			tallas[i].style.display = "block";
		} else {
			tallas[i].style.display = "none";
		}
	}
});


cuarenta.addEventListener("click", function (){
	for(var i = 0; i < tallas.length; i++){
		if(tallas[i].dataset.talla == "40"){
			tallas[i].style.display = "block";
		} else {
			tallas[i].style.display = "none";
		}
	}
});




