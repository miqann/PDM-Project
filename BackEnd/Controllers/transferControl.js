const AccountControll = require('./AccountControl');
const db = require('../config/database');
const Transaction = require('../Models/TransactionModels/TransactionModels');

exports.transferNew = (req,res,next) => {
    console.log(req.body);
    let {AccountId , BeneAccount, Amount, Bank, currentBalance} = req.body;
    if (Bank === 'MDQT Bank') {
        AccountControll.findAccount(BeneAccount)
            .then(result => {
                if (result === 0) {
                    res.status(200).json({message: 'not found'});
                } else {
                    console.log(result);
                    Transaction.create({
                        TransactionId: Math.floor(Math.random() *10000000+1),
                        TransactionTypesId: 49289,
                        AccountId: AccountId,
                        TransactionAmount: Amount,
                        TransactionStatusId: 39284,
                        TransactionPlace: "Vung Tau",
                    });
                    Transaction.create({
                        TransactionId: Math.floor(Math.random() *10000000+1),
                        TransactionTypesId: 49289,
                        AccountId: BeneAccount,
                        TransactionAmount: Amount,
                        TransactionStatusId: 39285,
                        TransactionPlace: "Ho Chi Minh",
                    });
                    db.query(`UPDATE Accounts SET CurrentBalance = ${currentBalance-2200-Amount} WHERE AccountId = ${AccountId}`);
                    db.query(`UPDATE Accounts SET CurrentBalance = ${result[0].CurrentBalance + Number(Amount)} WHERE AccountId = ${BeneAccount}`);
                    res.status(200).json({message:"transfer successfully!"});
                }
            })
            
    } else {
        Transaction.create({
            TransactionId: Math.floor(Math.random() *10000000+1),
            TransactionTypesId: 49288,
            AccountId: AccountId,
            TransactionAmount: Amount,
            TransactionStatusId: 39284,
            TransactionPlace: "Vung Tau",
        });
        db.query(`UPDATE Accounts SET CurrentBalance = ${currentBalance-6600-Amount} WHERE AccountId = ${AccountId}`);
        res.status(200).json({message:"transfer successfully!"});
    }
}