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





//NOTIFICACIONES PUSH
var Cloud = require("ti.cloud");
var deviceToken = null;
// Check if the device is running iOS 8 or later
if(OS_IOS){
	if (Ti.Platform.name == "iPhone OS" && parseInt(Ti.Platform.version.split(".")[0]) >= 8) {
	 
	 // Wait for user settings to be registered before registering for push notifications
	    Ti.App.iOS.addEventListener('usernotificationsettings', function registerForPush() {
	 
	 // Remove event listener once registered for push notifications
	        Ti.App.iOS.removeEventListener('usernotificationsettings', registerForPush); 
	 
	        Ti.Network.registerForPushNotifications({
	            success: deviceTokenSuccess,
	            error: deviceTokenError,
	            callback: receivePush
	        });
	    });
	 
	 // Register notification types to use
	    Ti.App.iOS.registerUserNotificationSettings({
		    types: [
	            Ti.App.iOS.USER_NOTIFICATION_TYPE_ALERT,
	            Ti.App.iOS.USER_NOTIFICATION_TYPE_SOUND,
	            Ti.App.iOS.USER_NOTIFICATION_TYPE_BADGE
	        ]
	    });
	}
	 
	// For iOS 7 and earlier
	else {
	    Ti.Network.registerForPushNotifications({
	 // Specifies which notifications to receive
	        types: [
	            Ti.Network.NOTIFICATION_TYPE_BADGE,
	            Ti.Network.NOTIFICATION_TYPE_ALERT,
	            Ti.Network.NOTIFICATION_TYPE_SOUND
	        ],
	        success: deviceTokenSuccess,
	        error: deviceTokenError,
	        callback: receivePush
	    });
	}
}
else{
	//Cuando es android 
	var CloudPush = require('ti.cloudpush');
	
	var deviceToken = null;
	 
	CloudPush.retrieveDeviceToken({
	    success: deviceTokenSuccess,
	    error: deviceTokenError
	});
};
// Process incoming push notifications
function receivePush(e) {
    Ti.API.info('Received push: ' + JSON.stringify(e));
}
// Save the device token for subsequent API calls
function deviceTokenSuccess(e) {
    deviceToken = e.deviceToken;
    Ti.API.info('Token: '+e.deviceToken);
    
     Cloud.PushNotifications.subscribeToken({
	        device_token: e.deviceToken,
	        channel: 'Pizzaiola',
	        type: Ti.Platform.name == 'android' ? 'android' : 'ios'
	    }, function (e) {
	        if (e.success) 
	            Ti.API.info('Subscribed');
	         else 
	            Ti.API.error('Error:\n' + ((e.error && e.message) || JSON.stringify(e))); 
	    });
}
function deviceTokenError(e) {
    Ti.API.error('Failed to register for push notifications! ' + e.error);
}
