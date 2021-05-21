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
        let {customerId, fullName, phoneNumber, email, city} = req.query;// parameter from get in query
        console.log(email);
        console.log(req.query);
        console.log(req.url);

        if(customerId !== '') {
            customerModel.findAll({
                where: {
                    CustomerId:customerId,
                    },
                    include:[
                        {
                        attributes: ['CustomerTypesDescription'],
                        association:'customerType'
                        }],
                    raw:true,
                })
                .then(result => {
                    res.json(result)
                })
        }

        if(fullName == '' && phoneNumber == '' && customerId == '') {
            customerModel.findAll({
                include:[
                    {
                    attributes: ['CustomerTypesDescription'],
                    association:'customerType'
                }],
                raw:true,
            })
                .then(result => {
                    res.json(result)
                })
        }
        if(phoneNumber == '' && fullName !== '') {
            customerModel.findAll({
                where: {
                    CustomerName: fullName,
                    },
                    include:[
                        {
                        attributes: ['CustomerTypesDescription'],
                        association:'customerType'
                        }],
                    raw:true,
                })
                .then(result => {
                    res.json(result)
                })
        }
        if(phoneNumber !== '' && fullName !== '') {
                customerModel.findAll({
                    where: {
                        CustomerName: fullName,
                        CustomerPhone: phoneNumber,
                    },
                    include:[
                        {
                        attributes: ['CustomerTypesDescription'],
                        association:'customerType'
                    }],
                    raw:true,

                })
                .then(result => {
                    res.json(result)
                })
            }
        };