$.menuId.addEventListener('click',function(){
	var page= Alloy.createController('menu').getView();
 	page.open();
});

$.reserva.addEventListener('click',function(){
	var nombre=$.nombre.value;
	var email=$.email.value;
	var fecha =$.fecha.value;
	var hora=$.hora.value;
	var numero=$.numero.value;
	if(nombre=='' ||  email=='' || fecha=='' || hora=='' || numero==''){
		alert("campos incompletos");
	}else{
		alert("Tu solicitud esta siendo procesada");
	}
	//var page= Alloy.createController('pide_menu').getView();
 	//page.open();||  
 	//alert(nombre);
});