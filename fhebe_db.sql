CREATE DATABASE  IF NOT EXISTS `fhebe_db` /*!40100 DEFAULT CHARACTER SET utf8 */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `fhebe_db`;
-- MySQL dump 10.13  Distrib 8.0.26, for Win64 (x86_64)
--
-- Host: 192.168.245.156    Database: fhebe_db
-- ------------------------------------------------------
-- Server version	8.0.22

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
-- Table structure for table `Product`
--

DROP TABLE IF EXISTS `Product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Product` (
  `idProduct` int NOT NULL AUTO_INCREMENT,
  `Barcode` varchar(255) DEFAULT NULL,
  `Description` varchar(255) DEFAULT NULL,
  `Schedule` varchar(255) DEFAULT NULL,
  `Height` varchar(255) DEFAULT NULL,
  `Length` varchar(255) DEFAULT NULL,
  `Width` varchar(255) DEFAULT NULL,
  `Pack` varchar(255) DEFAULT NULL,
  `Weight` varchar(255) DEFAULT NULL,
  `Units` varchar(255) DEFAULT NULL,
  `Type` varchar(255) DEFAULT NULL,
  `Ingredients` varchar(255) DEFAULT NULL,
  `Manufacturer` varchar(255) DEFAULT NULL,
  `Directions` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`idProduct`)
) ENGINE=InnoDB AUTO_INCREMENT=94 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Product`
--

LOCK TABLES `Product` WRITE;
/*!40000 ALTER TABLE `Product` DISABLE KEYS */;
INSERT INTO `Product` VALUES (62,'','BD Micro-Fine Plus Pen Needles','','82mm','128mm','70mm','1','','100','Pen Needles','','BD Medical',''),(63,NULL,'One Touch Ultra Strips','','81mm','61mm','32mm','1','','50','Strips','','LifeScan',''),(64,NULL,'Viagra','4','58mm','78mm','19mm','1','','2','Tablets','Sildenafil','Pfizer',''),(65,NULL,'Lipitor 20','4','62mm','110mm','25mm','1','','30','Tablets','Atorvastatin','Pfizer',''),(66,NULL,'Rehidrat','0','75mm','105mm','40mm','1','','6','Sachets','Sodium Chloride, Potassium Chloride, Sodium Bicarbonate, Glucose, Sucrose','Johnson&Johnson',''),(67,NULL,'Caduet','4','62','110','22','1','','30','ablets','Amlodipne','Pfizer','see enclosed package insert'),(68,NULL,'Lyrica 150mg','5','50mm','122mm','35mm','1','','56','Capsules','Pregabalin','Pfizer',''),(69,NULL,'Lomanor ','3','48mm','120mm','20mm','1','','30','Tablets','Amlodipine Besylate','Pharmacia',''),(70,NULL,'CHAMPIX','5','120mm','92mm','150mm','1','','56','tablets','Varenicline Tartrate','Pfizer','see enclozed package insert'),(71,NULL,'Truvalin','5','56mm','131mm','50mm','1','','60','Tablets','Quetiapine','Astra Zeneca',''),(72,NULL,'Lennon - Quinine Sulphate 300mg Tablets ','2,4','80mm','53mm','53mm','1','','100','Tablets ','Quinine Sulphate ','Aspen ',''),(73,NULL,'Azapress','4','69','49','46','1','','100x50mg','tablet','sitostatika','aspen','see enclosed package insert'),(74,NULL,'Hy-po-tone 250','3','80mm','53mm','53mm','1','','100','Tablets','Anhydrous Methyldopa','Aspen ',''),(75,NULL,'Lenolax Enema','','170','45','','1','','135ml','liquid','Sodium Phosphate heptahydrate','',' Adults: 135ml or as directed by physician'),(76,NULL,'Hy-po-tone 500','3','105mm','53mm','53mm','1','','100','tablets','Anhydrous Methyldopa','Aspen ',''),(77,NULL,'Purata-30','5','57mm','53mm','53mm','1','','100','Tablets ','Oxazepam ','Aspen ',''),(78,NULL,'Pax-5','5','45mm','100mm','25mm','1','','30','Tablets','Diasipam','Aspen',''),(79,NULL,'Purata-15','5','45mm','100mm','52mm','1','','100','Tablets ','Oxazepam ','Aspen ',''),(80,NULL,'Tydamine','5','57mm','','54mm','1','','50','Tablets','Trimipramine Maleate','Pharmacare',''),(81,NULL,'Lorien ','5','60mm','125mm','17mm','1','','28','Capsules','Fluoxetine Hydrochloride','Aspen ',''),(82,'6006891005319','Steromien','4','115','50','50','1','','100ml','liquid','Betamethasone','aspen','see enclosed package insert'),(83,'6006891007672','Chloramex ophthalmic ointment','4','25','80','20','1','','3.5g','ointment','Chloramphenicol','aspen','see enclosed package insert'),(84,'6006970001713','Biocort','2','30','125','24','1','','20g','cream','Hydrocortisone acetate','Akacia health care','See encloased package insert'),(85,'6007031000171','Coughcod Junior Syrup','2','118mm','50mm','50mm','1','','100ml','Liquid','Ephedrine Hydrochloride, Ammonium Chloride, Sodium Citrate, Codeine Phosphate, Mepyramine Maleate','Aspen',''),(86,'6007650000026','Scar gard','','129','','47','1','','50ml','cream','Vitamin E, Evening Primrose oil & Arnica','Bioforce S.A.','Apply to scar immediately after scab has fallen off. Morning: Apply Scar-Gard lightly sun protection to affected area. Evening: After washing, massage scar with Scar-gard for a minimum of 15 minutes. '),(87,'6001145900327','Crestor','4','56mm','137mm','30mm','1','','30','Tablets','Rosuvastatin','AstraZeneca','See enclosed package insert'),(88,'6007853000229','Dermastine ','','154','58','58','1','','150ml','liquid','Emulsion E/H','Pharmafric','the emulsion should be used twice daily ( morning and evening), Massaged in slowly as a daily skin care'),(89,'6007853000403','Detrunorm','3','42mm','102mm','24mm','1','','30','tablets','Propiverine hydrochloride','Pharmafrica(PTY)Ltd',''),(90,'6008288000693','Histak 150','3','55mm','125mm','35mm','1','','60','Tablets','Ranitidine Hydrochloride','Ranbaxy ',''),(91,'6008288001140','Sinopren','3','46mm','96mm','25mm','1','','10','Tablets','Lisinopril','Ranbaxy','');
/*!40000 ALTER TABLE `Product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `SystemUser`
--

DROP TABLE IF EXISTS `SystemUser`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `SystemUser` (
  `idSystemUser` int NOT NULL AUTO_INCREMENT,
  `Username` varchar(255) DEFAULT NULL,
  `Password` varchar(255) DEFAULT NULL,
  `FullName` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`idSystemUser`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `SystemUser`
--

LOCK TABLES `SystemUser` WRITE;
/*!40000 ALTER TABLE `SystemUser` DISABLE KEYS */;
INSERT INTO `SystemUser` VALUES (1,'fhebe@gmail.com','12345','Fhebe');
/*!40000 ALTER TABLE `SystemUser` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-10-12 15:56:33
