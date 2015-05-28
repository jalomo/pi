$.menuId.addEventListener('click',function(){
	var page= Alloy.createController('menu').getView();
 	page.open();
});

var picker = Titanium.UI.createPicker();
var data = [];
data.push(Titanium.UI.createPickerRow({title:'Bananas'}));
data.push(Titanium.UI.createPickerRow({title:'Strawberries'}));
data.push(Titanium.UI.createPickerRow({title:'Mangos'}));
data.push(Titanium.UI.createPickerRow({title:'Grapes'}));
picker.add(data);

$.cargar_categorias.add(picker);


/*
 * metodo que despliega el menù .
 * autor: jalomo <jalomo@hotmail.es>
 */
function cl_menu(e){
	//alert(e.source.valor);
	
	if(e.source.valor=="0"){
		e.source.valor="1";
		$.id_menu.height="45";
		$.menus.visible="false";
	}else{
		e.source.valor="0";
		$.id_menu.height="440";
		$.menus.visible="true";
		
	}
}

var array_pizzas = [
 
{ leftImage:'/img/pizzas/200/uno.png', title:"CALZONE RELLENO DE CHAMPIÑONES, QUESO MOZZARELLA, SALCHICHA ITALIANA Y HUEVO", hasChild:true , color: '#E74C3C' },
{ leftImage:'/img/pizzas/200/dos.png', title:"FOCACCIOA BLANCA, QUESO MOZZARELLA QUESO PROVOLONE Y PARMESANO", hasChild:true, color: '#E74C3C'  },
{ leftImage:'/img/pizzas/200/tres.png', title:"PIZZA FOCCACIA BLANC CON MEZCLA DE LECHUGAS, JAMÒN DE PIERNA, QUESO PARMESANO Y TOMATE CHERRY", hasChild:true , color: '#E74C3C' },
{ leftImage:'/img/pizzas/200/cuatro.png', title:"PIZZA GALLO ROSSO", hasChild:true , color: '#E74C3C' },
{ leftImage:'/img/pizzas/200/cinco.png', title:"PIZZA HAWAIANA SALSA DE JITOMATE", hasChild:true , color: '#E74C3C' },
{ leftImage:'/img/pizzas/200/seis.png', title:"PIZZA MARCE MOINTI, CAMARONES, PIMIENTO MORRÓN, CEBOLLA Y CHAMÌÑONES", hasChild:true , color: '#E74C3C' },
{ leftImage:'/img/pizzas/200/siete.png', title:"PIZZA PEPERONI, SALSA DE JITOMATE", hasChild:true , color: '#E74C3C' },
{ leftImage:'/img/pizzas/200/ocho.png', title:"PIZZA SALMONE, QUESO MOZZARELLA, SALMONE FRESCO, CEBOLLA MORADA, ACAPARRAS Y PEREJIl", hasChild:true , color: '#E74C3C' },
{ leftImage:'/img/pizzas/200/nueve.png', title:"PIZZA SICILIANA, ACEITUNAS, ANCHOAS, ALCAPARRAS Y AJO", hasChild:true , color: '#E74C3C' }
];

