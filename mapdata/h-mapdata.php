<?php
include('db_connection.php');
include('db_functions.php');

// We will get some data from the database; we should already have a database connection
$query = "SELECT * from HARBOURS";

// this captures all the results as an array in PHP...
$results = db_assocArrayAll($dbh,$query);

// ...however, we want a JavaScript array, for the rest of the JavaScript to use
echo "<script type='text/javascript'>";
echo "var myData = " . json_encode($results, JSON_NUMERIC_CHECK);
echo "</script>";
?>