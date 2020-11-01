function initialise() {
	
	// create the tile layer with correct attribution
	var osmUrl='https://server.arcgisonline.com/ArcGIS/rest/services/World_Terrain_Base/MapServer/tile/{z}/{y}/{x}';
	var osmAttrib='Tiles &copy; Esri &mdash; Source: USGS, Esri, TANA, DeLorme, and NPS';
	var osm = new L.TileLayer(osmUrl, {minZoom: 1, maxZoom: 13, attribution: osmAttrib});			

	// create the map object
	myMap = new L.Map('mapid');
	
	// set the starting location
	myMap.setView(new L.LatLng(41.0049, 28.5718),4);
	myMap.addLayer(osm);  
	
	
	//getting a typed in number from harbours.php
	
	//when integer:
	if (Number.isInteger(num)) {
		if ((num<0)||(num>3173)) {
		alert('Sorry, the number must be between 0 and 3173')
	}
	//adding a typed in number of random entries to the map: 
	else {
		var arr= [];
	while (arr.length < num) {
	var r = Math.floor(Math.random() * 3173) + 1;
    if(arr.indexOf(r) === -1) arr.push(r);
	var marker = L.marker([myData[r].longitude, myData[r].latitude]).addTo(myMap);
	}
	}
	}
	
	//when not integer, adding 100 random entries to the map: 
	else {
	var arr= [];
	while (arr.length < 100) {
	var r = Math.floor(Math.random() * 3173) + 1;
    if(arr.indexOf(r) === -1) arr.push(r);
	var marker = L.marker([myData[r].longitude, myData[r].latitude]).addTo(myMap);
	}
	}
	//source of a code for an array: https://stackoverflow.com/questions/2380019/generate-unique-random-numbers-between-1-and-100
	
	
}

	