var array_pastas = [
 
{ leftImage:'/img/pastas//200/uno.png', title:"FETTUCCINE A LA BOSCAIOLA, FETTUCCINE HECHAS A MANO CON SALSA HECHA DE CHICHAROS, CHAMPIÑONES Y SALCHICHA ITALIANA", hasChild:true , color: '#E74C3C' },
{ leftImage:'/img/pastas/200/dos.png', title:"FETTUCCINE CON LANGOSTA", hasChild:true, color: '#E74C3C'  },
{ leftImage:'/img/pastas/200/tres.png', title:"FETTUCCINE TRI COLORE CON CAMARONES A LA DIAVOLA", hasChild:true , color: '#E74C3C' },
{ leftImage:'/img/pastas/200/cuatro.png', title:"LASAGNA CLÀSICA AL HORNO DE LEÑA", hasChild:true, color: '#E74C3C'  },
{ leftImage:'/img/pastas/200/cinco.png', title:"LASAGNA, LAS TIRAS DE LASAGNA ESTAN ECHAS A MANO, SALSA A LA BOLOÑESA Y COCIMIENTO EN HORNO DE LEÑA", hasChild:true, color: '#E74C3C'  },
{ leftImage:'/img/pastas/200/seis.png', title:"LINGUINE FRUTTI DE MARE, CAMARÒN, PULPO, ALMEJA, MEJILLONES, TODO AL VINO BLANCO CON UN TOQUE DE CHILE", hasChild:true, color: '#E74C3C'  },
{ leftImage:'/img/pastas/200/siete.png', title:"PASTA CON CAMARONES JUMBO SPAGHETTI CON CAMARONES EN SALSA ROSE", hasChild:true, color: '#E74C3C'  },
{ leftImage:'/img/pastas/200/ocho.png', title:"PASTA FETTUCCINI CON CAMARONES AL VINO BLANCO, PREPARADOS AL HORNO DE LEÑA", hasChild:true, color: '#E74C3C'  },
{ leftImage:'/img/pastas/200/nueve.png', title:"RAVIOLI DE PROSCIUTTO RAVIOLES HECHOS A MANO RELLENO DE JAMON SERRANO EN SALSA ROSE", hasChild:true, color: '#E74C3C'  },
{ leftImage:'/img/pastas/200/diez', title:"SPAGHETTI AGLIO OLIO È PEPERONCINO, AJO, ACEITE Y CHILE", hasChild:true, color: '#E74C3C'  },
{ leftImage:'/img/pastas/200/once', title:"SPAGHETTI ALLA CAMPESINA SALSA DE POMODORE", hasChild:true, color: '#E74C3C'  },
{ leftImage:'/img/pastas/200/doce.png', title:"SPAGHETTI BOLONGNESA CON SALSA ESPECIAL DE LA CASA", hasChild:true, color: '#E74C3C'  }
];

var array_ensaladas = [
 
{ leftImage:'/img/ensaladas/200/uno.png', title:"CLÀSICA ENSALADA CAPRESE", hasChild:true,color: '#E74C3C' },
{ leftImage:'/img/ensaladas/200/dos.png', title:"ENSALADA AGRIDULCE MEZCLA DE ENS ITALIANA", hasChild:true, color: '#E74C3C'  },
{ leftImage:'/img/ensaladas/200/tres.png', title:"ENSALADA AGRIDULCE MEZCLA DE ENS ITALIANA", hasChild:true , color: '#E74C3C' },
{ leftImage:'/img/ensaladas/200/cuatro.png', title:"ENSALADA CAPRESE CON ACEITUNAS CALAMATA", hasChild:true, color: '#E74C3C'  },
{ leftImage:'/img/ensaladas/200/cinco.png', title:"ENSALADA CÈSAR CON POLLO", hasChild:true, color: '#E74C3C'  },
{ leftImage:'/img/ensaladas/200/seis.png', title:"ENSALADA CÈSAR", hasChild:true, color: '#E74C3C'  },
{ leftImage:'/img/ensaladas/200/siete.png', title:"ENSALADA DE PALMITO", hasChild:true , color: '#E74C3C' },
{ leftImage:'/img/ensaladas/200/ocho.png', title:"ENSALADA DE ROQUEFORT", hasChild:true, color: '#E74C3C'  },
{ leftImage:'/img/ensaladas/200/nueve.png', title:"ENSALADA DE GRECA", hasChild:true, color: '#E74C3C'  },
{ leftImage:'/img/ensaladas/200/diez.png', title:"ENSALADA MEDITERRÀNEA", hasChild:true , color: '#E74C3C' },
{ leftImage:'/img/ensaladas/200/once.png', title:"ENSALADA MIXTA", hasChild:true , color: '#E74C3C' }
];

