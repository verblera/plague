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
	
	for (region in myData)
	{
	var circle = L.circle([myData[region].longitude,myData[region].latitude], {weight: 0.5, color:'black', fillOpacity: 0.1, radius: 30000}).addTo(myMap)
	.bindPopup(myData[region].goods);
	}
	
	
	//ADDING COMMERCIAL NETWORKS WS POLYLINES
	
	var latlngs = [
	[[41.013889, 28.955556], 	//Constantinople
	[35.167795, 33.655891],//Cyprus
	[41.013889, 28.955556], 	//Constantinople
	[37.941111,	27.341944], //Ephesos
	[41.013889, 28.955556], 	//Constantinople
	[37.349722, 22.352222], //Peloponnese
	[41.013889, 28.955556], 	//Constantinople
	[31.516667,	34.45], //Gaza
	[41.013889, 28.955556], 	//Constantinople
	[41.883333,	12.5], //Rome
	[41.013889, 28.955556], 	//Constantinople
	[44.416667,	12.2], //Ravenna
	[41.013889, 28.955556], 	//Constantinople
	[37.5, 14] //Sicily
	],
	[[37.349722, 22.352222], //Peloponnese
	[41.883333,	12.5] //Rome
	],
	[[33.88863,	35.49548], //Beirut
	[31.2,	29.916667], //Alexandria
	[33.88863,	35.49548], //Beirut
	[35.772355, 35.867953],	//Syria
	[33.88863,	35.49548], //Beirut
	[35.167795, 33.655891],//Cyprus
	[33.88863,	35.49548], //Beirut
	[37.349722, 22.352222], //Peloponnese
	[33.88863,	35.49548], //Beirut
	[41.013889, 28.955556]], 	//Constantinople
	[[31.2,	29.916667], //Alexandria
	[31.516667,	34.45], //Gaza
	[31.2,	29.916667], //Alexandria
	[35.167795, 33.655891],//Cyprus
	[31.2,	29.916667], //Alexandria
	[41.013889, 28.955556]], 	//Constantinople
	[[33.88863,	35.49548], //Beirut
	[39.129103, -0.316414]],//Spain
	[[40,9], //Sardinia
	[35.772355, 35.867953]], //Syria
	[[37.5, 14], //Sicily
	[41.883333,	12.5], //Rome
	[36.884,10.3281]], //Tunisia	
	[[37.5, 14], //Sicily
	[39.229901, 17.100029],//South Italy
	[42.835889, 17.635539],//Eastern Adriatic
	[39.229901, 17.100029],//South Italy
	[45.498575, 12.711790]//Northern Adriatic
	]];
	var multiPolyLineOptions = {color: 'blue', weight: 1};
	
	var multiPolyline = L.polyline(latlngs, multiPolyLineOptions);
	multiPolyline.addTo(myMap);
	
	map.fitBounds(multiPolyline.getBounds());
		
	
}

	