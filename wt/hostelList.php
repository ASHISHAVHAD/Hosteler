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

   // $idnumber = $_POST['idNumber'];

    $sql = "select hostelName, address, mobile, email, latitude, longitude from hostels";// where idNumber = '$idnumber'";
    $result = $conn->query($sql)->fetch_all();

    /*$sql = "SELECT thumbnail FROM hostels";
    $result = $conn->query($sql);
    
    $imageData = [];
    $row = $result->fetch_all();
    foreach ($result as $image) {
      $img = base64_encode($row["image_data"]);
      $imageData.array_push($img);
    }

    $arr.array_push($imageData);*/


    /*$hostelName = $result->fetch_assoc()['hostelName'];
    $location = $result->fetch_assoc()['address'];
    $mobile = $result->fetch_assoc()['mobile'];
    $email = $result->fetch_assoc()['email'];*/

    //$arr = array($hostelName, $location, $mobile, $email);

    echo json_encode($result);
