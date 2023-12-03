<?php
// Controllo che l'username sia unico andando a vedere se gia presente nel database
require 'dbconfig.php';


header("Content-Type: application/json");

// Ci intefacciamo al database
$conn = mysqli_connect($dbconfig['host'], $dbconfig['user'], $dbconfig['password'], $dbconfig['name']);

$username = mysqli_real_escape_string($conn, $_GET['username']);
$tipo = mysqli_real_escape_string($conn, $_GET['tipo']);

if ($tipo == "preda") {
    $query = "UPDATE predatori SET match_num = match_num + 1 WHERE predatori.username='$username'";
} else if ($tipo == "predatore") {
    $query = "UPDATE prede SET match_num = match_num + 1 WHERE username='$username'";
}


$res = mysqli_query($conn, $query) or die(mysqli_error($conn));