var array_vinos = [
 
{ leftImage:'/img/vinos/200/uno.jpg', title:"Daymán Tannat Vino Tinto Cepas: base Tannat Región: La Caballada, Uruguay Crianza: 12 meses en barrica de roble francés de 2do uso, y americano.", hasChild:true, color: '#E74C3C'  },
{ leftImage:'/img/vinos/200/uno.jpg', title:"Punta del Cielo Tannat - Merlot Vino Tinto Cepas: Tannat, Merlot Región: El Colorado, Canelones Uruguay Crianza: sin paso por barrica ", hasChild:true , color: '#E74C3C' },
{ leftImage:'/img/vinos/200/uno.jpg', title:"Punta del Cielo Cabernet Sauvignon- Carmenere Vino Tinto Cepas: 70% Cabernet Sauvignon, 30% Carmenere Región: Valle de Colchagua Crianza: Tanques de acero inoxidable. ", hasChild:true, color: '#E74C3C'  },
{ leftImage:'/img/vinos/200/uno.jpg', title:"Luis Felipe Edwards Cabernet Carmenere; Valle de Colchagua, .Se dice que el vino carmenere es la variedad emblemática de Chile", hasChild:true , color: '#E74C3C' },
{ leftImage:'/img/vinos/200/uno.jpg', title:"Protos Crianza El tiempo de espera para disfrutar de este vino es de 26 meses: 14 meses en barrica de roble americano y francés, y otros 12 en su propia botella.", hasChild:true , color: '#E74C3C' },
{ leftImage:'/img/vinos/200/uno.jpg', title:"Faustino V La gama de Faustino V se compone de un vino tinto reserva, un rosado y un blanco.", hasChild:true , color: '#E74C3C' },
{ leftImage:'/img/vinos/200/uno.jpg', title:"Diamante Rosado Semidulce. Se amplia así la familia con una nueva referencia de la marca Diamante, un vino que nunca deja de estar de moda. ", hasChild:true , color: '#E74C3C' },
{ leftImage:'/img/vinos/200/uno.jpg', title:"ENTRETANTO  Año:	2007 Origen:	Aguascalientes, México Productor:	Aborigen", hasChild:true , color: '#E74C3C' },
{ leftImage:'/img/vinos/200/uno.jpg', title:"Tabla Número Uno.Este vino es obra del afamado enólogo Hugo D’Acosta, vinificado en Baja California y elaborado con uva 100% Malbec producida en Ojo Caliente, Zacatecas, a más de 2 mil metros de altura", hasChild:true , color: '#E74C3C' },
{ leftImage:'/img/vinos/200/uno.jpg', title:"QUERQUS Aunque el dorado es muy de la cepa Chenin, aquí sorprende por la juventud del vino; no así sus aromas, que irrumpen, intensos y frutales, con notas de durazno, manzana roja, pasto cortado y piel de naranja.", hasChild:true , color: '#E74C3C' },
{ leftImage:'/img/vinos/200/uno.jpg', title:"PIONERO Un vino que muestra en el color su marcha hacia la madurez, entre tonalidades granates y rubíes. ", hasChild:true , color: '#E74C3C' },
{ leftImage:'/img/vinos/200/uno.jpg', title:"Monte Xanic Chardonnay Nota de cata. Vista: color amarillo dorado pálido muy brillante.", hasChild:true , color: '#E74C3C' },
{ leftImage:'/img/vinos/200/uno.jpg', title:"Moët & Chandon, Es uno de los champagnes más conocidos y vendidos del mundo. Se carecteriza por su color amarillo pálido, algo verdoso.", hasChild:true , color: '#E74C3C' },
{ leftImage:'/img/vinos/200/uno.jpg', title:"Mouton Cadet Blanco Categoría: Blanco Bodega: Baron Philippe Rotschild País: Francia Región vinícola: Bordeaux Año de cosecha: 2013", hasChild:true , color: '#E74C3C' },
{ leftImage:'/img/vinos/200/uno.jpg', title:"VINO TINTO CHATEAUNEUF DU PAPE Descripción Región:	VALLE DEL RÓDANO Bodega:	CHATEAUNEUF DU PAPE País:	FRANCIA", hasChild:true , color: '#E74C3C' },
{ leftImage:'/img/vinos/200/uno.jpg', title:" Por una Cabeza Chardonnay Argentino bueno, bonito, y barato. ", hasChild:true , color: '#E74C3C' },
{ leftImage:'/img/vinos/200/uno.jpg', title:"Callejón del Crimen Cabernet Sauvignon NOTAS DE CATA: Rojo rubí profundo con tintes azulados, muy brillantes.", hasChild:true , color: '#E74C3C' },
{ leftImage:'/img/vinos/200/uno.jpg', title:"Vino Nobile di Montepulciano Es un vino tinto producido en los viñedos que rodean la ciudad de Montepulciano, Italia.", hasChild:true , color: '#E74C3C' },
{ leftImage:'/img/vinos/200/uno.jpg', title:"Finca La Linda | Malbec Finca La Linda Malbec es un vino de color rojo intenso con aromas nítidos a guindas y especias, bien típicas de la variedad.", hasChild:true , color: '#E74C3C' },
{ leftImage:'/img/vinos/200/uno.jpg', title:"Punta del Cielo Malbec Vino Tinto Cepas: 100% Malbec Región: Valle de Uco, Tunuyán, Mendoza. Crianza: No tiene paso por barrica. ", hasChild:true , color: '#E74C3C' },
{ leftImage:'/img/vinos/200/uno.jpg', title:" Montepulciano Aunque Montepulciano es un encantador pueblo de la Toscana, el vino Montepulciano d'Abruzzo es elaborado en la región del centro de Italia llamada Abruzzo", hasChild:true , color: '#E74C3C' }
];

