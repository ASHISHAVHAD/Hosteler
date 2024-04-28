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

  if($_POST['type'] == 'profile') {
    $email = $_POST['email'];
    $sql = "select name, mobile from users where email = '$email'";

    $result = $conn->query($sql)->fetch_assoc();

    echo json_encode($result);
  }

  else if($_POST['type'] == 'profileUpdate') {
    $name = $_POST['name'];
    $mobile = $_POST['mobile'];
    $email = $_POST['email'];
    
    $sql = "update users set name = '$name', mobile = '$mobile' where email = '$email'";

    $conn->query($sql);
    echo(true);
  }