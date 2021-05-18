const gotAccount = require('./AccountControl');
const loginLog = require('./LoginLogControl')

exports.getLogin= (req,res,next) => {
    let {userName, password} = req.body;
    let state =0;
    gotAccount.getAccount(userName)
            // after find account
            .then(result =>  {
                // console.log(result);
                if(result.length != 0){// if have result
                    //set statusId below state
                   password == result[0].password ? state = 5 : state = 1;
                    loginLog.insertLog(result[0], password, state)
                            .then(state == 5 ? res.status(200).json({message: 'true', accountId: result[0].AccountId}):res.status(200).json({message: 'Invalid credentials'}));
                }
                else {
                    res.status(200).json({message: 'Incorrect username'});
                }
            })
};