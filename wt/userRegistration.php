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
    $hostelName = $_POST['hostelName'];
    $address = $_POST['address'];
    $mobile = $_POST['mobile'];
    $thumbnail = $_FILES["image"]["tmp_name"];
    $img_content = addslashes(file_get_contents($thumbnail));
    $latitude = $_POST['latitude'];
    $longitude = $_POST['longitude'];
    
    $sql = "insert into hostels(email, password, hostelName, address, mobile, thumbnail, latitude, longitude) values('$email', '$password', '$hostelName', '$address', '$mobile', '$img_content', '$latitude', '$longitude')";
    $conn->query($sql);
    
    echo 'true';
  }