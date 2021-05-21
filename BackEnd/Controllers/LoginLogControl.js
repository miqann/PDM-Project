const LoginLog = require('../Models/LoginModels/LoginLog');
const Account = require('../Models/AccountModels/AccountModel');
const LoginStatus = require('../Models/LoginModels/LoginStatus');
const today = new Date();
exports.insertLog = async (data,password, state) => {
    try {   
        //set decription
        let descript = state ==1? `wrong password` : `login successfully`;
        //create insert querry 
        var loginLogs = await LoginLog.create({
            LoginId: Math.floor(Math.random() * 100000000) + 100000001,
            // Times: time,
            PlaceLogin:`VungTau`,
            Descriptions: descript,
            Login: data.login,
            Password: password,
            LoginStatusId: state,
            AccountId: data.AccountId,
        })
    } catch (error) {
     console.log(error);   
    }   
};

exports.getLog = (req, res, next) => {
    let {AccountId, customerId, fullName} = req.query;
    console.log(req.query);
    if(AccountId !== '0'&& customerId !== '0'){
        LoginLog.findAll({
            attributes: ['LoginId', 'Times','PlaceLogin', 'Descriptions','Login', 'Password'], 
            include:[
                {
                    attributes: ['LoginStatusName'],
                    association:'loginStatus',
                },
                {
                    attributes: ['AccountId', 'AccountName'],
                    association:'LogAccount',
                    where: {
                        AccountId: AccountId,
                    },
                    include: [{
                        attributes: ['CustomerId', 'CustomerName'],
                        association:'customer',
                    }],
                }, 
                
            ],
            raw:true,
        })
        .then(result => {
            res.json(result);
            console.log(JSON.stringify(result, null, 2));
        });
    }
    else {
    LoginLog.findAll({
        attributes: ['LoginId', 'Times','PlaceLogin', 'Descriptions','Login', 'Password'],
        include:[
            {
            attributes: ['AccountId', 'AccountName'],
            association:'LogAccount',
            include: [{
                attributes: ['CustomerId', 'CustomerName'],
                association:'customer',
            }],
            }
        ],
        raw:true,
    })
    .then(result => {
        res.json(result);
        console.log(JSON.stringify(result, null, 2));
    });
    
    }
};