const db = require('../config/database');
//import account model
const account = require('./AccountModels/AccountModel');
const accountType = require('./AccountModels/AccountType');
const accountStatus = require('./AccountModels/AccountStatus');

//import customer model
const customer = require('./CustomerModels/CustomerModel');
const customerType = require('./CustomerModels/CustomerType');

//import transaction model
const transactionLog = require('./TransactionModels/TransactionModels');
const transactionType = require('./TransactionModels/TransactionType');
const transactionStatus = require('./TransactionModels/TransactionStatus');

//import loginlog model
const loginLogs = require('./LoginModels/LoginLog');
const loginStatus = require('./LoginModels/LoginStatus');

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


