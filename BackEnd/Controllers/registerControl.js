const accountControl = require('./AccountControl');
const customerControl = require('./CustomerControl');

exports.registerNew = (req,res,next) => {
    let {userName, password, phoneNumber, fullName,email, city} = req.body;
    console.log(city);
    let accountId = Number(`8${Math.floor(Math.random() *1000000) +1000001}`);
    let customerId= Math.floor(Math.random()*100000 +10001);
    customerControl.findCustomer(fullName, phoneNumber)
                .then(result => {
                    if(result.length == 0) {
                        customerControl.createCustomer(customerId, fullName, phoneNumber, email, city)
                                        .then (() => {
                                            accountControl.createAccount(accountId, customerId,fullName, userName, password)
                                                        .then(res.status(200).json({message: 'Create account success full', accountId:accountId}))
                                        })
                                        .catch(error => {
                                            console.log(error);
                                        })
                    }else {
                        res.status(200).json({message: 'Customer was create'});
                    }
                })
    console.log(req.body);
}