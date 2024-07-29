<?php 
    $name = $_POST['name'];
    $phone = $_POST['phone'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    //connection 
    $conn = new mysqli('localhost', 'root', '2153274', 'portfolio');
    if($conn->connect_error){
        die('Connection Failed : ' .$conn-> connect_error);
    }else{
        $stmt = $conn->prepare("insert into response(name,phone, email, message) 
                values(?,?,?,?)   ")
        $stmt -> bind_param("siss",$name,$phone,$email,$message);
        $stmt-> execute();
        echo "Your response was stored ";
        $stmt->close();
        $conn->close();
    }


?>