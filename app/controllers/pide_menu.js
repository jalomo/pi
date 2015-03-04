$.menuId.addEventListener('click',function(){
	var page= Alloy.createController('menu').getView();
 	page.open();
});


$.ver_pedido.addEventListener('click',function(){
	//var pedidos=Alloy.Globals.muestraPedido();
	//alert(pedidos);
	var page= Alloy.createController('pedidos').getView();
 	page.open();
});
/*
 * metodo que despliega el menù .
 * autor: jalomo <jalomo@hotmail.es>
 */
function cl_menu(e){
	//alert(e.source.valor);
	
	if(e.source.valor=="0"){
		e.source.valor="1";
		$.id_menu.height="25";
		$.menus.visible="false";
	}else{
		e.source.valor="0";
		$.id_menu.height="200";
		$.menus.visible="true";
		
	}
}

carga_categorias(1);


/*
 * funcion que carga categorias.
 * jalomo<jalomo@hotmail.es>
 **/
function muestra(e){
	
	var view = Titanium.UI.createView({
	   borderRadius:1,
	   backgroundColor:'red',
	   width:'100%',
	   height:50
	});

	$.seleccion.text=e.source.valor_m;
	$.id_menu.height="25";
    $.menus.visible="false";
    var aux=e.source.valor_id;
 
    switch (aux) {
	case 'array_pizzas':
			carga_categorias(1);
		
	    break;
	case 'array_pastas':
	    carga_categorias(2);
	    break;
	case 'array_ensaladas':
	    carga_categorias(3);
	    break;
	case 'array_vinos':
	    carga_categorias(9);
	    break;
	case 'array_entremeses':
	    carga_categorias(4);
	    break;
	case 'array_especiales':
	    carga_categorias(8);
	    break; 
	case 'array_mariscos':
	    carga_categorias(5);
	    break;
	case 'array_postres':
	    carga_categorias(6);
	    break; 
	case 'array_carnes':
	    carga_categorias(7);
	    break;                           
	}
}



function carga_categorias(idcategoria){
	
	var scrollView1 = Ti.UI.createScrollView({
	  height: '100%',
	  layout:"vertical"
	});
	
	$.cargar_categorias.removeAllChildren();
	var url = "http://zavordigital.com/panel_pizzaiola/index.php/mobiles/get_precios/"+idcategoria;
	var json;
	 
	var xhr = Ti.Network.createHTTPClient({
	    onload: function() {
	 // parse the retrieved data, turning it into a JavaScript object
	    	json = JSON.parse(this.responseText);
	    	aux=0;
	 		for (s in json)
		    {
		        
		        
				var view1 = Titanium.UI.createView({
					   borderRadius:1,
					   border:2,
					   borderColor:'#cccccc',
					   backgroundColor:'#ffffff',
					   width:'100%',
					   top:1,
					   height:150,
					   id:'id'+aux,
					});
					var image = Ti.UI.createImageView({
					  image:'http://zavordigital.com/panel_pizzaiola/'+json[s].menuImage,
					   width:'120',
					   height:'120',
					   left:2
					});
					view1.add(image);
					
					var label = Ti.UI.createLabel({
					  backgroundColor:'#ffffff',
					  color:'red',
					  text: json[s].menuNombre,
					  textAlign: 'right',
					  bottom:0,
					  width: 150, 
					  height:100,
					  top:0,
					  font: { fontSize:10 },
					  left:'40%'
					});
					view1.add(label);
					
					var labelP = Ti.UI.createLabel({
					  backgroundColor:'#ffffff',
					  color:'red',
					  text: '$'+json[s].menuPrecio,
					  textAlign: 'right',
					  bottom:0,
					  width: 150, 
					  height:40,
					  top:70,
					  left:'40%'
					});
					view1.add(labelP);
					
					
					var textField = Ti.UI.createTextField({
					  borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
					  color: '#336699',
					  top: 100, left: '70%',
					  width: 50, height: 40,
					  backgroundColor:'#cccccc',
					  id:json[s].menuId,
					  precio:json[s].menuPrecio,
					  nombre:json[s].menuNombre,
					  
					  
					});
					view1.add(textField);
					
					textField.addEventListener('change',function(e){
					    e.source.value = e.source.value.replace(/[^0-9]+/,""); 
					});
					
					var label2 = Ti.UI.createLabel({
					  backgroundColor:'#ffffff',
					  color:'#cccccc',
					  text: 'Cantidad:',
					  textAlign: 'right',
					  top: 50, left: '40%',
					  width: 80, height: 40,
					  top:100
					});
					view1.add(label2);
					
					var buttonEnviar = Titanium.UI.createButton({
					   borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,	
					   title: '+',
					   top: 100,
					   width: 30,
					   height: 30,
					   backgroundColor:"blue",
					   color:'#ffffff',
					   left: '90%',
					   id:aux
					});
					buttonEnviar.addEventListener('click',function(e)
					{
					    var cantidad=scrollView1.children[e.source.id].children[3].value;
					    var precio=scrollView1.children[e.source.id].children[3].precio;
					    var id_producto=scrollView1.children[e.source.id].children[3].id;
					    var titulo=scrollView1.children[e.source.id].children[3].nombre;
					    if(cantidad!='0' || cantidad!=''){
					    	Alloy.Globals.insertPredido(titulo,precio,cantidad,id_producto);
					    	alert('Producto agregado '+cantidad);
					    }else{
					    	alert('escribe una cantidad');
					    }
			
					});
					view1.add(buttonEnviar);
					
				    aux++;
					scrollView1.add(view1);
					
		    }
		    
		   $.cargar_categorias.add(scrollView1);
		}
	});
	xhr.open("GET", url);
	xhr.send();
}
