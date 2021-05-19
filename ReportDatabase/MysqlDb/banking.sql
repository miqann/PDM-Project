create database banking;
use banks;
CREATE TABLE `TransactionLogs` (
  `TransactionId` int PRIMARY KEY NOT NULL,
  `TransactionDate` datetime DEFAULT NULL,
  `TransactionTypesId` int DEFAULT NULL,
  `TransactionAmount` int DEFAULT NULL,
  `AccountId` int DEFAULT NULL,
  `TransactionTypeId` int DEFAULT NULL,
  `TransactionStatusId` int DEFAULT NULL
);

CREATE TABLE `TransactionStatus` (
  `TransactionStatusId` int PRIMARY KEY NOT NULL,
  `TransactionStatusName` varchar(40) DEFAULT NULL
);

CREATE TABLE `TransactionTypes` (
  `TransactionTypesId` int PRIMARY KEY NOT NULL,
  `TransactionTypesName` varchar(40) DEFAULT NULL,
  `TransactionTypesDescription` varchar(40) DEFAULT NULL,
  `TransactionFee` int DEFAULT NULL
);

CREATE TABLE `Accounts` (
  `AccountId` int PRIMARY KEY NOT NULL,
  `CustomerId` int DEFAULT NULL,
  `AccountName` varchar(40) DEFAULT NULL,
  `DateOpened` date DEFAULT NULL,
  `CurrentBalance` int DEFAULT NULL,
  `Login` varchar(40) DEFAULT NULL,
  `Password` varchar(40) DEFAULT NULL,
  `AccountTypesCode` int DEFAULT NULL,
  `AccountStatusId` int DEFAULT NULL
);

CREATE TABLE `Customers` (
  `CustomerId` int PRIMARY KEY NOT NULL,
  `CustomerName` varchar(40) DEFAULT NULL,
  `CustomerPhone` int DEFAULT NULL,
  `CustomerEmail` varchar(40) DEFAULT NULL,
  `city` varchar(40) DEFAULT NULL,
  `CustomerTypesCode` int DEFAULT NULL
);

CREATE TABLE `CustomerTypes` (
  `CustomerTypesCode` int PRIMARY KEY NOT NULL,
  `CustomerTypesDescription` varchar(40) DEFAULT NULL
);


CREATE TABLE `AccountStatus` (
  `AccountStatusId` int PRIMARY KEY NOT NULL,
  `AccountStatusDescription` varchar(50) DEFAULT NULL
);

CREATE TABLE `AccountTypes` (
  `AccountTypesCode` int PRIMARY KEY NOT NULL,
  `AccountTypesDescription` varchar(50) DEFAULT NULL
);

CREATE TABLE `LoginLog` (
  `LoginId` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `Times` datetime DEFAULT NULL,
  `PlaceLogin` varchar(40) DEFAULT NULL,
  `Descriptions` varchar(40) DEFAULT NULL,
  `AccountId` int DEFAULT NULL,
  `LoginStatusId` int DEFAULT NULL,
  `Login` varchar(40) DEFAULT NULL,
  `Password` varchar(40) DEFAULT NULL
);

CREATE TABLE `LoginStatus` (
  `LoginStatusId` int PRIMARY KEY NOT NULL,
  `LoginStatusName` varchar(40) DEFAULT NULL
);



ALTER TABLE `Accounts` ADD FOREIGN KEY (`CustomerId`) REFERENCES `Customers` (`CustomerId`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `Accounts` ADD FOREIGN KEY (`AccountTypesCode`) REFERENCES `AccountTypes` (`AccountTypesCode`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `Accounts` ADD FOREIGN KEY (`AccountStatusId`) REFERENCES `AccountStatus` (`AccountStatusId`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `Customers` ADD FOREIGN KEY (`CustomerTypesCode`) REFERENCES `CustomerTypes` (`CustomerTypesCode`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `LoginLog` ADD FOREIGN KEY (`AccountId`) REFERENCES `Accounts` (`AccountId`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `LoginLog` ADD FOREIGN KEY (`LoginStatusId`) REFERENCES `LoginStatus` (`LoginStatusId`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `TransactionLogs` ADD FOREIGN KEY (`TransactionTypesId`) REFERENCES `TransactionTypes` (`TransactionTypesId`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `TransactionLogs` ADD FOREIGN KEY (`AccountId`) REFERENCES `Accounts` (`AccountId`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `TransactionLogs` ADD FOREIGN KEY (`TransactionStatusId`) REFERENCES `TransactionStatus` (`TransactionStatusId`) ON DELETE CASCADE ON UPDATE CASCADE;

CREATE INDEX `CustomerId` ON `Accounts` (`CustomerId`);

CREATE INDEX `AccountTypesCode` ON `Accounts` (`AccountTypesCode`);

CREATE INDEX `AccountStatusId` ON `Accounts` (`AccountStatusId`);

CREATE INDEX `CustomerTypesCode` ON `Customers` (`CustomerTypesCode`);

CREATE INDEX `AccountId` ON `LoginLog` (`AccountId`);

CREATE INDEX `LoginStatusId` ON `LoginLog` (`LoginStatusId`);

CREATE INDEX `TransactionTypesId` ON `TransactionLogs` (`TransactionTypesId`);

CREATE INDEX `AccountId` ON `TransactionLogs` (`AccountId`);

CREATE INDEX `TransactionStatusId` ON `TransactionLogs` (`TransactionStatusId`);
