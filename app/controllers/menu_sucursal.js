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

var mapModule=require('ti.map');

var opera = mapModule.createAnnotation({
	    latitude: '21.923742',
	    longitude: '-102.296800',
	    title: 'Pizzaiola',
	    subtitle: 'Pizzaiola',
	    pincolor: mapModule.ANNOTATION_RED
	});
	
	var mapview = mapModule.createView({
		mapType:mapModule.NORMAL_TYPE,
		region: {latitude: '21.923742', longitude: '-102.296800', latitudeDelta: 0.01, longitudeDelta: 0.01 },
		annotations: [opera],
		width:Ti.UI.FILL,
		height:Ti.UI.FILL ,
		//top:290,
	});
	
	
	
	$.mapa.add(mapview);