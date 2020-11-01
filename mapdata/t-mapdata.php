<?php
include('db_connection.php');
include('db_functions.php');

$query = "SELECT DISTINCT(goods) FROM trade ORDER BY goods";
$results = db_assocArrayAll($dbh,$query);

//making a blank form for ex.php:
$formGoodsStr = "";
$val = 1; // providing each row with a number for buttons;
$GoodsNames = array();
//sending a form in a php code:	
foreach ($results as $row) { 
	//giving a unique filter name for each row:
	$filter="filter".$val;
	$formGoodsStr .= "<input type=checkbox name=$filter value=1";

	// checking if the city was selected or not relying on its number in an array
	if ($goodsSelected) {
		if ($val == $goods) {
			$formGoodsStr .= " checked ";
		}
	}

	$formGoodsStr .= ">" . $row['goods'] . "<br>";
	
	//store it in an array as well
	$GoodsNames[$val] = $row[goods];

	$val++; // going through options
}

//working with a query for the database
$query = "SELECT * FROM trade WHERE";
$count = 1;
while ($count<$val) 
{ //checking each filter if selected
	$filtername="filter".$count;
	 
	 //was it selected?
	if (isset($_GET[$filtername])) {
		//editing the query
	$query .= " (goods = '". $GoodsNames[$count] ."') OR";

}//going to the next filter:
	$count++;
}

//normalising the query:
$query = chop($query,"WHERE");
	$query = chop($query,"OR");
	$query .= ";";
// this captures all the results as an array in PHP...
$results = db_assocArrayAll($dbh,$query);

// ...however, we want a JavaScript array, for the rest of the JavaScript to use
echo "<script type='text/javascript'>";
echo "var myData = " . json_encode($results, JSON_NUMERIC_CHECK);
echo "</script>";
?>