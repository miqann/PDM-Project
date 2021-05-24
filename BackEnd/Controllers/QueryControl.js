const db = require('../config/database');
const {QueryTypes} = require('sequelize');

exports.usingQuery = (req, res, next) => {
    let {query} = req.query;
    console.log(req.query);
    queryTypes = query.split(' ');
    console.log(query);

    if(query !== '') {
            db.query(query, {raw: true})
            .then (result => {
                console.log('result: ');
                console.log(result);
                queryTypes[0] === 'SELECT'? res.json(result[0]) : res.json('');
                res.status(200).json('Get data successfully!');
                // res.json(result);
            })
            .catch (err => {
                console.log(err);
                console.log('this is err');
                res.status(200).json('wrong query!');
            })
        } else {
            res.status(404);
    }
};