var array_entremeses = [
 
{ leftImage:'/img/entremeses/200/uno.png', title:"CARPACCIO DE BREASOLA CON RODAJA DE QUESO DE CABRA (MADURADO MAGRO DE RES CURADO CON ESPECIAS)", hasChild:true, color: '#E74C3C'  },
{ leftImage:'/img/entremeses/200/dos.png', title:"ENTREMÉS BRUSCHETTA, JITOMATE EN CUBOS SAZONADO CON ALBAHACA, AJO Y VINAGRE BALSÁMICO, ACOMPAÑADA DE PAN CASERO", hasChild:true, color: '#E74C3C'  },
{ leftImage:'/img/entremeses/200/tres.png', title:"PLATO DE PROSCUITTO (EPÍTOME DEL MINIMALISMO)", hasChild:true, color: '#E74C3C'  },
{ leftImage:'/img/entremeses/200/cuatro.png', title:"PLATÓN DE VERDURAS ASADAS, BERENJENA, CALABAZA, MORRÓN, UNA CORONA DE CEBOLLA MORADA200", hasChild:true , color: '#E74C3C' },
{ leftImage:'/img/entremeses/200/cinco.png', title:"PORTOBELLO AL HORNO DE LEÑA Y AROMAS MEDITERRÁNEOS", hasChild:true , color: '#E74C3C' },
{ leftImage:'/img/entremeses/200/seis.png', title:"PROSCUITTO PREMIUM CON QUESO MOZZARELLA", hasChild:true , color: '#E74C3C' },
{ leftImage:'/img/entremeses/200/siete.png', title:"SOPA MINESTRONE", hasChild:true , color: '#E74C3C' },
{ leftImage:'/img/entremeses/200/ocho.png', title:"TABLA DE QUESOS Y CARNES FRÍAS", hasChild:true , color: '#E74C3C' },
{ leftImage:'/img/entremeses/200/nueve.png', title:"TABLA PEQUEÑA DE QUESOS Y CARNES FRÍAS, IDEAL PARA COMPARTIR", hasChild:true , color: '#E74C3C' }
];

var array_especiales = [
 
{ leftImage:'/img/especiales/200/uno.png', title:"PATO A LA NARANJA (PEDIDO ESPECIAL)", hasChild:true , color: '#E74C3C' }
];

