
const authorModel = require('../Models/author');
//select author from database
exports.getAuthor = (req, res, next) => {
        authorModel.findAll()
            .then(result => {
                res.send(JSON.stringify(result))
            })
}