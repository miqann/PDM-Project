
const Account = require('../Models/AccountModels/AccountModel');

exports.getAccount=  (username) => {
    return Account.findAll({
        attributes: ['login', 'password', 'AccountId'],
        where: {
            Login: username,
        }
        });
};

exports.createAccount = (accountId, customerId, fullName, userName, password) => {
    try {
        return accountCreated = Account.create({
            AccountId: accountId,
            CustomerId: customerId,
            AccountName: fullName,
            Login: userName,
            Password: password,
            AccountTypesCode: 30291,
            AccountStatusId: 302934,
            CurrentBalance: 50000,
        })
    } catch (err) {
        console.log(err);
    }
}