<?php
require_once 'auth.php';

// verifica l'accesso
if (!checkAuth()) {
    header("Location: home.php");
    exit;
}
?>

<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Preda - Riuscito</title>
    <script src="stampa.js" defer></script>
</head>

<body style="text-align: center;">
    <h1>Ecco i tuoi risultati:</h1>

    <div style="display: none;">
        <h1>Tipo:</h1>
        <p id="tipo"><?php echo $_SESSION["tipo"]; ?></p>
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
    </div>

    <br>
    <br>

    <div id="risultati">
    </div>

</body>

</html>