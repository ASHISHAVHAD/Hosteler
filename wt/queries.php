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

  $name = $_POST['name'];
  $email = $_POST['email'];
  $mobile = $_POST['mobile'];
  $queryText = $_POST['queryText'];

  $sql = "insert into queries values('$name', '$email', '$mobile', '$queryText')";
  $conn->query($sql);
  echo 'true';