<!DOCTYPE html>
<html>
	<head>
		<title>Ancient and Medieval Harbours</title>
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
		 <?php include("../mapdata/h-mapdata.php"); ?>
		<script src="../maplogic/h-maplogic.js"></script>
	</head>

	<body onload="initialise()">
<a href="../index.html" class="button">Home</a>
		<h1>Harbours</h1>
		<p>This map is provided to show the maritime infrastructure of the region. </p>
		<p>The map is <b> empty </b> on load. The database includes <b>3173 entries </b> but visualising all of them 
		might lead to <em> long waiting time </em> and problems with <em>manipulation</em> of the map. You can choose yourself how many harbours you want to see.
		Please, type in an <em> integer </em>, otherwise you will get 100 random harbours. 
		To get a number of entries you wish to see, please, type in a number: </p>
		<form action="<?php echo $_SERVER['SCRIPT_NAME']; ?>" method="get">
			<p>How many entries do you want to see? (max. 3173)<br>
			<input type="text" size="4" name="number" value="<?php echo $num;?> "/>
			<input type="submit" value="Submit">
		</form>
		<div id="mapid"></div>
	<p> You typed in: 	<?php
	$num=100;
  $num = $_GET['number'];
  echo $num;
?>
		<script type="text/javascript">
	// numeric value, both with and without quotes
	var num = <?php echo $num ?>; // 7
</script> </p>
<p id="intro">To see full information on my conclusions and all the maps on the same page, 
		please, visit <a href="conclusions.html">Conclusions section </a>.</p>
		<footer id="copyright"> <!--acknowledgments  -->
		<p>With support of <em>Leaflet.js</em>. Dataset : <em> Harvard.edu </em></p>
		</footer>
	</body>
</html>
