-- Adminer 4.8.1 MySQL 8.0.31-0ubuntu0.22.04.1 dump

SET NAMES utf8;
SET time_zone = '+00:00';
SET foreign_key_checks = 0;
SET sql_mode = 'NO_AUTO_VALUE_ON_ZERO';

SET NAMES utf8mb4;

DROP TABLE IF EXISTS `mans`;
CREATE TABLE `mans` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `classno` varchar(5) NOT NULL,
  `section` varchar(20) CHARACTER SET utf8mb4  NOT NULL,
  `rollno` varchar(10) NOT NULL,
  `gender` varchar(1) CHARACTER SET utf8mb4  NOT NULL,
  `age` varchar(2) CHARACTER SET utf8mb4  NOT NULL,
  `ans` json NOT NULL,
  `create_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


DROP TABLE IF EXISTS `muser`;
CREATE TABLE `muser` (
  `id` int NOT NULL AUTO_INCREMENT,
  `uid` varchar(20) NOT NULL,
  `fname` varchar(50) NOT NULL,
  `lname` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `contact` varchar(20) NOT NULL,
  `password` varchar(200) NOT NULL,
  `img` varchar(100) DEFAULT NULL,
  `gender` char(6) DEFAULT NULL,
  `address1` varchar(50) DEFAULT NULL,
  `address2` varchar(50) DEFAULT NULL,
  `state` varchar(50) DEFAULT NULL,
  `authkey` varchar(50) NOT NULL,
  `f_code` char(7) DEFAULT NULL,
  `f_date` int DEFAULT NULL,
  `f_state` tinyint NOT NULL DEFAULT '0',
  `update_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `create_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `status` tinyint NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


-- 2022-12-22 08:46:52
