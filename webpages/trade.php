<!DOCTYPE html>
<html>
	<head>
		<title>Trade of 6th century</title>
		<meta charset="UTF-8">
		<link rel="stylesheet" href="../styles.css">
		<link rel="stylesheet" href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css"
			integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ=="
			crossorigin=""/>
		
		<script src="https://unpkg.com/leaflet@1.6.0/dist/leaflet.js"
			integrity="sha512-gZwIG9x3wUXg2hdXF6+rVkLF/0Vi9U8D2Ntg4Ga5I5BZpVkVxlJWbSQtXPSiUTtC0TjtGOmxa1AJPuV0CPthew=="
			crossorigin=""></script>
			
			 <?php include("../mapdata/t-mapdata.php"); ?>
		<script src="../maplogic/t-maplogic.js"></script> 
		
		</head>
		
		<body onload="initialise()">
		<a href="../index.html" class="button">Home</a>
		<h1>Trade</h1>
		<p>This page shows the main commercial connections between regions in 6th century with <b> blue polylines </b>. Visit the <a href="biblio.html"> Bibliography section </a> 
		to find a full list of sources used to create these polylines. </p>
		<p><b>Grey circles</b> show areas of key products' production, click for a <b> popup </b>. </p>
	<p>You can <b>choose a type of goods </b> to be shown in the form underneath. </p>
		<div id="mapid"></div>
		<!--an auto-generated form of checkboxes -->
		<div id="selection">
		<form action="<?php echo $_SERVER['SCRIPT_NAME']; ?>" method="get">
			<p>Select goods to show:<br>
			<?php echo $formGoodsStr; ?>
			<br>
			<input type="submit" value="Submit">
		</form>
		</div>
		<button><a href="http://wwwdis.ucl.ac.uk/~yjmsvve/JustinianicPlague/webpages/trade.php">Reset choice <a/> </button>
		<p id="intro">To see full information on my conclusions and all the maps on the same page, 
		please, visit <a href="conclusions.html">Conclusions section </a>.</p>
		<footer id="copyright"> <!--acknowledgments  -->
		<p>With support of <em>Leaflet.js</em>. </p>
		</footer>
		</body>
		
		</html>
	