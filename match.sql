-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Creato il: Dic 02, 2023 alle 10:58
-- Versione del server: 10.4.27-MariaDB
-- Versione PHP: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `match`
--

-- --------------------------------------------------------

--
-- Struttura della tabella `predatori`
--

CREATE TABLE `predatori` (
  `user_id` int(11) NOT NULL,
  `nome` char(16) NOT NULL,
  `cognome` char(16) NOT NULL,
  `username` varchar(16) NOT NULL,
  `numero_tavolo` int(11) NOT NULL,
  `capelli` varchar(16) NOT NULL,
  `carattere` varchar(16) NOT NULL,
  `sesso` char(1) NOT NULL,
  `gusto` char(1) NOT NULL,
  `match_num` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dump dei dati per la tabella `predatori`
--

INSERT INTO `predatori` (`user_id`, `nome`, `cognome`, `username`, `numero_tavolo`, `capelli`, `carattere`, `sesso`, `gusto`, `match_num`) VALUES
(2, '', '', 'paola', 5, 'biondi', 'generosita', 'F', 'M', 0),
(47, '', '', 'marco', 4, 'biondi', 'simpatia', 'M', 'F', 1),
(48, '', '', 'simone', 5, 'rossi', 'simpatia', 'M', 'F', 1),
(49, '', '', 'giuseppe', 8, 'marroni', 'generosita', 'M', 'F', 1),
(50, '', '', 'melissa', 3, 'biondi', 'generosita', 'F', 'M', 0);

-- --------------------------------------------------------

--
-- Struttura della tabella `prede`
--

CREATE TABLE `prede` (
  `user_id` int(11) NOT NULL,
  `nome` char(16) NOT NULL,
  `cognome` char(16) NOT NULL,
  `username` varchar(16) NOT NULL,
  `numero_tavolo` int(11) NOT NULL,
  `capelli` varchar(16) NOT NULL,
  `carattere` varchar(16) NOT NULL,
  `sesso` char(1) NOT NULL,
  `gusto` char(1) NOT NULL,
  `match_num` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dump dei dati per la tabella `prede`
--

INSERT INTO `prede` (`user_id`, `nome`, `cognome`, `username`, `numero_tavolo`, `capelli`, `carattere`, `sesso`, `gusto`, `match_num`) VALUES
(2, '', '', 'lorenzo', 4, 'biondi', 'generosita', 'M', 'F', 0),
(3, '', '', 'riccardo', 6, 'biondi', 'generosita', 'M', 'F', 0),
(4, '', '', 'maria', 7, 'biondi', 'bellezza', 'F', 'M', 0),
(5, '', '', 'katia', 4, 'marroni', 'bellezza', 'F', 'M', 0),
(10, '', '', 'damiana', 9, 'rossi', 'simpatia', 'F', 'M', 0);

--
-- Indici per le tabelle scaricate
--

--
-- Indici per le tabelle `predatori`
--
ALTER TABLE `predatori`
  ADD PRIMARY KEY (`user_id`);

--
-- Indici per le tabelle `prede`
--
ALTER TABLE `prede`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT per le tabelle scaricate
--

--
-- AUTO_INCREMENT per la tabella `predatori`
--
ALTER TABLE `predatori`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=56;

--
-- AUTO_INCREMENT per la tabella `prede`
--
ALTER TABLE `prede`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
