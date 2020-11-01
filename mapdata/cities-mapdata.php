<?php
include('db_connection.php');
include('db_functions.php');

// We will get some data from the database; we should already have a database connection
$queryBIG = "SELECT * from BIGCITIES";

// this captures all the results as an array in PHP...
$resultsBIG = db_assocArrayAll($dbh,$queryBIG);

// ...however, we want a JavaScript array, for the rest of the JavaScript to use
echo "<script type='text/javascript'>";
echo "var myDataBIG = " . json_encode($resultsBIG, JSON_NUMERIC_CHECK);
echo "</script>";
?>