var array_mariscos = [
 
{ leftImage:'/img/mariscos/200/uno.png', title:"ATÚN FRESCO SELLADO (ATUN SELLADO CON ADEREZO VERDE HECHO CON PEREJIL, ALCAPARRAS Y ANCHOAS)", hasChild:true , color: '#E74C3C' },
{ leftImage:'/img/mariscos/200/dos.png', title:"ATÚN SELLADO CON SALSA DE PEREHIL Y ALCAPARRAS", hasChild:true , color: '#E74C3C' },
{ leftImage:'/img/mariscos/200/tres.png', title:"CALAMARES Y ZUCCHINE CAPEADOS CALAMARES CON CALABAZAS CAPEADOS CON ADEREZO DE MAYONESA CON ANCHOAS", hasChild:true , color: '#E74C3C' },
{ leftImage:'/img/mariscos/200/cuatro.png', title:"CAMARONES A LA AJILLO SALTEADOS CON CHILE AJILLO", hasChild:true , color: '#E74C3C' },
{ leftImage:'/img/mariscos/200/cinco.png', title:"CAMARONES CAPEADOS CON SALSA TÁRTARA DE LA CASA", hasChild:true , color: '#E74C3C' },
{ leftImage:'/img/mariscos/200/seis.png', title:"CARPACCIO DE PEZ ESPADA , PEPINO, CHILE SERRANO Y ALBAHACA", hasChild:true , color: '#E74C3C' },
{ leftImage:'/img/mariscos/200/siete.png', title:"CROSTINI DE SALMÓN AHUMADO (PLATILLO DE TEMPORADA)", hasChild:true , color: '#E74C3C' },
{ leftImage:'/img/mariscos/200/ocho.png', title:"LANGOSTAS AL HORNO DE LEÑA (PLATILLO DE TEMPORADA)", hasChild:true , color: '#E74C3C' },
{ leftImage:'/img/mariscos/200/nueve.png', title:"LOMO DE DORADO PARA COMPARTIR, CON GUARNICIÓN DE PAPAS AL ROMERO, ENSALADA Y VERDURA ASADA", hasChild:true , color: '#E74C3C' },
{ leftImage:'/img/mariscos/200/diez.png', title:"LOMO DE PEZ ESPADA EN SALSA MUGNANA Y VERDURAS AL HORNO", hasChild:true , color: '#E74C3C' },
{ leftImage:'/img/mariscos/200/once.png', title:"MEJILLONES Y ALMEJAS AL VINO BLANCO", hasChild:true , color: '#E74C3C' },
{ leftImage:'/img/mariscos/200/doce.png', title:"PESCADO TOURBOT CON AROMAS MEDITERRÁNEOS A LA LECÑA", hasChild:true , color: '#E74C3C' },
{ leftImage:'/img/mariscos/200/trece.png', title:"PLATÓN DE CAMARONES JUMBO (PLATILLO DE TEMPORADA)", hasChild:true , color: '#E74C3C' },
{ leftImage:'/img/mariscos/200/catorce.png', title:"PLATÓN DE CAMARONES U15 (PLATILLO DE TEMPORADA)", hasChild:true , color: '#E74C3C' },
{ leftImage:'/img/mariscos/200/quince.png', title:"POSTA DE SALMÓN A LA LEÑA (POSTA DE SALMÓN CON ESCAMAS DE CALABAZA AL HORNO DE LECÑA)", hasChild:true , color: '#E74C3C' },
{ leftImage:'/img/mariscos/200/diezyseis.png', title:"POSTA DE SALMÓN AL HORNO", hasChild:true , color: '#E74C3C' },
{ leftImage:'/img/mariscos/200/diezysiete.png', title:"PULPO A LA ZEIVY (PLATILLO DE TEMPORADA)", hasChild:true , color: '#E74C3C' },
{ leftImage:'/img/mariscos/200/diezyocho.png', title:"SALMONE MILLE FOGLIE SALMONE DE ALASKA, CUBIERTO DE HOJAS DE CALABAZA", hasChild:true , color: '#E74C3C' },
{ leftImage:'/img/mariscos/200/diezynueve.png', title:"TRILOGÍA DE SALMÓN AL HORNO DE LEÑA", hasChild:true , color: '#E74C3C' },
{ leftImage:'/img/mariscos/200/veinte.png', title:"TRUCHA AHUMADA FILETES DE TRUCHA AHUMADA, CEBOLLA MORADA Y TOMATE CHERRY", hasChild:true , color: '#E74C3C' }

];

var array_postres = [
 
{ leftImage:'/img/postres/200/uno.png', title:"CANNOLLI SICILIANOS RELLENOS DE QUESO RICOTTA, FRUTOS SECOS Y CHOCOLATE AMARGO", hasChild:true , color: '#E74C3C' },
{ leftImage:'/img/postres/200/dos.png', title:"CAPUCCINO", hasChild:true, color: '#E74C3C'  },
{ leftImage:'/img/postres/200/tres.png', title:"FONDANT DE CHOCOLATE Y FRUTOS DEL BOSQUE(PARA EVENTOS ESPECIALES)", hasChild:true , color: '#E74C3C' },
{ leftImage:'/img/postres/200/cuatro.png', title:"PROFITEROLES(POSTRE DE TEMPORAD)", hasChild:true, color: '#E74C3C'  },
{ leftImage:'/img/postres/200/cinco.png', title:"STRUDEL DE MANZANA CON LA RECETA DE LA NONNA NADIA", hasChild:true, color: '#E74C3C'  },
{ leftImage:'/img/postres/200/seis.png', title:"TIRAMISÙ CLÀSICO CON QUESO MASCARPONE, SOLETAS, CAFÉ EXPRESS Y ALMENFRA TOSTADA", hasChild:true, color: '#E74C3C'  }
];

