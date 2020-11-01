<?php
include('db_connection.php');
include('db_functions.php');

// We will get some data from the database; we should already have a database connection
$queryA = "SELECT * from FIRSTWAVE";


// this captures all the results as an array in PHP...
$resultsA = db_assocArrayAll($dbh,$queryA);


// ...however, we want a JavaScript array, for the rest of the JavaScript to use
echo "<script type='text/javascript'>";
echo "var myDataA = " . json_encode($resultsA, JSON_NUMERIC_CHECK);
echo "</script>";
?>