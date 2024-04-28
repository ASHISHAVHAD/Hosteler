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

$roomid = $_POST['roomid'];

$sql = "SELECT image FROM rooms WHERE roomid = '$roomid'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
  $row = $result->fetch_assoc();
  $imageData = base64_encode($row["image"]);
  echo $imageData;
} else {
  echo "Image not found";
}

$conn->close();