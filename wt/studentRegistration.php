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
  $password = $_POST['password'];
  


  if($_POST['type'] == 'login') {
    $sql = "select password from hostels where email = '$email'";
    $result = $conn->query($sql)->fetch_assoc()['password'];
    if($result == $password) {
      echo 'true';
    }
    else {
      echo 'false';
    }
  }
  else {
    $name = $_POST['Name'];
    $mobile = $_POST['mobile'];
    
    $sql = "insert into users(email, password, name, mobile) values('$email', '$password', '$name', '$mobile')";
    $conn->query($sql);
    
    echo 'true';
  }