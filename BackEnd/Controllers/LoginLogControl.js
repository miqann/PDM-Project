const LoginLog = require('../Models/LoginModels/LoginLog');
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