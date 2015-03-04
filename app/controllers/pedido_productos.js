$.menuId.addEventListener('click',function(){
	///var page= Alloy.createController('menu').getView();
 //	page.open();
 	$.pedido_productos.close();
});


pedidos_productos();
function pedido_productos(){
	
var scrollView1 = Ti.UI.createScrollView({
	  height: '100%',
	  layout:"vertical"
	}); 
	
	var json = Alloy.Globals.muestraPedidoId(Alloy.Globals.id_cliente);
	alert(json);
	for (s in json)
		    {
		        
		       
				var view2 = Titanium.UI.createView({
					   borderRadius:1,
					   border:2,
					   borderColor:'red',
					   backgroundColor:'#ffffff',
					   width:'100%',
					   top:1,
					   height:90,
					   id:json[s].codigo,
					   
					   
					});
					
					var label = Ti.UI.createLabel({
					  backgroundColor:'#ffffff',
					  color:'#212121',
					  text: json[s].nombre,
					 // textAlign: 'right',
					  bottom:0,
					  width: "90%", 
					  height:30,
					  top:0,
					  font: { fontSize:14 },
					  id:json[s].codigo,
					  //left:'20%'
					});
					view2.add(label);
					
					var codigo = Ti.UI.createLabel({
					  backgroundColor:'#ffffff',
					  color:'#B3B3B3',
					  text: "CÓDIGO:"+json[s].codigo,
					 // textAlign: 'right',
					  bottom:0,
					  width: "90%", 
					  height:30,
					  top:30,
					  font: { fontSize:14 },
					  id:json[s].codigo,
					  //left:'20%'
					});
					view2.add(codigo);
					
					var precio = Ti.UI.createLabel({
					  backgroundColor:'#ffffff',
					  color:'#87D37C',
					  text: 'Fecha:'+json[s].clienteFechaCreacion,
					 // textAlign: 'right',
					  bottom:0,
					  width: "90%", 
					  height:30,
					  top:60,
					  font: { fontSize:14 },
					  id:json[s].codigo,
					  //left:'20%'
					});
					//view1.add(precio);
					
					view2.addEventListener('click',function(e)
					{
						Alloy.Globals.id_cliente=e.source.id;
						alert(e.source.id);
					   pedidos=Alloy.Globals.muestraPedidoId(e.source.id);
 						alert(pedidos);
					    var page= Alloy.createController('pedido_productos').getView();
 						page.open();
					});
					
					
					
					
				    aux++;
					scrollView1.add(view2);
					
		    }
}

