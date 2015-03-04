
//Ti.API.info('Cantidad de productos: '+ aux.length);

/*for(var i = 0; i < aux.length; i++){
	Ti.API.info('Nombre de producto '+ (i+1)+' '+ aux[i].titulo);
};
*/
//var win = Titanium.UI.currentWindow;
$.seguir_add.addEventListener('click',function(){
	//win.close();
	$.pedidos.close();
});

carga_categorias();
function carga_categorias(){
	var cadena = Alloy.Globals.muestraPedido();
	var scrollView1 = Ti.UI.createScrollView({
	  height: '100%',
	  layout:"vertical"
	});
	
	$.cargar_categorias.removeAllChildren();
	
	 
	for (s in cadena)
		    {
		        
		        
				var view1 = Titanium.UI.createView({
					   borderRadius:1,
					   border:2,
					   borderColor:'#cccccc',
					   backgroundColor:'#ffffff',
					   width:'100%',
					   top:1,
					   height:50,
					   id:'id'+cadena[s].id_producto
					});
					var image = Ti.UI.createImageView({
					  image:'/img/eliminar.png',
					   width:'20',
					   height:'20',
					   left:1,
					   id:cadena[s].id_producto
					});
					view1.add(image);
					image.addEventListener('click',function(e)
					{
					    var test=e.source.id;
					    Alloy.Globals.eliminarRegistro(test);
					    var cantidad=e.source.id;
					    carga_categorias();
					   
					    carga_categorias();
					    //alert(cantidad);
					    
					    
			
					});
					
					var canti = Ti.UI.createLabel({
					  backgroundColor:'#ffffff',
					  color:'#000000',
					  textAlign: 'left',
					  width: "30", height: 40,
					  top:1,
					  left:'22',
					  text:cadena[s].cantidad
					});
					view1.add(canti);
					
					var label2 = Ti.UI.createLabel({
					  backgroundColor:'#ffffff',
					  color:'#000000',
					  text: cadena[s].titulo,
					  textAlign: 'left',
					  left:'48',
					  width: "70%", height: 40,
					  top:1
					});
					view1.add(label2);
					
					var precio = Ti.UI.createLabel({
					  backgroundColor:'#ffffff',
					  color:'#000000',
					  text: '$'+cadena[s].precio,
					  textAlign: 'left',
					  left:'85%',
					  width: "50", height: 40,
					  top:1
					});
					view1.add(precio);
					
					
					
				    aux++;
					scrollView1.add(view1);
					
		    }
		    var view2 = Titanium.UI.createView({
					   borderRadius:1,
					   border:2,
					   borderColor:'#cccccc',
					   backgroundColor:'#ffffff',
					   width:'100%',
					   top:1,
					   height:50,
					   id:'id'
					});
			var label3 = Ti.UI.createLabel({
					  backgroundColor:'#ffffff',
					  color:'red',
					  text: "total:",
					  textAlign: 'left',
					  //left:'10',
					  width: "70%", height: 40,
					  top:1
					});
			var labeltotal = Ti.UI.createLabel({
					  backgroundColor:'#ffffff',
					  color:'#cccccc',
					  text: '$'+Alloy.Globals.totalPedido(),
					  textAlign: 'left',
					  left:'72%',
					  width: "70%", height: 40,
					  top:1
					});			
			view2.add(label3);	
			view2.add(labeltotal);
			scrollView1.add(view2);
			
			var icono = Ti.UI.createImageView({
					  image:'/img/icono.png',
					   width:'40%'
					});
			scrollView1.add(icono);	
			
			var labeltexto = Ti.UI.createLabel({
					  backgroundColor:'#ffffff',
					  color:'#cccccc',
					  text: "Gracias por ordenar en linea, le enviaremos un correo electrónico convirmando su pedido.",
					  textAlign: 'center',
					  //left:'10',
					  width: "70%", height: 100,
					  top:1
					});
		   scrollView1.add(labeltexto);	
		   
		   var buttonEnviar = Titanium.UI.createButton({
					   borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,	
					   title: 'Llamar',
					   width: '90%',
					   height: 40,
					   backgroundColor:"blue",
					   color:'#ffffff'
					});
		   buttonEnviar.addEventListener('click',function(){
				alert("Tu pedido está siendo procesado");
			});
			
		   scrollView1.add(buttonEnviar);						
		   $.cargar_categorias.add(scrollView1);
}