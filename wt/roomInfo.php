<?php
header('Access-Control-Allow-Origin: *');
$servername = "sql107.infinityfree.com";
  $username = "if0_36430459";
  $password = "ENH5692vN0";
  $dbname = "if0_36430459_wt";
// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$username = $_GET['email'];

$sql = "select roomno, floor, rent, capacity, currently_occupied, roomid from rooms where username = '$username'";

$result = $conn->query($sql)->fetch_all();

echo json_encode($result);