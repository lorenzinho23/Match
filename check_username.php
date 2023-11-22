<?php
// Controllo che l'username sia unico andando a vedere se gia presente nel database
require 'dbconfig.php';

header("Content-Type: application/json");

// Ci intefacciamo al database
$conn = mysqli_connect($dbconfig['host'], $dbconfig['user'], $dbconfig['password'], $dbconfig['name']);

$username = mysqli_real_escape_string($conn, $_GET['username']);
$tipo_test = mysqli_real_escape_string($conn, $_GET['tipo']);

if ($tipo_test = "preda") {
    $query = "SELECT username FROM prede WHERE username = '$username'";
} else if ($tipo_test = "predatore") {
    $query = "SELECT username FROM predatori WHERE username = '$username'";
}


$res = mysqli_query($conn, $query) or die(mysqli_error($conn));

echo json_encode(array('exists' => mysqli_num_rows($res) > 0 ? true : false));

mysqli_close($conn);
