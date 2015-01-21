$.menuId.addEventListener('click',function(){
	var page= Alloy.createController('menu').getView();
 	page.open();
});

$.continuar.addEventListener('click',function(){
	var nombre=$.nombre.value;
	var email=$.email.value;
	var telefono =$.telefono.value;
	var calle=$.calle.value;
	var colonia=$.colonia.value;
	if(nombre=='' ||  email=='' || telefono=='' || calle=='' || colonia==''){
		alert("campos incompletos");
	}else{
		var page= Alloy.createController('pide_menu').getView();
 	    page.open();
	}
	//var page= Alloy.createController('pide_menu').getView();
 	//page.open();||  
 	//alert(nombre);
});
