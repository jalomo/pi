$.menuId.addEventListener('click',function(){
	var page= Alloy.createController('menu').getView();
 	page.open();
});

//Ti.Platform.openURL('fb://profile/restaurantepizzaiola');

Ti.Platform.openURL('http://www.facebok.com/restaurantepizzaiola');
