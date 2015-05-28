$.menuId.addEventListener('click',function(){
	var page= Alloy.createController('menu').getView();
 	page.open();
});


	function cl_menu(e){
		
		if(OS_IOS){
	
		//alert(e.source.valor);
		
		if(e.source.valor=="0"){
			e.source.valor="1";
			$.id_menu.height="45";
			$.menus.visible="false";
		}else{
			e.source.valor="0";
			$.id_menu.height="300";
			$.menus.visible="true";
			
			var picker = Titanium.UI.createPicker();
			var data = [];
			data.push(Titanium.UI.createPickerRow({title:'Antipasti',id:'uno'}));
			data.push(Titanium.UI.createPickerRow({title:'Ensalate',id:'dos'}));
			data.push(Titanium.UI.createPickerRow({title:'Del Mare',id:'tres'}));
			data.push(Titanium.UI.createPickerRow({title:'La Pasta',id:'cuatro'}));
			data.push(Titanium.UI.createPickerRow({title:'Cortes al horno de leña',id:'cinco'}));
			data.push(Titanium.UI.createPickerRow({title:'Le Pizze al Horno de Leña',id:'seis'}));
			data.push(Titanium.UI.createPickerRow({title:'Postres',id:'siete'}));
			data.push(Titanium.UI.createPickerRow({title:'Bebidas',id:'ocho'}));
			data.push(Titanium.UI.createPickerRow({title:'Licores',id:'nueve'}));
			data.push(Titanium.UI.createPickerRow({title:'Vinos',id:'diez'}));
			data.push(Titanium.UI.createPickerRow({title:'Sugerencia del Chef',id:'once'}));
			data.push(Titanium.UI.createPickerRow({title:'Especiales',id:'doce'}));
			picker.add(data);
			$.menus.add(picker);
			
			var button = Titanium.UI.createButton({
							   title: 'aceptar',
							   //top: 10,
							   width: 100,
							   height: 50,
							   //right:5,
							   color:'#ffffff',
							   backgroundColor:'#2980B9'
							});
			button.addEventListener('click',function(){
				//alert(picker.getSelectedRow(0).id);
				$.seleccion.text=picker.getSelectedRow(0).title;
				$.id_menu.height="45";
   			    $.menus.visible="false";
   			    
   			    muestra(picker.getSelectedRow(0).id);
			});
			
							
							
			
			$.menus.add(button);
			
		}
		
		
	
		
		}else{
		
			
		}	
}
	

	if (OS_IOS) {}else{
		
		$.id_cl.removeAllChildren();
		
		
			$.id_cl.backgroundColor='#2980b0';
			var picker = Titanium.UI.createPicker({width:"100%",color:'#000000'});
			var data = [];
			data.push(Titanium.UI.createPickerRow({title:'Antipasti',id:'uno'}));
			data.push(Titanium.UI.createPickerRow({title:'Ensalate',id:'dos'}));
			data.push(Titanium.UI.createPickerRow({title:'Del Mare',id:'tres'}));
			data.push(Titanium.UI.createPickerRow({title:'La Pasta',id:'cuatro'}));
			data.push(Titanium.UI.createPickerRow({title:'Cortes al horno de leña',id:'cinco'}));
			data.push(Titanium.UI.createPickerRow({title:'Le Pizze al Horno de Leña',id:'seis'}));
			data.push(Titanium.UI.createPickerRow({title:'Postres',id:'siete'}));
			data.push(Titanium.UI.createPickerRow({title:'Bebidas',id:'ocho'}));
			data.push(Titanium.UI.createPickerRow({title:'Licores',id:'nueve'}));
			data.push(Titanium.UI.createPickerRow({title:'Vinos',id:'diez'}));
			data.push(Titanium.UI.createPickerRow({title:'Sugerencia del Chef',id:'once'}));
			data.push(Titanium.UI.createPickerRow({title:'Especiales',id:'doce'}));
			picker.add(data);
			$.id_cl.add(picker);
			
			
			picker.addEventListener('change',function(){
				//alert(picker.getSelectedRow(0).id);
				//$.seleccion.text=picker.getSelectedRow(0).title;
				
   			    
   			    muestra(picker.getSelectedRow(0).id);
			});
	}





