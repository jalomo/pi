$.menuId.addEventListener('click',function(){
	var page= Alloy.createController('menu').getView();
 	page.open();
});

$.call_id.addEventListener('click', function(e) {
 
   // var intent = Ti.iPhone.createIntent({
    //    action : Ti.iPhone.ACTION_CALL,
     //   data : 'tel:0499126664'
   // });
    //Ti.Android.currentActivity.startActivity(intent);
    Ti.Platform.openURL('tel://0499126664');
 
});