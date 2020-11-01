<!DOCTYPE html>
<html>
	<head>
		<title>Mapping the Plague</title>
		<meta charset="UTF-8">
			<link rel="stylesheet" href="../styles.css">

		<!-- leaflet libraries -->
		<link rel="stylesheet" href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css"
			integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ=="
			crossorigin=""/>
		
		<script src="https://unpkg.com/leaflet@1.6.0/dist/leaflet.js"
			integrity="sha512-gZwIG9x3wUXg2hdXF6+rVkLF/0Vi9U8D2Ntg4Ga5I5BZpVkVxlJWbSQtXPSiUTtC0TjtGOmxa1AJPuV0CPthew=="
			crossorigin=""></script>

		<!-- our bespoke code -->
		<?php include("../mapdata/cities-mapdata.php"); ?>
		<?php include("../mapdata/1-mapdata.php"); ?>
		<?php include("../mapdata/2-mapdata.php"); ?>
		<?php include("../mapdata/3-mapdata.php"); ?>
		<script src="../maplogic/1-maplogic.js"></script>
	</head>

	<body onload="initialise()">
	<a href="../index.html" class="button">Home</a>
		<h1>Justinianic Plague, 541-600</h1>
		<p id="intro"> This page includes three maps of five consecutive outbreaks of the Justinianic Plague (541-543; 558-560 and 570-573; 591-592 and 597-600). </p>
		<ol id="intro" style="text-align: left;"> 
		<li> On each map, you can see black and colourful circles. <b> Black circles </b> are for big, important or well-known cities to give an idea about the geography of the region. 
		<b>Colourful circles </b> point out the cities where presence of pestilence is proven by archaeological or written sources. Different sizes of circles on second and third maps are applied to visibly mark when pestilence came twice in the same city and do not provide any additional information. </li>
		<li> Each colour corresponds to a year, and a <b> legend </b> can be found on the left 
		side of the map. </li>
<li>		
		To get more information on a city or a plague centre, you can <b> click on the circle</b>. </li>
		<li>To zoom in or zoom out, please, use + or - on the left corner of a map.</li>
		
		</ol>
		<p id="intro"> Below each map you can find a few notes on the waves and a link to xslx.files with a table of information presented on the map. Additionally, it includes the original texts of Medieval sources not provided in the database.</p>
		<p id="intro"> Visit <a href="biblio.html"> Bibliography section </a> to find a full list of used sources, including articles and books on the plague. </p>
		<p id="intro">To see full information on my conclusions and all the maps on the same page, please, visit <a href="conclusions.html">Conclusions section </a>.</p>
		<h3 class="myMapA">First Wave, 541-543</h3>
		<div id="mapA"></div>
		<p class="explanation">
		The map represents the first wave of the Justinianic Plague. A star icon (near the Nile) is a city of Pelusiom where, according to Procopius, 
		the first outbreak started. The cities around are coloured red (year 541). Minor Asia and Constantinople are coloured orange (year 542), as well as Sicily (December, 542), and Northern Africa and 
		Italy are coloured yellow (year 543). The main pattern of the spread is movement anticlockwise along the coastline. Some big cities (Caesarea, Beirut) have no sources about the Plague but we could suggest that they were affected in 
541 as well, while Phocaea, Ephesos, Athens and other cities were affected in 542. All the cities on the route to Italy must have been infected before December 542. 		
		</p>
		<p> <a href="../xsl/first_wave.xlsx" download>Click here to download csv.file with original texts</a></p>

		<h3 class="myMapB">Second Wave,558-560 and Third Wave, 570-573 </h3>
		<div id="mapB"></div>
		<p class="explanation">These two waves are poorly documented. The second wave occurred in the years 558-560. The only documented city for this Plague is
Constantinople (558). In 560, plague came to Anazarbus and Antioch. The time break between two places is longer than it was during the first wave and this time the disease
spreads clockwise. In 570, the third wave started in Italy and Gaul and spread to France a year after. In the same way, many cities did not report any plague outbreaks, even though modern Greece might have suffered 
it simultaneously with France (around 571) if we <em> buffer </em> the spread of the plague. 		</p>
<p> <a href="../xsl/second_third_wave.xlsx" download>Click here to download csv.file with original texts</a></p>
		
		<h3 class="myMapC">Fourth Wave,591-592 and Fifth Wave, 597-600 </h3>
		<div id="mapC"></div>
		<p class="explanation"> 
A few sources document the outbreak of Plague in Italy in 591. Evagrius Scholasticus reports that the plague also occurred in Antioch a year later.  The fifth wave was longer than previous ones and continued in 601 as well. 
 The next outbreak started in 597 or 596 in Thessalonica. However, it first affected military groups in modern Bulgaria, and only then came to Constantinople, Asia Minor and Syria. At the same time, it arrived to Italy and 
then spread further into the continent, to Verona and Ravenna.  
		</p>
		<p> <a href="../xsl/fourht_fifth_wave.xlsx" download>Click here to download csv.file with original texts</a></p>
		<footer id="copyright"> <!--acknowledgments  -->
		<p>With support of <em>Leaflet.js</em>. </p>
		</footer>
	</body>
</html>
