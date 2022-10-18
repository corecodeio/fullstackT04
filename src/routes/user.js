const express = require('express');
const route = express.Router();
const { getUser, getByID, postUser, patchUser } = require('./../controllers/user');

route.get('/user', getUser);
route.get('/user/:id', getByID);
route.post('/user', postUser);
route.patch('/user', patchUser);

module.exports = route;