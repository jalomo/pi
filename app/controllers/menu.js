$.menuId.addEventListener('click',function(){
	$.menu.close();
});


function menu_menu(e) {
    var page= Alloy.createController(e.source.valor).getView();
 	page.open();
}


function menu_facebook(e) {
   Ti.Platform.openURL('http://www.facebok.com/restaurantepizzaiola');
}