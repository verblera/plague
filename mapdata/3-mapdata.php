<?php
include('db_connection.php');
include('db_functions.php');

// We will get some data from the database; we should already have a database connection
$queryC = "SELECT * from THIRDWAVES";

// this captures all the results as an array in PHP...
$resultsC = db_assocArrayAll($dbh,$queryC);

// ...however, we want a JavaScript array, for the rest of the JavaScript to use
echo "<script type='text/javascript'>";
echo "var myDataC = " . json_encode($resultsC, JSON_NUMERIC_CHECK);
echo "</script>";
?>