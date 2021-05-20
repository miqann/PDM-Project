const {Op} = require('sequelize');
const customerModel = require('../Models/CustomerModels/CustomerModel');
//select author from database
exports.getCustomer = async (req, res, next) => {
        await customerModel.findAll()
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
};

exports.searchCustomer = (req, res,next) => {
        let {fullName, phoneNumber, email, city} = req.query;// parameter from get in query
        console.log(email);
        console.log(req.query);
        console.log(req.url);
        if(fullName == '' && phoneNumber == '') {
            customerModel.findAll()
                .then(result => {
                    res.json(result)
                })
        }else {

            if(phoneNumber == '') {
                customerModel.findAll({
                    where: {
                        CustomerName: fullName,
                    }
                })
                .then(result => {
                    res.json(result)
                })
            } else {
                customerModel.findAll({
                    where: {
                        CustomerName: fullName,
                        CustomerPhone: phoneNumber,
                    }
                })
                .then(result => {
                    res.json(result)
                })
            }
        }
};