var array_carnes = [
 
{ leftImage:'/img/carnes/200/uno.png', title:"BIFE DE CHORIZO", hasChild:true, color: '#E74C3C',  },
{ leftImage:'/img/carnes/200/dos.png', title:"BRESAOLA", hasChild:true, color: '#E74C3C'  },
{ leftImage:'/img/carnes/200/tres.png', title:"BRISQUETTE", hasChild:true , color: '#E74C3C' },
{ leftImage:'/img/carnes/200/cuatro.png', title:"CABRERÌA AL HORNO", hasChild:true , color: '#E74C3C' },
{ leftImage:'/img/carnes/200/cinco.png', title:"CABRERÌA AL HORNO DE LEÑA", hasChild:true , color: '#E74C3C' },
{ leftImage:'/img/carnes/200/seis.png', title:"CABRERÌA CORTE DE RES", hasChild:true, color: '#E74C3C'  },
{ leftImage:'/img/carnes/200/siete.png', title:"COSTILLA DE CORDERO A LA LEÑA", hasChild:true , color: '#E74C3C' },
{ leftImage:'/img/carnes/200/ocho.png', title:"COSTILLA DE CORDERO A LA MILANESA", hasChild:true , color: '#E74C3C' },
{ leftImage:'/img/carnes/200/nueve.png', title:"COSTILLAS DE CORDERO", hasChild:true , color: '#E74C3C' },
{ leftImage:'/img/carnes/200/diez.png', title:"LECHÒN AL HORNO", hasChild:true , color: '#E74C3C' },
{ leftImage:'/img/carnes/200/once.png', title:"MAR Y TIERRA", hasChild:true,color: '#E74C3C'  },
{ leftImage:'/img/carnes/200/doce.png', title:"NEW YORK A LA TAGLITA", hasChild:true , color: '#E74C3C' },
{ leftImage:'/img/carnes/200/trece.png', title:"NEW YORK CORTE DE RES", hasChild:true , color: '#E74C3C' },
{ leftImage:'/img/carnes/200/catoce.png', title:"NEW YORK STEAK", hasChild:true , color: '#E74C3C' },
{ leftImage:'/img/carnes/200/quince.png', title:"PRIME RIB CORTE DE RES", hasChild:true , color: '#E74C3C' },
{ leftImage:'/img/carnes/200/diezyseis.png', title:"PRIME RIBE DE 750g", hasChild:true , color: '#E74C3C' },
{ leftImage:'/img/carnes/200/diesysiete.png', title:"RIB STEAK 1200g EXOTIC", hasChild:true , color: '#E74C3C' },
{ leftImage:'/img/carnes/200/diezyocho.png', title:"RIBSTEAK CORTE DE RES", hasChild:true , color: '#E74C3C' }
];
var TheTable = Titanium.UI.createTableView({
		data:array_pizzas
		});
//$.cargar_categorias.add(TheTable);
//carga_categorias(1);

/*
 * metodo que despliega el menù que se eligio.
 * jalomo@hotmail.es
 */
