const db = require('../config/database');

exports.usingQuery = (req, res, next) => {
    let {query} = req.query;
    console.log(req.query);
    console.log(query);
    if(query !== '') {
            db.query(query, {raw: true})
            .then (result => {
                console.log('result: ');
                res.json(result[0]);

                // res.json(result);
            })
            .catch (err => {
                console.log(err);
                console.log('this is err');
                res.status(200);
            })
        } else {
            res.status(200);
    }
};
