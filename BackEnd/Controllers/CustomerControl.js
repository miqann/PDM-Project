
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
};

exports.findCustomer = (fullName, phoneNumber) => {
    return customerModel.findAll({
        where: {
            CustomerName: fullName,
            CustomerPhone:phoneNumber,
        }
    })
};

exports.createCustomer = async (customerId, fullName, phoneNumber, email, city) => {
    try {
        var customerCreated = await customerModel.create({
            CustomerId: customerId,
            CustomerName: fullName,
            CustomerPhone : phoneNumber,
            CustomerEmail: email,
            city: city,
            CustomerTypesCode: 3043,
        })
    } catch (error) {
        console.log(error);
    }
}