function muestra(e){
	//alert(e.source.valor_m);
	$.seleccion.text=e.source.valor_m;
	$.id_menu.height="45";
    $.menus.visible="false";
    var aux=e.source.valor_id;
    alert(aux);
    switch (aux) {
	case 'uno':
		//TheTable.setData(array_pizzas);
		carga_categorias(1);
	    break;
	case 'dos':
	    //TheTable.setData(array_pastas);
	    carga_categorias(2);
	    break;
	case 'tres':
	    //TheTable.setData(array_ensaladas);
	    carga_categorias(3);
	    break;
	case 'cuatro':
	    //TheTable.setData(array_vinos);
	    carga_categorias(4);
	    break;
	case 'cinco':
	    //TheTable.setData(array_entremeses);
	    carga_categorias(5);
	    break;
	case 'seis':
	    //TheTable.setData(array_especiales);
	    carga_categorias(6);
	    break; 
	case 'siete':
	    //TheTable.setData(array_mariscos);
	    carga_categorias(7);
	    break;
	case 'ocho':
	    //TheTable.setData(array_postres);
	    carga_categorias(8);
	    break; 
	case 'nueve':
	    //TheTable.setData(array_carnes);
	    carga_categorias(9);
	    break;   
    case 'diez':
	    //TheTable.setData(array_carnes);
	    alert('10');
	    carga_categorias(10);
	    break;   	                            
	}
    
    
}


function carga_categorias(idcategoria){
	
	var scrollView1 = Ti.UI.createScrollView({
	  height: 'auto',
	  layout:"vertical"
	});
	
	$.cargar_categorias.removeAllChildren();
	var url = "http://zavordigital.com/panel_pizzaiola/index.php/mobiles/get_precios/"+idcategoria;
	var json;
	 
	var xhr = Ti.Network.createHTTPClient({
	    onload: function() {
	 // parse the retrieved data, turning it into a JavaScript object
	    	json = JSON.parse(this.responseText);
	    	aux=0;
	 		for (s in json)
		    {
		        
		        
				var view1 = Titanium.UI.createView({
					   borderRadius:1,
					   border:2,
					   borderColor:'#cccccc',
					   backgroundColor:'#ffffff',
					   width:'100%',
					   top:1,
					   height:213,
					   id:'id'+aux,
					});
					var image = Ti.UI.createImageView({
					  image:'http://zavordigital.com/panel_pizzaiola/'+json[s].menuImage,
					   width:'120',
					   height:'213',
					   left:2
					});
				    image.addEventListener('click',function(e){
						
						var win = Ti.UI.createWindow();
					    var view = Titanium.UI.createView({
						   backgroundColor:'#000000',
						   opacity:'0.5',
						   width:'100%',
						   height:'100%'
						});
						win.add(view);
						
					
						var image1 = Ti.UI.createImageView({
						  image:e.source.image,// 'http://zavordigital.com/panel_pizzaiola/'+json[s].menuImage
						  width:'100%',
							 //  height:'100%'
						});
						win.add(image1);
						
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
						
						
						win.open();
						
						
						
					});
					
					
					view1.add(image);
					
					var label = Ti.UI.createLabel({
					  backgroundColor:'#ffffff',
					  color:'#e74c3c',
					  text: json[s].menuNombre,
					  //textAlign: 'right',
					  //bottom:0,
					  width: "60%", 
					  height:70,
					  top:10,
					  font: { fontSize:15 },
					  left:'130'
					});
					view1.add(label);
					
					var label2 = Ti.UI.createLabel({
					  backgroundColor:'#ffffff',
					  color:'#7f8c8d',
					  text: json[s].menuDescripcion,
					  //textAlign: 'right',
					  //bottom:0,
					  width: "60%", 
					  height:110,
					 top:70,
					  font: { fontSize:15 },
					  left:'130'
					});
					view1.add(label2);
					
					
					
				    aux++;
					scrollView1.add(view1);
					
		    }
		    
		   $.cargar_categorias.add(scrollView1);
		}
	});
	xhr.open("GET", url);
	xhr.send();
}


TheTable.addEventListener('click', function(e) {
    //alert(e.rowData.leftImage);
    var win = Ti.UI.createWindow();
    var view = Titanium.UI.createView({
	   backgroundColor:'#000000',
	   //opacity:'0.3',
	   width:'100%',
	   height:'100%'
	});
	win.add(view);
	win.open();
	
	
	var image = Ti.UI.createImageView({
	  image:e.rowData.leftImage,
	  width:'95%',
	   //height:'70%'
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
	
	
	var label = Ti.UI.createLabel({
	  color:'#ffffff',
	  text: e.rowData.title,
	  top:'85%',
	  font: { fontSize:12 },
	  
	  width: '90%', height: '20%'
	});
	
	win.add(label);
});


 
 


