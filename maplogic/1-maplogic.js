function initialise() {

	// creating the tile layer with  attribution
	var osmUrl='https://server.arcgisonline.com/ArcGIS/rest/services/World_Terrain_Base/MapServer/tile/{z}/{y}/{x}';
	var osmAttrib='Tiles &copy; Esri &mdash; Source: USGS, Esri, TANA, DeLorme, and NPS';
	var osmA = new L.TileLayer(osmUrl, {minZoom: 1, maxZoom: 9, attribution: osmAttrib});
	var osmB = new L.TileLayer(osmUrl, {minZoom: 1, maxZoom: 9, attribution: osmAttrib});
	var osmC = new L.TileLayer(osmUrl, {minZoom: 1, maxZoom: 9, attribution: osmAttrib});
	
	//creating THREE MAP OBJECTS
	myMapA = new L.Map('mapA');
	myMapB = new L.Map('mapB');
	myMapC = new L.Map('mapC');
	
	// WORKING W FIRST MAP
	
	//setting view
	myMapA.setView(new L.LatLng(41.0049, 28.5718),4);
	myMapA.addLayer(osmA);  
	
	
	//adding customized icon for Pelusium 	
		var starIcon = L.icon({
    iconUrl: '../img/star.png',
    iconSize:     [12, 12], // size of the icon 
    iconAnchor:   [1,1], // point of the icon which will correspond to marker's location
});
	 
		L.marker([31.041667, 32.545], {icon: starIcon}).addTo(myMapA);
		
		
	//taking data from JSON
	//colouring circles according to the year of outbreak
	//adding popup with additional information from database
		for (row in myDataA) {
			if (myDataA[row].year=='541') {
				var circle = L.circle([myDataA[row].longitude, myDataA[row].latitude], {color: 'red', radius: 40000}).addTo(myMapA)
				.bindPopup('Area:' + myDataA[row].name+'<br>'+'Year of Plague:'+myDataA[row].year+'<br>'+'Comments on date:'+myDataA[row].date+'<br>'+'Source:'
				+ myDataA[row].source+'<br>'+'Quote:'+myDataA[row].translation);}
				
			else if (myDataA[row].year=='542') {
				var circle = L.circle([myDataA[row].longitude, myDataA[row].latitude], {color: 'orange', radius: 35000}).addTo(myMapA)
				.bindPopup('Area:' + myDataA[row].name+'<br>'+'Year of Plague:'+myDataA[row].year+'<br>'+'Comments on date:'+myDataA[row].date+'<br>'+'Source:'
				+ myDataA[row].source+'<br>'+'Quote:'+myDataA[row].translation);}
				
			else {
				var circle = L.circle([myDataA[row].longitude, myDataA[row].latitude], {color: 'yellow', radius: 30000}).addTo(myMapA)
				.bindPopup('Area:' + myDataA[row].name+'<br>'+'Year of Plague:'+myDataA[row].year+'<br>'+'Comments on date:'+myDataA[row].date+'<br>'+'Source:'
				+ myDataA[row].source+'<br>'+'Quote:'+myDataA[row].translation);}
		}
	
	//adding legend for circle colours
	// source of code: https://codepen.io/haakseth/pen/KQbjdO
var legend = L.control({ position: "topright" });

legend.onAdd = function(myMapA) {
  var div = L.DomUtil.create("div", "legend");
  div.innerHTML += '<i style="background: black"></i><span>Significant cities</span><br>';
  div.innerHTML += '<i style="background: red"></i><span>541</span><br>';
  div.innerHTML += '<i style="background: orange"></i><span>542</span><br>';
  div.innerHTML += '<i style="background: yellow"></i><span>543</span><br>'; 

  return div;
};

legend.addTo(myMapA);

		
	// WORKING W SECOND MAP
	
	//setting view
	myMapB.setView(new L.LatLng(41.0049, 28.5718),4);
	myMapB.addLayer(osmB);
	 
	 
	 //taking data from JSON
	//colouring circles according to the year of outbreak
	//adding popup with additional information from database
		for (entry in myDataB) {
			if (myDataB[entry].year=='558') {
				var circle = L.circle([myDataB[entry].longitude, myDataB[entry].latitude], {color: 'red', radius: 40000}).addTo(myMapB)
				.bindPopup('Area:'+ myDataB[entry].name+'<br>'+'Year of Plague:'+ myDataB[entry].year + '<br>'+'Comments on date:'+myDataB[entry].date+'<br>'+'Source:'
				+ myDataB[entry].source+'<br>'+'Quote:'+myDataB[entry].translation);}
			
			else if (myDataB[entry].year=='560') {
				var circle = L.circle([myDataB[entry].longitude, myDataB[entry].latitude], {color: 'orange', radius: 36000}).addTo(myMapB)
				.bindPopup('Area:'+ myDataB[entry].name+'<br>'+'Year of Plague:'+ myDataB[entry].year + '<br>'+'Comments on date:'+myDataB[entry].date+'<br>'+'Source:'
				+ myDataB[entry].source+'<br>'+'Quote:'+myDataB[entry].translation);}
			
			else if (myDataB[entry].year=='570') {
				var circle = L.circle([myDataB[entry].longitude, myDataB[entry].latitude], {color: 'yellow', radius: 32000}).addTo(myMapB)
				.bindPopup('Area:'+ myDataB[entry].name+'<br>'+'Year of Plague:'+ myDataB[entry].year + '<br>'+'Comments on date:'+myDataB[entry].date+'<br>'+'Source:'
				+ myDataB[entry].source+'<br>'+'Quote:'+myDataB[entry].translation);}
			
			else if (myDataB[entry].year=='571') {
				var circle = L.circle([myDataB[entry].longitude, myDataB[entry].latitude], {color: 'green', radius: 28000}).addTo(myMapB)
				.bindPopup('Area:'+ myDataB[entry].name+'<br>'+'Year of Plague:'+ myDataB[entry].year + '<br>'+'Comments on date:'+myDataB[entry].date+'<br>'+'Source:'
				+ myDataB[entry].source+'<br>'+'Quote:'+myDataB[entry].translation);}
			
			else {
				var circle = L.circle([myDataB[entry].longitude, myDataB[entry].latitude], {color: 'blue', radius: 24000}).addTo(myMapB)
				.bindPopup('Area:'+ myDataB[entry].name+'<br>'+'Year of Plague:'+ myDataB[entry].year + '<br>'+'Comments on date:'+myDataB[entry].date+'<br>'+'Source:'
				+ myDataB[entry].source+'<br>'+'Quote:'+myDataB[entry].translation);}
			
		}
		
		//adding legend with circle colours
		//source of code: https://codepen.io/haakseth/pen/KQbjdO
var legend = L.control({ position: "topright" });

legend.onAdd = function(myMapB) {
  var div = L.DomUtil.create("div", "legend");
  div.innerHTML += '<i style="background: black"></i><span>Significant cities</span><br>';
  div.innerHTML += '<i style="background: red"></i><span>558</span><br>';
  div.innerHTML += '<i style="background: orange"></i><span>560</span><br>';
  div.innerHTML += '<i style="background: yellow"></i><span>570</span><br>';
  div.innerHTML += '<i style="background: green"></i><span>571</span><br>';  
  div.innerHTML += '<i style="background: blue"></i><span>572</span><br>';

  return div;
};

legend.addTo(myMapB);
		
	
	// WORKING W THIRD MAP
	
	//setting view
	myMapC.setView(new L.LatLng(41.0049, 28.5718),4);
	myMapC.addLayer(osmC);
	
	
	//taking data from JSON
	//colouring circles according to the year of outbreak
	//adding popup with additional information from database
	for (line in myDataC) {
		if (myDataC[line].year=='591') {
			var circle = L.circle([myDataC[line].longitude, myDataC[line].latitude], {color: 'red', radius: 40000}).addTo(myMapC)
			.bindPopup('Area:'+ myDataC[line].name+'<br>'+'Year of Plague:'+ myDataC[line].year + '<br>'+'Comments on date:'+myDataC[line].date+'<br>'+'Source:'
			+ myDataC[line].source+'<br>'+'Quote:'+myDataC[line].translation);
		}
		else if (myDataC[line].year=='592') {
			var circle = L.circle([myDataC[line].longitude, myDataC[line].latitude], {color: 'orange', radius: 37000}).addTo(myMapC)
			.bindPopup('Area:'+ myDataC[line].name+'<br>'+'Year of Plague:'+ myDataC[line].year + '<br>'+'Comments on date:'+myDataC[line].date+'<br>'+'Source:'
			+ myDataC[line].source+'<br>'+'Quote:'+myDataC[line].translation);
		}
		else if (myDataC[line].year=='597') {
			var circle = L.circle([myDataC[line].longitude, myDataC[line].latitude], {color: 'yellow', radius: 33000}).addTo(myMapC)
			.bindPopup('Area:'+ myDataC[line].name+'<br>'+'Year of Plague:'+ myDataC[line].year + '<br>'+'Comments on date:'+myDataC[line].date+'<br>'+'Source:'
			+ myDataC[line].source+'<br>'+'Quote:'+myDataC[line].translation);
		}
		else if (myDataC[line].year=='598') {
			var circle = L.circle([myDataC[line].longitude, myDataC[line].latitude], {color: 'green', radius: 29000}).addTo(myMapC)
			.bindPopup('Area:'+ myDataC[line].name+'<br>'+'Year of Plague:'+ myDataC[line].year + '<br>'+'Comments on date:'+myDataC[line].date+'<br>'+'Source:'
			+ myDataC[line].source+'<br>'+'Quote:'+myDataC[line].translation);
		}
		else if (myDataC[line].year=='599') {
			var circle = L.circle([myDataC[line].longitude, myDataC[line].latitude], {color: 'blue', radius: 25000}).addTo(myMapC)
			.bindPopup('Area:'+ myDataC[line].name+'<br>'+'Year of Plague:'+ myDataC[line].year + '<br>'+'Comments on date:'+myDataC[line].date+'<br>'+'Source:'
			+ myDataC[line].source+'<br>'+'Quote:'+myDataC[line].translation);
		}
		else {
			var circle = L.circle([myDataC[line].longitude, myDataC[line].latitude], {color: 'indigo', radius: 21000}).addTo(myMapC)
			.bindPopup('Area:'+ myDataC[line].name+'<br>'+'Year of Plague:'+ myDataC[line].year + '<br>'+'Comments on date:'+myDataC[line].date+'<br>'+'Source:'
			+ myDataC[line].source+'<br>'+'Quote:'+myDataC[line].translation);
		}
			}
			//adding legend for circle colours
			// source of code: https://codepen.io/haakseth/pen/KQbjdO
var legend = L.control({ position: "topright" });

legend.onAdd = function(myMapC) {
  var div = L.DomUtil.create("div", "legend");
  div.innerHTML += '<i style="background: black"></i><span>Significant cities</span><br>';
  div.innerHTML += '<i style="background: red"></i><span>591</span><br>';
  div.innerHTML += '<i style="background: orange"></i><span>592</span><br>';
  div.innerHTML += '<i style="background: yellow"></i><span>597</span><br>';
  div.innerHTML += '<i style="background: green"></i><span>598</span><br>';  
  div.innerHTML += '<i style="background: blue"></i><span>599</span><br>';
  div.innerHTML += '<i style="background: indigo"></i><span>600</span><br>';

  return div;
};
legend.addTo(myMapC);

//adding big cities for all maps 
	
	for (city in myDataBIG) {
			var circle = L.circle([myDataBIG[city].longitude, myDataBIG[city].latitude], {color:'black', radius: 10000}).addTo(myMapA)
			.bindPopup(myDataBIG[city].name);
			var circle = L.circle([myDataBIG[city].longitude, myDataBIG[city].latitude], {color:'black', radius: 10000}).addTo(myMapB)
			.bindPopup(myDataBIG[city].name);
			var circle = L.circle([myDataBIG[city].longitude, myDataBIG[city].latitude], {color:'black', radius: 10000}).addTo(myMapC)
			.bindPopup(myDataBIG[city].name);
		}
	
	
	
}