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
account.belongsTo(accountType, {as: 'accountType' ,foreignKey: 'AccountTypesCode'});
accountStatus.hasMany(account, {foreignKey: 'AccountStatusId'});
account.belongsTo(accountStatus, {as: 'accountStatus',foreignKey: 'AccountStatusId'});
//relation customer
customerType.hasMany(customer, {foreignKey: 'CustomerTypesCode'});
customer.belongsTo(customerType, {as:'customerType',foreignKey:'CustomerTypesCode'});
//relation transaction
transactionStatus.hasMany(transactionLog, {foreignKey: 'TransactionStatusId'});
transactionLog.belongsTo(transactionStatus, {as:'transactionStatus',foreignKey: 'TransactionStatusId'});
transactionType.hasMany(transactionLog,{foreignKey:'TransactionTypesId'});
transactionLog.belongsTo(transactionType, {as:'transactionType',foreignKey: 'TransactionTypeId'});
//relation loginlogs
loginStatus.hasMany(loginLogs, {foreignKey:'LoginStatusId'});
loginLogs.belongsTo(loginStatus,{as:'loginStatus',foreignKey:'LoginStatusId'});

//relation between account, transaction, customer, loginlogs
customer.hasMany(account, {foreignKey: 'CustomerId'});
account.belongsTo(customer,{as:'customer', foreignKey: 'CustomerId'} );
account.hasMany(transactionLog, {foreignKey: 'AccountId'});
transactionLog.belongsTo(account, {as:'account',foreignKey:'AccountId'});
account.hasMany(loginLogs,{foreignKey: 'AccountId'});
loginLogs.belongsTo(account, { as:'LogAccount',foreignKey: 'AccountId'});


