<?php
require_once 'auth.php';

// verifica l'accesso -- se trova l'utente lo rimanda alla pagina di caricamento risultati
if (checkAuth()) {
    header("Location: loadingPredatore.php");
    exit;
}

// se tutto è settato correttamente si procede con l'inserimento dell'utente nel database
if (isset($_POST["username"]) && isset($_POST["sesso"]) && isset($_POST["gusto"]) && isset($_POST["capelli"]) && isset($_POST["carattere"])) {
    $error = array();

    $conn = new mysqli($dbconfig['host'], $dbconfig['user'], $dbconfig['password'], $dbconfig['name']);

    $nome = mysqli_real_escape_string($conn, $_POST['nome']);
    $cognome = mysqli_real_escape_string($conn, $_POST['cognome']);
    $username = mysqli_real_escape_string($conn, $_POST['username']);
    $numero_tavolo = mysqli_real_escape_string($conn, $_POST['numero_tavolo']);
    $sesso = mysqli_real_escape_string($conn, $_POST['sesso']);
    $gusto = mysqli_real_escape_string($conn, $_POST['gusto']);
    $capelli = mysqli_real_escape_string($conn, $_POST['capelli']);
    $carattere = mysqli_real_escape_string($conn, $_POST['carattere']);

    $query = "INSERT INTO predatori (nome, cognome, username, numero_tavolo, capelli, carattere, sesso, gusto,match_num) VALUES ('$nome','$cognome','$username','$numero_tavolo','$capelli','$carattere','$sesso','$gusto',0)";

    if (mysqli_query($conn, $query)) {
        $_SESSION["id_session"] = mysqli_insert_id($conn);
        $_SESSION["nome"] = $nome;
        $_SESSION["cognome"] = $cognome;
        $_SESSION["username"] = $username;
        $_SESSION["numero_tavolo"] = $numero_tavolo;
        $_SESSION["sesso"] = $sesso;
        $_SESSION["gusto"] = $gusto;
        $_SESSION["capelli"] = $capelli;
        $_SESSION["carattere"] = $carattere;
        $_SESSION["tipo"] = "predatore";
        mysqli_close($conn);
        header("Location: loadingPredatore.php");
        exit;
    } else {
        $error[] = "Errore connessione al database";
    }
    mysqli_close($conn);
}


?>

<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>TEST VERSIONE PREDATORE</title>
    <script src="form.js" defer></script>
</head>

<body>
    <p style="display: none;" id="tipo_test">predatore</p>
    <h1>INIZIO TEST - versione predatore</h1>
    <form id="quizForm" action="test_predatore.php" method='POST'>
        <ol>
            <!-- NOME !-->
            <li>
                <h2>Inserisci il tuo nome:</h2>
                <input type="text" name="nome" id="nome" required>
            </li>
            <!-- COGNOME !-->
            <li>
                <h2>Inserisci il tuo cognome:</h2>
                <input type="text" name="cognome" id="cognome" required>
            </li>
            <!-- USERNAME !-->
            <li>
                <h2>Inserisci la tua username:</h2>
                <input type="text" name="username" id="username" required>
            </li>
            <!-- N.TAVOLO !-->
            <li>
                <h2>Inserisci il numero del tavolo:</h2>
                <input type="text" name="numero_tavolo" id="numero_tavolo" required>
            </li>
            <!-- SESSO UTENTE !-->
            <li>
                <h2>Inserisci il tuo sesso:</h2>
                <select name="sesso" id="sesso">
                    <option value="null">--</option>
                    <option value="M">M</option>
                    <option value="F">F</option>
                </select>
            </li>
            <!-- GENERE CHE CERCA !-->
            <li>
                <h2>Chi stai cercando?</h2>
                <select name="gusto" id="gusto">
                    <option value="null">--</option>
                    <option value="M">M</option>
                    <option value="F">F</option>
                </select>
            </li>
            <!-- COLORE CAPELLI !-->
            <li>
                <h2>Che capelli cerchi?</h2>
                <select name="capelli" id="capelli">
                    <option value="null">--</option>
                    <option value="marroni">marroni</option>
                    <option value="biondi">biondi</option>
                    <option value="rossi">rossi</option>
                </select>
            </li>
            <!-- CARATTERE !-->
            <li>
                <h2>Quale caratteristica cerchi?</h2>
                <select name="carattere" id="carattere">
                    <option value="null">--</option>
                    <option value="simpatia">simpatia</option>
                    <option value="bellezza">bellezza</option>
                    <option value="generosita">generosita</option>
                </select>
            </li>
        </ol>
        <input id="submit" type="submit" value="INVIA">
    </form>
</body>

</html>