$.menuId.addEventListener('click',function(){
	var page= Alloy.createController('menu').getView();
 	page.open();
});

carga_imagen();
function carga_imagen(){
	
	
	
	var url = "http://zavordigital.com/panel_pizzaiola/index.php/mobiles/get_grupo";
	var json;
	 
	var xhr = Ti.Network.createHTTPClient({
	    onload: function() {
	 // parse the retrieved data, turning it into a JavaScript object
	    	json = JSON.parse(this.responseText);
	    	
	    	for (s in json)
		    {
		    	var image = Ti.UI.createImageView({
					  image:'http://zavordigital.com/panel_pizzaiola/'+json[s].imagenGrupo,
					   width:'100%',
					   height:'100%',
					   left:2
					});
				$.imagen_grupo.add(image);	
		    }
	 		 
		        
		    
		   
		}
	});
	xhr.open("GET", url);
	xhr.send();
}
