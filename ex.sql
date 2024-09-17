-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: kafic
-- ------------------------------------------------------
-- Server version	8.0.32

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `detaljiporudbine`
--

DROP TABLE IF EXISTS `detaljiporudbine`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `detaljiporudbine` (
  `detaljiPorudbine_id` int NOT NULL AUTO_INCREMENT,
  `kolicina` int NOT NULL,
  `pice_pice_id` int NOT NULL,
  `narudzbine_narudzbina_id` int DEFAULT NULL,
  PRIMARY KEY (`detaljiPorudbine_id`),
  KEY `fk_detaljiporudbine_pice1_idx` (`pice_pice_id`),
  KEY `fk_detaljiporudbine_narudzbine1_idx` (`narudzbine_narudzbina_id`),
  CONSTRAINT `fk_detaljiporudbine_narudzbine1` FOREIGN KEY (`narudzbine_narudzbina_id`) REFERENCES `narudzbine` (`narudzbina_id`),
  CONSTRAINT `fk_detaljiporudbine_pice1` FOREIGN KEY (`pice_pice_id`) REFERENCES `pice` (`pice_id`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `detaljiporudbine`
--

LOCK TABLES `detaljiporudbine` WRITE;
/*!40000 ALTER TABLE `detaljiporudbine` DISABLE KEYS */;
INSERT INTO `detaljiporudbine` VALUES (1,1,1,20),(2,1,3,20),(3,1,11,20),(4,2,12,20),(5,3,16,21),(6,1,9,22),(7,1,13,22),(8,1,14,22),(9,2,22,23),(10,4,12,24),(11,1,11,25),(12,1,1,25),(13,2,1,26),(14,2,11,27),(15,1,12,27),(16,1,6,27),(17,1,8,27),(18,2,11,28),(19,1,14,28),(20,1,21,28),(21,2,12,29);
/*!40000 ALTER TABLE `detaljiporudbine` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `kategorijepica`
--

DROP TABLE IF EXISTS `kategorijepica`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `kategorijepica` (
  `kategorija_id` int NOT NULL AUTO_INCREMENT,
  `naziv` varchar(100) NOT NULL,
  PRIMARY KEY (`kategorija_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `kategorijepica`
--

LOCK TABLES `kategorijepica` WRITE;
/*!40000 ALTER TABLE `kategorijepica` DISABLE KEYS */;
INSERT INTO `kategorijepica` VALUES (1,'Gazirani sokovi'),(2,'Prirodni sokovi'),(3,'Kafe'),(4,'Piva'),(5,'Zestoka pica');
/*!40000 ALTER TABLE `kategorijepica` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `magacin`
--

DROP TABLE IF EXISTS `magacin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `magacin` (
  `magacin_id` int NOT NULL AUTO_INCREMENT,
  `kolicina` int NOT NULL,
  `pice_pice_id` int NOT NULL,
  PRIMARY KEY (`magacin_id`),
  KEY `fk_magacin_pice1_idx` (`pice_pice_id`),
  CONSTRAINT `fk_magacin_pice1` FOREIGN KEY (`pice_pice_id`) REFERENCES `pice` (`pice_id`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `magacin`
--

LOCK TABLES `magacin` WRITE;
/*!40000 ALTER TABLE `magacin` DISABLE KEYS */;
INSERT INTO `magacin` VALUES (1,23,1),(2,22,2),(3,20,3),(4,20,4),(5,20,5),(6,19,6),(7,20,7),(8,19,8),(9,20,9),(10,20,10),(11,16,11),(12,21,12),(13,20,13),(14,19,14),(15,20,15),(16,20,16),(17,20,17),(18,20,18),(19,20,19),(20,20,20),(21,19,21),(22,20,22),(23,20,23),(24,20,24),(25,20,25);
/*!40000 ALTER TABLE `magacin` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `nabavke`
--

DROP TABLE IF EXISTS `nabavke`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `nabavke` (
  `nabavka_id` int NOT NULL AUTO_INCREMENT,
  `kolicina` int NOT NULL,
  `datum_nabavke` datetime NOT NULL,
  `cena` decimal(10,2) NOT NULL,
  `zaposleni_zaposleni_id` int NOT NULL,
  PRIMARY KEY (`nabavka_id`),
  KEY `fk_nabavke_zaposleni1_idx` (`zaposleni_zaposleni_id`),
  CONSTRAINT `fk_nabavke_zaposleni1` FOREIGN KEY (`zaposleni_zaposleni_id`) REFERENCES `zaposleni` (`zaposleni_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `nabavke`
--

LOCK TABLES `nabavke` WRITE;
/*!40000 ALTER TABLE `nabavke` DISABLE KEYS */;
/*!40000 ALTER TABLE `nabavke` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `narudzbine`
--

DROP TABLE IF EXISTS `narudzbine`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `narudzbine` (
  `narudzbina_id` int NOT NULL AUTO_INCREMENT,
  `sto_id` int NOT NULL,
  `datum_narudzbine` datetime NOT NULL,
  `zaposleni_zaposleni_id` int NOT NULL,
  `spremno` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`narudzbina_id`),
  KEY `sto_id` (`sto_id`),
  KEY `fk_narudzbine_zaposleni1_idx` (`zaposleni_zaposleni_id`),
  CONSTRAINT `fk_narudzbine_zaposleni1` FOREIGN KEY (`zaposleni_zaposleni_id`) REFERENCES `zaposleni` (`zaposleni_id`),
  CONSTRAINT `narudzbine_ibfk_1` FOREIGN KEY (`sto_id`) REFERENCES `stolovi` (`sto_id`)
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `narudzbine`
--

LOCK TABLES `narudzbine` WRITE;
/*!40000 ALTER TABLE `narudzbine` DISABLE KEYS */;
INSERT INTO `narudzbine` VALUES (20,1,'2024-09-01 09:30:29',1,1),(21,2,'2024-09-01 09:30:48',1,1),(22,3,'2024-09-01 09:31:12',1,1),(23,4,'2024-09-01 09:31:24',1,1),(24,5,'2024-09-01 09:31:38',1,0),(25,6,'2024-09-01 09:32:01',1,1),(26,3,'2024-09-02 18:27:56',1,0),(27,5,'2024-09-02 19:30:11',1,0),(28,5,'2024-09-03 09:03:56',1,1),(29,1,'2024-09-03 09:23:26',1,1);
/*!40000 ALTER TABLE `narudzbine` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pice`
--

DROP TABLE IF EXISTS `pice`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pice` (
  `pice_id` int NOT NULL AUTO_INCREMENT,
  `naziv` varchar(100) NOT NULL,
  `cena` decimal(10,2) NOT NULL,
  `kategorija_id` int NOT NULL,
  `slika` varchar(45) DEFAULT NULL,
  `opis` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`pice_id`),
  KEY `kategorija_id` (`kategorija_id`),
  CONSTRAINT `pice_ibfk_1` FOREIGN KEY (`kategorija_id`) REFERENCES `kategorijepica` (`kategorija_id`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pice`
--

LOCK TABLES `pice` WRITE;
/*!40000 ALTER TABLE `pice` DISABLE KEYS */;
INSERT INTO `pice` VALUES (1,'Coca Cola',350.00,1,'cocaCola.jpeg','Kultni kola napitak, '),(2,'Coca Cola Zero',300.00,1,'cocaColaZero.jpeg','Bez kalorija, isti ukus.'),(3,'Fanta',250.00,1,'fanta.jpeg','Voćno, gazirano, osvežavajuće.'),(4,'Sprite',250.00,1,'sprite.jpeg','Limun-limeta, čisto osveženje.'),(5,'Cockta',250.00,1,'cockta.jpeg','Klasik sa gaziranim ukusom kafe.'),(6,'Jabuka',230.00,2,'jabuka.jpeg','Svež, prirodan ukus jabuke.'),(7,'Jagoda',230.00,2,'jagoda.jpeg','Slatko osveženje sa ukusom jagode'),(8,'Breskva',230.00,2,'breskva.jpeg','Blag i osvežavajući ukus breskve.'),(9,'Borovnica',230.00,2,'borovnica.jpeg','Bogat, voćni ukus borovnice.'),(10,'Narandza',230.00,2,'narandza.jpeg','Klasičan, sočan ukus narandže.'),(11,'Espresso',195.00,3,'espresso.jpeg','Intenzivan i pun ukus.'),(12,'Cappuccino',240.00,3,'cappuccino.jpeg','Kremasto, sa savršenim balansom.'),(13,'Macchiato',230.00,3,'macchiato.jpeg','Espreso sa kapljicom mleka.'),(14,'Nescafe',240.00,3,'nescafe.jpeg','Lagano, brzo pripremljeno osveženje.'),(15,'Domaća kafa',180.00,3,'narandza.jpeg','Tradicionalno jaka i aromatična.'),(16,'Lav 0.33',260.00,4,'lav.jpeg','Klasičan domaći lager.'),(17,'Zajećarsko 0,33',260.00,4,'zajecarsko.jpeg','Tradicionalno, punog ukusa.'),(18,'Bavaria 0.25',250.00,4,'bavaria.jpeg','Osvežavajuće, blago gorko.'),(19,'Stella Artoa 0.25',260.00,4,'stella.jpeg','Lagano, sa bogatom aromom.'),(20,'Heineken 0.25',280.00,4,'heineken.jpeg','Svetski poznat, savršeno izbalansiran.'),(21,'Jack Daniels',340.00,5,'jackDaniels.jpeg','Svetski poznat, klasičan američki viski.'),(22,'Johnnie Walker',330.00,5,'johnnieWalker.jpeg','Svetski poznat, prepoznatljiv škotski blend.'),(23,'Balantines',330.00,5,'balantines.jpeg','Blago i uravnoteženo.'),(24,'Finlandia',280.00,5,'finlandia.png','Čista i glatka votka.'),(25,'Bacardi',280.00,5,'bacardi.jpeg','Lagani i osvežavajući rum.');
/*!40000 ALTER TABLE `pice` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `stolovi`
--

DROP TABLE IF EXISTS `stolovi`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `stolovi` (
  `sto_id` int NOT NULL AUTO_INCREMENT,
  `broj_stola` int NOT NULL,
  `status` enum('slobodan','zauzet') NOT NULL,
  PRIMARY KEY (`sto_id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `stolovi`
--

LOCK TABLES `stolovi` WRITE;
/*!40000 ALTER TABLE `stolovi` DISABLE KEYS */;
INSERT INTO `stolovi` VALUES (1,1,'slobodan'),(2,2,'slobodan'),(3,3,'slobodan'),(4,4,'slobodan'),(5,5,'slobodan'),(6,6,'slobodan'),(7,7,'slobodan');
/*!40000 ALTER TABLE `stolovi` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `zaposleni`
--

DROP TABLE IF EXISTS `zaposleni`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `zaposleni` (
  `zaposleni_id` int NOT NULL AUTO_INCREMENT,
  `ime` varchar(50) NOT NULL,
  `prezime` varchar(50) NOT NULL,
  `uloga` varchar(50) NOT NULL,
  `username` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`zaposleni_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `zaposleni`
--

LOCK TABLES `zaposleni` WRITE;
/*!40000 ALTER TABLE `zaposleni` DISABLE KEYS */;
INSERT INTO `zaposleni` VALUES (1,'Marko','Markovic','sanker','maremare','mare123'),(3,'Nikola','Nikolic','menadzer','niknik','nik123');
/*!40000 ALTER TABLE `zaposleni` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-09-08 22:13:47
