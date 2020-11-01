<?php
include('db_connection.php');
include('db_functions.php');

// We will get some data from the database; we should already have a database connection
$queryB = "SELECT * from SECONDWAVES";

// this captures all the results as an array in PHP...
$resultsB = db_assocArrayAll($dbh,$queryB);

// ...however, we want a JavaScript array, for the rest of the JavaScript to use
echo "<script type='text/javascript'>";
echo "var myDataB = " . json_encode($resultsB, JSON_NUMERIC_CHECK);
echo "</script>";
?>