const db = require('../../config/database');
//import account model
const account = require('../../Models/AccountModels/AccountModel');
const accountType = require('../../Models/AccountModels/AccountType');
const accountStatus = require('../../Models/AccountModels/AccountStatus');

//import customer model
const customer = require('../../Models/CustomerModels/CustomerModel');
const customerType = require('../../Models/CustomerModels/CustomerType');

//import transaction model
const transactionLog = require('../../Models/TransactionModels/TransactionModels');
const transactionType = require('../../Models/TransactionModels/TransactionType');
const transactionStatus = require('../../Models/TransactionModels/TransactionStatus');

//import loginlog model
const loginLogs = require('../../Models/LoginModels/LoginLog');
const loginStatus = require('../../Models/LoginModels/LoginStatus');

//relation account
accountType.hasMany(account, {foreignKey: 'AccountTypesCode'});
accountStatus.hasMany(account, {foreignKey: 'AccountStatusId'});

//relation customer
customerType.hasMany(customer, {foreignKey: 'CustomerTypesCode'});

//relation transaction
transactionStatus.hasMany(transactionLog, {foreignKey: 'TransactionStatusId'});
transactionType.hasMany(transactionLog,{foreignKey:'TransactionTypesId'});

//relation loginlogs
loginStatus.hasMany(loginLogs, {foreignKey:'LoginStatusId'});

//relation between account, transaction, customer, loginlogs
customer.hasMany(account, {foreignKey: 'CustomerId'});
account.hasMany(transactionLog, {foreignKey: 'AccountId'});
account.hasMany(loginLogs,{foreignKey: 'AccountId'});


