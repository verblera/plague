<?php

// THIS MUST BE REPLACED WITH YOUR OWN USERNAME
$DB_USERNAME = "yjmsvve";

// Open a connection to the database
 
$dbh = pg_connect("dbname=$DB_USERNAME");
if (!$dbh) {
    die("Error in connection: " . pg_last_error());
}

?>