// The contents of this file will be executed before any of
// your view controllers are ever executed, including the index.
// You have access to all functionality on the `Alloy` namespace.
//
// This is a great place to do any initialization for your app
// or create any global variables/functions that you'd like to
// make available throughout your app. You can easily make things
// accessible globally by attaching them to the `Alloy.Globals`
// object. For example:
//
// Alloy.Globals.someGlobalFunction = function(){};
/*
 * se crea la base de datos
 * jalomo<jalomo@hotmail.es>
 * */
var db = Ti.Database.open('pizzaiola');
db.execute('CREATE TABLE IF NOT EXISTS pedido(id INTEGER PRIMARY KEY,titulo TEXT, precio TEXT, cantidad TEXT, id_producto INTEGER);');
db.execute('CREATE TABLE IF NOT EXISTS pide(id INTEGER PRIMARY KEY,nombre TEXT, email TEXT, telefono TEXT, calle TEXT, colonia TEXT);');

Alloy.Globals.insertPredido = function(titulo,precio,cantidad,id_producto){
	var verifica = db.execute('SELECT id_producto FROM pedido WHERE id_producto = '+ id_producto);
	 if (verifica.isValidRow()){
	     db.execute('DELETE  FROM pedido WHERE id_producto = '+ id_producto);
	     db.execute('INSERT INTO pedido(titulo, precio, cantidad, id_producto) VALUES (?,?,?,?)',titulo, precio, cantidad,id_producto);
	 }else{
	  db.execute('INSERT INTO pedido(titulo, precio, cantidad, id_producto) VALUES (?,?,?,?)',titulo, precio, cantidad,id_producto);
	 } 
	  
	  
	
	//db.close();
};

Alloy.Globals.eliminarRegistro=function(id){
	db.execute('DELETE  FROM pedido WHERE id_producto = '+ id);
};
/*
 * listado de productos
 * jalomo<jalomo@hotmail.es>
 * */
Alloy.Globals.muestraPedido=function(){
	var rows = db.execute('SELECT * FROM pedido');
	//db.close();
	var valores = [];
	
	 if (rows.isValidRow()){
	 	var contador=0;
	     while (rows.isValidRow())
		{
			 //test+='titulo:'+rows.fieldByName('titulo')+'-precio:'+rows.fieldByName('precio')+'-cantidad:'+rows.fieldByName('cantidad')+'-id_producto:'+rows.fieldByName('id_producto');
		 valores[contador]= {
			 	titulo: rows.fieldByName('titulo'),
			 	precio: rows.fieldByName('precio'),
			 	cantidad: rows.fieldByName('cantidad'),
			 	id_producto: rows.fieldByName('id_producto')
			 };
		 contador = contador +1;
		 rows.next();
		}
		//rows.close();
		return valores;
	}
	//else{
	//  return 0;
	// }
};

/*
 * metodo para obtener el total de un pedido.
 * jalomo<jalomo@hotmail.es>
 */
Alloy.Globals.totalPedido=function(){
	var rows = db.execute('SELECT * FROM pedido');
	//db.close();
	var total = 0;
	
	 if (rows.isValidRow()){
	 	var contador=0;
	     while (rows.isValidRow())
		{
			 //test+='titulo:'+rows.fieldByName('titulo')+'-precio:'+rows.fieldByName('precio')+'-cantidad:'+rows.fieldByName('cantidad')+'-id_producto:'+rows.fieldByName('id_producto');
		 total+=(parseInt(rows.fieldByName('precio'))* parseInt(rows.fieldByName('cantidad')));
		 contador = contador +1;
		 rows.next();
		}
		//rows.close();
		return total;
	}
};
/*
Alloy.Globals.insertAlarma = function(id){
	db.execute('INSERT INTO pasarelas(id_alarma, activa) VALUES (?,?)', id, 'true');
};

Alloy.Globals.insertConferencia = function(id){
	db.execute('INSERT INTO conferencias(id_conferencia, activa) VALUES (?,?)', id, 'true');
};


Alloy.Globals.searchAlarma = function(id){
	var contenido = db.execute('SELECT id_alarma FROM pasarelas WHERE id_alarma = '+ id);
	 if (contenido.isValidRow())
	     contenido=1;
	 else
	  contenido = 0;
	  
	  
	  return contenido;
};

Alloy.Globals.searchConferencia = function(id){
	var contenido = db.execute('SELECT id_conferencia FROM conferencias WHERE id_conferencia = '+ id);
	 if (contenido.isValidRow())
	     contenido=1;
	 else
	  contenido = 0;
	  
	  
	  return contenido;
};
*/