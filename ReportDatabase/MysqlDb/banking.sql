CREATE TABLE `Accounts` (
  `AccountId` int NOT NULL,
  `CustomerId` int DEFAULT NULL,
  `AccountName` varchar(40) DEFAULT NULL,
  `DateOpened` date DEFAULT NULL,
  `CurrentBalance` int DEFAULT NULL,
  `Login` varchar(40) DEFAULT NULL,
  `Password` varchar(40) DEFAULT NULL,
  `AccountTypesCode` int DEFAULT NULL,
  `AccountStatusId` int DEFAULT NULL,
  PRIMARY KEY (`AccountId`),
  KEY `CustomerId` (`CustomerId`),
  KEY `AccountTypesCode` (`AccountTypesCode`),
  KEY `AccountStatusId` (`AccountStatusId`),
  CONSTRAINT `Accounts_ibfk_1` FOREIGN KEY (`CustomerId`) REFERENCES `Customers` (`CustomerId`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `Accounts_ibfk_2` FOREIGN KEY (`AccountTypesCode`) REFERENCES `AccountTypes` (`AccountTypesCode`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `Accounts_ibfk_3` FOREIGN KEY (`AccountStatusId`) REFERENCES `AccountStatus` (`AccountStatusId`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `AccountStatus` (
  `AccountStatusId` int NOT NULL,
  `AccountStatusDescription` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`AccountStatusId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `AccountTypes` (
  `AccountTypesCode` int NOT NULL,
  `AccountTypesDescription` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`AccountTypesCode`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `Customers` (
  `CustomerId` int NOT NULL,
  `CustomerName` varchar(40) DEFAULT NULL,
  `CustomerPhone` int DEFAULT NULL,
  `CustomerEmail` varchar(40) DEFAULT NULL,
  `city` varchar(40) DEFAULT NULL,
  `CustomerTypesCode` int DEFAULT NULL,
  PRIMARY KEY (`CustomerId`),
  KEY `CustomerTypesCode` (`CustomerTypesCode`),
  CONSTRAINT `Customers_ibfk_1` FOREIGN KEY (`CustomerTypesCode`) REFERENCES `CustomerTypes` (`CustomerTypesCode`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `CustomerTypes` (
  `CustomerTypesCode` int NOT NULL,
  `CustomerTypesDescription` varchar(40) DEFAULT NULL,
  PRIMARY KEY (`CustomerTypesCode`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `LoginLog` (
  `LoginId` int NOT NULL AUTO_INCREMENT,
  `Times` datetime DEFAULT NULL,
  `PlaceLogin` varchar(40) DEFAULT NULL,
  `Descriptions` varchar(40) DEFAULT NULL,
  `AccountId` int DEFAULT NULL,
  `LoginStatusId` int DEFAULT NULL,
  `Login` varchar(40) DEFAULT NULL,
  `Password` varchar(40) DEFAULT NULL,
  PRIMARY KEY (`LoginId`),
  KEY `AccountId` (`AccountId`),
  KEY `LoginStatusId` (`LoginStatusId`),
  CONSTRAINT `LoginLog_ibfk_1` FOREIGN KEY (`AccountId`) REFERENCES `Accounts` (`AccountId`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `LoginLog_ibfk_2` FOREIGN KEY (`LoginStatusId`) REFERENCES `LoginStatus` (`LoginStatusId`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `LoginStatus` (
  `LoginStatusId` int NOT NULL,
  `LoginStatusName` varchar(40) DEFAULT NULL,
  PRIMARY KEY (`LoginStatusId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `TransactionLogs` (
  `TransactionId` int NOT NULL,
  `TransactionDate` datetime DEFAULT NULL,
  `TransactionTypesId` int DEFAULT NULL,
  `TransactionAmount` int DEFAULT NULL,
  `AccountId` int DEFAULT NULL,
  `TransactionTypeId` int DEFAULT NULL,
  `TransactionStatusId` int DEFAULT NULL,
  PRIMARY KEY (`TransactionId`),
  KEY `TransactionTypesId` (`TransactionTypesId`),
  KEY `AccountId` (`AccountId`),
  KEY `TransactionStatusId` (`TransactionStatusId`),
  CONSTRAINT `TransactionLogs_ibfk_1` FOREIGN KEY (`TransactionTypesId`) REFERENCES `TransactionTypes` (`TransactionTypesId`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `TransactionLogs_ibfk_2` FOREIGN KEY (`AccountId`) REFERENCES `Accounts` (`AccountId`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `TransactionLogs_ibfk_3` FOREIGN KEY (`TransactionStatusId`) REFERENCES `TransactionStatus` (`TransactionStatusId`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `TransactionStatus` (
  `TransactionStatusId` int NOT NULL,
  `TransactionStatusName` varchar(40) DEFAULT NULL,
  PRIMARY KEY (`TransactionStatusId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `TransactionTypes` (
  `TransactionTypesId` int NOT NULL,
  `TransactionTypesName` varchar(40) DEFAULT NULL,
  `TransactionTypesDescription` varchar(40) DEFAULT NULL,
  `TransactionFee` int DEFAULT NULL,
  PRIMARY KEY (`TransactionTypesId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;