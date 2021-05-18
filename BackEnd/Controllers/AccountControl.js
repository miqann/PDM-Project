
const Account = require('../Models/AccountModels/AccountModel');

exports.getAccount=  (username) => {
    return Account.findAll({
        attributes: ['login', 'password', 'AccountId'],
        where: {
            Login: username,
        }
        });
};