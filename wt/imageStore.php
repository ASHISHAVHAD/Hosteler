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

    if ($_FILES["image"]["error"] > 0) {
    echo "Error: " . $_FILES["image"]["error"];
    } else {
    $image = $_FILES["image"]["tmp_name"];
    $img_content = addslashes(file_get_contents($image));

    $sql = "INSERT INTO images (image_data) VALUES ('$img_content')";

    if ($conn->query($sql) === TRUE) {
        echo "true";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
    }

    $conn->close();

