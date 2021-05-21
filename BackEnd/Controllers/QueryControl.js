const db = require('../config/database');

exports.usingQuery = (req, res, next) => {
    let {query} = req.query;
    console.log(req.query);
    console.log(query);
    if(query !== '') {

            db.query(query, {raw: true})
            .then (result => {
                console.log(result);
            })
            .catch (err => {
                console.log(err);
                console.log('this is err');
                res.status(404);
            })
        } else {
            res.status(404);
    }
};
