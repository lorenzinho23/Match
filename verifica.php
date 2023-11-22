<?php
// Controllo che l'username sia unico andando a vedere se gia presente nel database
require 'dbconfig.php';

header("Content-Type: application/json");

// Ci intefacciamo al database
$conn = mysqli_connect($dbconfig['host'], $dbconfig['user'], $dbconfig['password'], $dbconfig['name']);

$query = "SELECT COUNT(*) as totale FROM prede UNION ALL SELECT COUNT(*) FROM predatori";

$res = mysqli_query($conn, $query) or die(mysqli_error($conn));


while ($row = mysqli_fetch_assoc($res)) {
    $array[] = array(
        'totale' => $row['totale'],
    );
}

echo json_encode($array);
mysqli_close($conn);
