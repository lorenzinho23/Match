<?php
require_once 'auth.php';

// verifica l'accesso
if (!checkAuth()) {
    header("Location: home.php");
    exit;
}
// else {
//     header("Location: stampa_risultati_preda.php");
// }
?>

<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Preda - Riuscito</title>
    <script src="risultati.js" defer></script>
</head>

<body style="text-align: center;">
    <p id="tipo" style="display: none;"><?php echo $_SESSION["tipo"]; ?></p>
    <h1>Inserimento dati riuscito</h1>
    <h2>I risultati saranno disponibili a breve...</h2>

    <img src="gif_loading.gif" alt="Loading GIF" width="150px"/>

    <!-- VERRA' MOSTRATO UN BOTTONE ALL'ORARIO X -->

</body>

</html>