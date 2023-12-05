<?php
include 'dbconfig.php';

require_once 'auth.php';

if (!$id_session = checkAuth()) {
    // Se non è settata alcuna credenziale rimando al login
    header("Location: home.php");
    exit;
} else {
    session_start();
    // Distruggo la sessione esistente
    session_destroy();

    $conn = mysqli_connect($dbconfig['host'], $dbconfig['user'], $dbconfig['password'], $dbconfig['name']);

    $username = $_SESSION["username"];

    $query = "DELETE FROM predatori WHERE username = '$username'";

    $res = mysqli_query($conn, $query);

    header("Location: home.php");
    exit();
}
