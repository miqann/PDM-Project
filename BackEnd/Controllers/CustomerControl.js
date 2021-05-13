
const customerModel = require('../Models/CustomerModels/CustomerModel');
//select author from database
exports.getCustomer = (req, res, next) => {
        customerModel.findAll()
            .then(result => {
                res.json(result);
            })
            .catch(err => {
                console.log(err);
            })
}