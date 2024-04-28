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

if($_POST['type'] == 'send') {
    $sender = $_POST['sender'];
    $reciever = $_POST['reciever'];
    $roomno = $_POST['roomno'];
    $floor = $_POST['floor'];
    $message = $_POST['message'];

    $sql = "insert into roomqueries(sender, reciever, roomno, floor, message) values('$sender', '$reciever', '$roomno', '$floor', '$message')";
    if($conn->query($sql)) {
        echo 'true';
    }

    else {
        echo 'false';
    }
}

else if ($_POST['type'] == 'recieve') {
    $reciever = $_POST['reciever'];

    $sql = "select * from roomqueries where reciever = '$reciever'";
    if($row = $conn->query($sql)) {
        $result = $row->fetch_all();
        echo json_encode($result);
    }

    else {
        echo 'false';
    }
}

else if ($_POST['type'] == 'delete') {
    $queryid = $_POST['queryid'];

    $sql = "delete from roomqueries where queryid = '$queryid'";
    if($conn->query($sql)) {
        echo 'true';
    }

    else {
        echo 'false';
    }
}

else if ($_POST['type'] == 'save') {
    $email = $_POST['email'];
    $roomid = $_POST['roomid'];

    $sql = "insert into savedHostels(email, roomid) values ('$email', '$roomid')";
    if($conn->query($sql)) {
        echo 'true';
    }

    else {
        echo 'false';
    }
}