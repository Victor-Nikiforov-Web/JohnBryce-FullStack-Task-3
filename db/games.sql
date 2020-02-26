-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 26, 2020 at 07:07 PM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.4.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `games`
--
CREATE DATABASE IF NOT EXISTS `games` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `games`;

-- --------------------------------------------------------

--
-- Table structure for table `comments`
--

CREATE TABLE `comments` (
  `id` int(11) NOT NULL,
  `gameID` int(11) NOT NULL,
  `time` datetime NOT NULL,
  `comment` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `comments`
--

INSERT INTO `comments` (`id`, `gameID`, `time`, `comment`) VALUES
(1, 1, '2020-02-12 19:21:57', 'test!'),
(2, 1, '2020-02-26 19:36:56', 'test#2'),
(3, 2, '2020-02-26 19:47:30', 'new comment !'),
(4, 3, '2020-02-26 19:48:25', 'comment'),
(5, 6, '2020-02-26 19:52:57', 'new comment!'),
(6, 5, '2020-02-26 19:54:07', 'hey !'),
(7, 2, '2020-02-26 19:56:01', 'test'),
(8, 2, '2020-02-26 19:56:55', 'dfsdfdsf'),
(9, 6, '2020-02-26 19:57:50', '111'),
(10, 6, '2020-02-26 19:57:54', '111'),
(11, 6, '2020-02-26 19:57:57', '222'),
(12, 3, '2020-02-26 19:58:45', 'rrererer');

-- --------------------------------------------------------

--
-- Table structure for table `results`
--

CREATE TABLE `results` (
  `id` int(11) NOT NULL,
  `teamA` varchar(50) NOT NULL,
  `teamB` varchar(50) NOT NULL,
  `scoreA` int(10) NOT NULL,
  `scoreB` int(10) NOT NULL,
  `time` datetime NOT NULL,
  `category` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `results`
--

INSERT INTO `results` (`id`, `teamA`, `teamB`, `scoreA`, `scoreB`, `time`, `category`) VALUES
(1, 'FC Barcelona', 'Real-Madrid', 3, 1, '2020-02-05 18:05:40', 'Football'),
(2, 'Chelsea', 'Man United', 2, 2, '2020-02-06 18:05:40', 'Football'),
(3, 'Maccabi Tel-Aviv', 'Maccabi-Haifa', 2, 0, '2020-02-19 18:07:22', 'Football'),
(4, 'Maccabi Tel-Aviv', 'cska Moscow', 82, 61, '2020-02-23 18:07:22', 'Basketball'),
(5, 'Maccabi Tel-Aviv', 'Real-Madrid', 88, 91, '2020-02-11 18:08:38', 'Basketball'),
(6, 'FC Barcelona', 'Real-Madrid', 80, 81, '2020-02-16 18:08:38', 'Basketball');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `comments`
--
ALTER TABLE `comments`
  ADD PRIMARY KEY (`id`),
  ADD KEY `gameID` (`gameID`);

--
-- Indexes for table `results`
--
ALTER TABLE `results`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `comments`
--
ALTER TABLE `comments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `results`
--
ALTER TABLE `results`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `comments`
--
ALTER TABLE `comments`
  ADD CONSTRAINT `comments_ibfk_1` FOREIGN KEY (`gameID`) REFERENCES `results` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
