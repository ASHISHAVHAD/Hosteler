<?php
    header('Access-Control-Allow-Origin: *');
    $servername = "sql107.infinityfree.com";
  $username = "if0_36430459";
  $password = "ENH5692vN0";
  $dbName = "if0_36430459_wt";

    // Create connection
    $conn = new mysqli($servername, $username, $password, $dbName);
    
    // Check connection
    if ($conn->connect_error) {
      die("Connection failed: " . $conn->connect_error);
    }

    $email = $_POST['email'];

    $sql = "select hostelName, address, mobile, email, latitude, longitude from hostels where email = '$email'";
    $result = $conn->query($sql)->fetch_assoc();

    echo json_encode($result);