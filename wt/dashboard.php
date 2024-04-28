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
    $sql = "select hostelName, address, mobile, latitude, longitude from hostels where email = '$email'";

    $result = $conn->query($sql)->fetch_assoc();

    echo json_encode($result);
  }

  else if($_POST['type'] == 'profileUpdate') {
    $hostelName = $_POST['hostelName'];
    $address = $_POST['address'];
    $mobile = $_POST['mobile'];
    $latitude = $_POST['latitude'];
    $longitude = $_POST['longitude'];
    $email = $_POST['email'];
    
    $sql = "update hostels set hostelName = '$hostelName', address = '$address', mobile = '$mobile', latitude = '$latitude', longitude = '$longitude' where email = '$email'";

    $conn->query($sql);
    echo(true);
  }

  else if($_POST['type'] == 'imageUpdate') {
    $thumbnail = $_FILES["image"]["tmp_name"];
    $img_content = addslashes(file_get_contents($thumbnail));
    $email = $_POST['email'];

    $sql = "update hostels set thumbnail = '$img_content' where email = '$email'";
    $conn->query($sql);

    echo 'true';
  }

  else if($_POST['type'] == 'addRoom') {
    $email = $_POST['email'];
    $roomFloor = $_POST['roomFloor'];
    $roomno = $_POST['roomno'];
    $rent = $_POST['rent'];
    $capacity = $_POST['capacity'];
    $occupied = $_POST['occupied'];
    $thumbnail = $_FILES["image"]["tmp_name"];
    $img_content = addslashes(file_get_contents($thumbnail));

    $sql = "insert into rooms(username, roomno, floor, rent, capacity, currently_occupied, image) values('$email', '$roomno', '$roomFloor', '$rent', '$capacity', '$occupied', '$img_content')";
    $conn->query($sql);

    echo 'true';
  }

  else if ($_POST['type'] == 'updateRoom') {
    $email = $_POST['email'];
    $roomFloor = $_POST['roomFloor'];
    $roomno = $_POST['roomno'];
    $rent = $_POST['rent'];
    $capacity = $_POST['capacity'];
    $occupied = $_POST['occupied'];
    $roomid = $_POST['roomid'];
    if($_POST['image'] == 'false') {
      $sql = "update rooms set roomno = '$roomno', floor = '$roomFloor', rent = '$rent', capacity = '$capacity', currently_occupied = '$occupied' where roomid = '$roomid'";
    }
    else {
      $thumbnail = $_FILES["image"]["tmp_name"];
      $img_content = addslashes(file_get_contents($thumbnail));
      $sql = "update rooms set roomno = '$roomno', floor = '$roomFloor', rent = '$rent', capacity = '$capacity', currently_occupied = '$occupied', image = '$img_content' where roomid = '$roomid'";
    }

    $conn->query($sql);

    echo 'true';
  }