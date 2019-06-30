<?php
$to = "valevaloni_95@hotmail.com"; 
$from = $_POST['email']; 
$first_name = $_POST['firstName']; 
$subject = "Email de Star Wars API";
$comments = $first_name . ' te dijo: ' . $_POST['comments'];
$headers = "From:" . $from;
$email = mail($to,$subject,$comments,$headers);
if(!$email){
  echo "Hubo un error al procesar tu email, detallle del error". $email; 
}
?>