const User = require('./../models/user');

const getUser = (req, res, next) => {
    res.status(200).json({ message: ' GET USER' });
}
const getByID = (req, res, next) => {
    res.status(200).json({ message: ' GET USER BY ID' });
}
const postUser = (req, res, next) => {
    console.log(req.body);
    if (!req.body.name || !req.body.username || !req.body.email) {
        return res.status(404).json({ message: 'faltan datos' });
    }
    res.status(200).json({ message: ' POST USER' });
}

module.exports = {
    getUser, getByID, postUser
}