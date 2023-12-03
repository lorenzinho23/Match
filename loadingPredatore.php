<?php
require_once 'auth.php';

// verifica l'accesso
if (!checkAuth()) {
    header("Location: home.php");
    exit;
}
// else {
//     header("Location: stampa_risultati_predatore.php");
// }
?>

<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Predatore - Riuscito</title>
    <script src="risultati.js" defer></script>
</head>

<body style="text-align: center;">
    <p id="tipo" style="display: none;"><?php echo $_SESSION["tipo"]; ?></p>
    <h1>Inserimento dati riuscito</h1>
    <h2>Caricamento risultati...</h2>

    <!-- VERRA' MOSTRATO UN BOTTONE ALL'ORARIO X -->

</body>

</html>