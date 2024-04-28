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
  
  $id = $_POST['id'];

  $sql = "SELECT thumbnail FROM hostels WHERE email = '$id'";
  $result = $conn->query($sql);

  if ($result->num_rows > 0) {
    $row = $result->fetch_assoc();
    $imageData = base64_encode($row["thumbnail"]);
    echo $imageData;
  } else {
    echo "Image not found";
  }

  $conn->close();

  ?>