<?php
require_once 'auth.php';

// verifica l'accesso -- se trova l'utente lo rimanda alla pagina di caricamento risultati
if (checkAuth() && isset($_SESSION["tipo"]) && $_SESSION["tipo"] == "preda") {
    header("Location: loadingPreda.php");
    exit;
} else if (checkAuth() && isset($_SESSION["tipo"]) && $_SESSION["tipo"] == "predatore") {
    header("Location: loadingPredatore.php");
    exit;
}
?>

<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>HOME - TEST MATCH</title>
    <link href="style.css" rel="stylesheet">
</head>

<body>
    <div class="main">
        <h1>Benvenuto nel TEST MATCH in locale</h1>
        <button><a id="preda" href="test_preda.php">Versione preda</a></button>
        <button><a id="predatore" href="test_predatore.php">Versione predatore</a></button>
    </div>
</body>

</html>