/*
 * metodo que despliega el menù que se eligio.
 * jalomo@hotmail.es
 */
function muestra(aux){
	
    //alert(aux);
    switch (aux) {
	case 'uno':
		//TheTable.setData(array_pizzas);
		carga_categorias(1);
	    break;
	case 'dos':
	    //TheTable.setData(array_pastas);
	    carga_categorias(2);
	    break;
	case 'tres':
	    //TheTable.setData(array_ensaladas);
	    carga_categorias(3);
	    break;
	case 'cuatro':
	    //TheTable.setData(array_vinos);
	    carga_categorias(4);
	    break;
	case 'cinco':
	    //TheTable.setData(array_entremeses);
	    carga_categorias(5);
	    break;
	case 'seis':
	    //TheTable.setData(array_especiales);
	    carga_categorias(6);
	    break; 
	case 'siete':
	    //TheTable.setData(array_mariscos);
	    carga_categorias(7);
	    break;
	case 'ocho':
	    //TheTable.setData(array_postres);
	    carga_categorias(8);
	    break; 
	case 'nueve':
	    //TheTable.setData(array_carnes);
	    carga_categorias(9);
	    break;   
    case 'diez':
	    //TheTable.setData(array_carnes);
	    carga_categorias(10);
	    break; 
	case 'once':
	    //TheTable.setData(array_carnes);
	    carga_categorias(11);
	    break; 
	case 'doce':
	    //TheTable.setData(array_carnes);
	    carga_categorias(12);
	    break;           	                            
	}
	
    
    
}

carga_categorias(1);

	
function carga_categorias(idcategoria){
	
	var scrollView1 = Ti.UI.createScrollView({
	 // height: 'auto',
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
					   height:213,
					   
					  id:'id'+aux,
					});
					var image = Ti.UI.createImageView({
					 image:'http://zavordigital.com/panel_pizzaiola/'+json[s].menuImage,
					   width:'117',
					   height:'210',
					   left:0
					});
				    image.addEventListener('click',function(e){
						
						var win = Ti.UI.createWindow();
					    var view = Titanium.UI.createView({
						   backgroundColor:'#000000',
						   opacity:'0.5',
						   width:'100%',
						   height:'100%'
						});
						win.add(view);
						
					
						var image1 = Ti.UI.createImageView({
						  image:e.source.image,
						  width:'100%',
							
						});
						win.add(image1);
						
						var button = Titanium.UI.createButton({
						   title: 'cerrar',
						   top: 10,
						   width: 100,
						   height: 50,
						   right:5,
						   color:'#ffffff'
						});
						win.add(button);
						button.addEventListener('click',function(e)
						{
						   win.close();
						});
						
						
						win.open();
						
						
						
					});
					
					
					view1.add(image);
					
					var label = Ti.UI.createLabel({
					  backgroundColor:'#ffffff',
					  color:'#e74c3c',
					  text:json[s].menuNombre,
					  //textAlign: 'right',
					  //bottom:0,
					  width: "60%", 
					  height:70,
					  top:10,
					  font: { fontSize:15 },
					  left:'130'
					});
					view1.add(label);
					
					var label2 = Ti.UI.createLabel({
					  backgroundColor:'#ffffff',
					  color:'#7f8c8d',
					  text: json[s].menuDescripcion,
					  //textAlign: 'right',
					  //bottom:0,
					  width: "57%", 
					  height:150,
					 top:70,
					  font: { fontSize:15 },
					  left:'130'
					});
					view1.add(label2);
					
					
					
				
					
				    aux++;
					scrollView1.add(view1);
					
		    }
		    
		   $.cargar_categorias.add(scrollView1);
		}
	});
	xhr.open("GET", url);
	xhr.send();
}


