
const Account = require('../Models/AccountModels/AccountModel');
const AccountType = require('../Models/AccountModels/AccountType');
const AccountStatus = require('../Models/AccountModels/AccountStatus');
const e = require('express');

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


exports.searchAccount = (req,res,next) => {
    let {AccountId, customerId, fullName, AccountStatus} = req.query;
    console.log(req.query);
    if(customerId === '' && AccountId === '' && AccountStatus !== '') {
        Account.findAll({
            attributes: ['AccountId', 'AccountName','DateOpened', 'CurrentBalance','Login'],
            include:[
                {
                attributes: ['CustomerName'],
                association:'customer'
                },{
                    attributes:['AccountTypesDescription'],
                    association: 'accountType'
                },{
                    attributes:['AccountStatusDescription'],
                    association:'accountStatus',
                    where: {
                        AccountStatusDescription: AccountStatus
                    }
                }
            ],
            raw:true,
        })
        .then(result => {
            res.json(result);
            console.log(JSON.stringify(result, null, 2));
        });
    }
    if(AccountId !== '' && customerId === '' && fullName === '' ){
        Account.findAll({
            attributes: ['AccountId', 'AccountName','DateOpened', 'CurrentBalance','Login'],
            where: {
                AccountId: AccountId,
            },
            include:[
                {
                attributes: ['CustomerName'],
                association:'customer'
                },{
                    attributes:['AccountTypesDescription'],
                    association: 'accountType'
                },{
                    attributes:['AccountStatusDescription'],
                    association:'accountStatus',
                }
            ],
            raw:true,
    
        })
        .then(result => {
            res.json(result);
            console.log(JSON.stringify(result, null, 2));
    
        })
    }
    if(customerId === '' && AccountId === '' && fullName === ''&& AccountStatus === ''){
        Account.findAll({
            attributes: ['AccountId', 'AccountName','DateOpened', 'CurrentBalance','Login'],
            include:[
                {
                attributes: ['CustomerName'],
                association:'customer'
                },{
                    attributes:['AccountTypesDescription'],
                    association: 'accountType'
                },{
                    attributes:['AccountStatusDescription'],
                    association:'accountStatus',
                }
            ],
            raw:true,
    
        })
        .then(result => {
            res.json(result);
            console.log(JSON.stringify(result, null, 2));
    
        })
    }
    if(customerId !== '' && AccountId === '' && fullName !== ''){
        Account.findAll({
            attributes: ['AccountId', 'AccountName','DateOpened', 'CurrentBalance','Login'],
            include:[
                {
                attributes: ['CustomerName'],
                association:'customer',
                where: {
                    customerId: customerId,
                    customerName: fullName,
                }
                },{
                    attributes:['AccountTypesDescription'],
                    association: 'accountType'
                },{
                    attributes:['AccountStatusDescription'],
                    association:'accountStatus',
                }
            ],
            raw:true,
    
        })
        .then(result => {
            res.json(result);
            console.log(JSON.stringify(result, null, 2));
    
        })
    }
    if(customerId !== '' && AccountId === '' && fullName !== '' && AccountStatus !==''){
        Account.findAll({
            attributes: ['AccountId', 'AccountName','DateOpened', 'CurrentBalance','Login'],
            include:[
                {
                attributes: ['CustomerName'],
                association:'customer',
                where: {
                    customerId: customerId,
                    customerName: fullName,
                }
                },{
                    attributes:['AccountTypesDescription'],
                    association: 'accountType'
                },{
                    attributes:['AccountStatusDescription'],
                    association:'accountStatus',
                    where: {
                        AccountStatusDescription: AccountStatus
                    }
                }
            ],
            raw:true,
    
        })
        .then(result => {
            res.json(result);
            console.log(JSON.stringify(result, null, 2));
    
        })
    }
    if(customerId !== '' && AccountId !== '' && fullName !== '' && AccountStatus !==''){
        Account.findAll({
            attributes: ['AccountId', 'AccountName','DateOpened', 'CurrentBalance','Login'],
            include:[
                {
                attributes: ['CustomerName'],
                association:'customer',
                where: {
                    customerId: customerId,
                    customerName: fullName,
                }
                },{
                    attributes:['AccountTypesDescription'],
                    association: 'accountType'
                },{
                    attributes:['AccountStatusDescription'],
                    association:'accountStatus',
                    where: {
                        AccountStatusDescription: AccountStatus
                    }
                }
            ],
            raw:true,
    
        })
        .then(result => {
            res.json(result);
            console.log(JSON.stringify(result, null, 2));
    
        })
    }
    
}