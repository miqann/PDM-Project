
const authorModel = require('../Models/author');

exports.getAuthor = (req, res, next) => {
        authorModel.findAll()
            .then(result => {
                res.send(JSON.stringify(result))
            })
}