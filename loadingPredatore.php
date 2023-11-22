<?php
require_once 'auth.php';

// verifica l'accesso
if (!checkAuth()) {
    header("Location: home.php");
    exit;
} else {
    header("Location: stampa_risultati_predatore.php");
}
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
    <h1>Inserimento dati riuscito ora</h1>
    <h2>Caricamento risultati...</h2>
    <h1>Nome:</h1>
    <p id="nome"><?php echo $_SESSION["nome"]; ?></p>
    <h1>Cognome:</h1>
    <p id="cognome"><?php echo $_SESSION["cognome"]; ?></p>
    <h1>Username:</h1>
    <p id="username"><?php echo $_SESSION["username"]; ?></p>
    <h1>Numero tavolo:</h1>
    <p id="numero_tavolo"><?php echo $_SESSION["numero_tavolo"]; ?></p>
    <h1>Sesso:</h1>
    <p id="sesso"><?php echo $_SESSION["sesso"] ?></p>
    <h1>Gusto:</h1>
    <p id="gusto"><?php echo $_SESSION["gusto"]; ?> </p>
    <h1>Capelli:</h1>
    <p id="capelli"><?php echo $_SESSION["capelli"]; ?> </p>
    <h1>Carattere:</h1>
    <p id="carattere"><?php echo $_SESSION["carattere"]; ?> </p>

    <br>
    <br>

    <button id="carica">CARICA RISULTATI</button>
    <h3 style="display: none;">Ecco i tuoi risultati:</h3>
    <div id="risultati">
    </div>

</body>

</html>