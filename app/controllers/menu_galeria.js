/*
 * metodo para abrir el menù.
 * autor: jalomo <jalomo@hotmail.es>
 */
$.menuId.addEventListener('click',function(){
	var page= Alloy.createController('menu').getView();
 	page.open();
});

/*
 * funcion para mostrar una imagen, se crea un windows
 * se agrega una imagen y un view.
 * autor: jalomo <jalomo@hotmail.es>
 */
function open_image(e) {
    var win = Ti.UI.createWindow();
    var view = Titanium.UI.createView({
	   backgroundColor:'#000000',
	   opacity:'0.5',
	   width:'100%',
	   height:'100%'
	});
	win.add(view);
	win.open();

	var image = Ti.UI.createImageView({
	  image:e.source.image
	});
	win.add(image);
	
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
	
	
}