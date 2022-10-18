const User = require('./../models/user');

const getUser = async (req, res, next) => {
    try {
        const list = await User.findAll();
        //console.log(response);
        if (list)
            return res.status(200).json({ list: list });
    } catch (error) {
        return res.status(400).json({ error: error });
    }
    //res.status(200).json({ message: ' GET USER' });
}

const getByID = async (req, res, next) => {
    const { id } = req.params;
    try {
        const response = await User.userById(Number(id));
        if (response)
            return res.status(200).json({ list: response });
    } catch (error) {
        return res.status(400).json({ error: error });
    }
}

const postUser = async (req, res, next) => {
    //console.log(req.body);
    if (!req.body.name || !req.body.username || !req.body.email) {
        return res.status(400).json({ message: 'faltan datos' });
    }
    try {
        const data = {
            name: req.body.name,
            username: req.body.username,
            email: req.body.email
        }
        const response = await User.createUser(data);
        //console.log(response);
        if (response)
            return res.status(200).json({ message: 'created user' });

    } catch (error) {
        return res.status(400).json({ error: error });
    }
}
const patchUser = async (req, res, next) => {
    //console.log(req.body);
    if (!req.body.id)
        return res.status(400).json({ message: 'ID no existe' });
    try {
        const response = await User.update(req.body);
        if (response)
            return res.status(200).json({ list: response });
    } catch (error) {
        return res.status(400).json({ error: error });
    }
    // return res.status(200).json({ message: 'patch' });
}
module.exports = {
    getUser, getByID, postUser, patchUser
}