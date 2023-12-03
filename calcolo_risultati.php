<?php
// Controllo che l'username sia unico andando a vedere se gia presente nel database
require 'dbconfig.php';


header("Content-Type: application/json");

// Ci intefacciamo al database
$conn = mysqli_connect($dbconfig['host'], $dbconfig['user'], $dbconfig['password'], $dbconfig['name']);

$tipo = mysqli_real_escape_string($conn, $_GET['tipo']);
$username = mysqli_real_escape_string($conn, $_GET['username']);
$sesso = mysqli_real_escape_string($conn, $_GET['sesso']);
$gusto = mysqli_real_escape_string($conn, $_GET['gusto']);
$capelli = mysqli_real_escape_string($conn, $_GET['capelli']);
$carattere = mysqli_real_escape_string($conn, $_GET['carattere']);

if ($tipo == "preda") {
    $query2 = "SELECT * FROM (SELECT p2.username as preda, p1.username as predatore, (if(p1.capelli='$capelli',1,0)+if(p1.carattere='$carattere',1,0)) as punti, p1.match_num as match_num, p1.numero_tavolo as numero_tavolo from predatori p1,prede p2 where p2.username='$username' and p1.sesso='$gusto' and p1.match_num<3) a order by punti DESC";
} else if ($tipo == "predatore") {
    $query2 = "SELECT * FROM (SELECT p1.username as predatore, p2.username as preda, (if('$capelli'=p2.capelli,1,0)+if('$carattere'=p2.carattere,1,0)) as punti, p2.match_num as match_num, p2.numero_tavolo as numero_tavolo from predatori p1,prede p2 where p1.username='$username' and p2.sesso='$gusto' and p2.match_num<3) a order by punti DESC";
}

$res2 = mysqli_query($conn, $query2);

if ($res2->num_rows == 0) {
    $array[] = [];
} else {
    while ($row = mysqli_fetch_assoc($res2)) {
        $array[] = array(
            'Predatore' => $row['predatore'],
            'Preda' => $row['preda'],
            'Punti' => $row['punti'],
            'match_num' => $row['match_num'],
            'numero_tavolo' => $row['numero_tavolo'],
        );
    }
}

echo json_encode($array);
