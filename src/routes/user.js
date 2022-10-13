const express = require('express');
const route = express.Router();
const { getUser, getByID, postUser } = require('./../controllers/user');
//GET USERS ---> list users
route.get('/user', getUser);
//GET BY ID ---> User by id
route.get('/user/:id', getByID);
//POST ----> create user
route.post('/user', postUser);

module.exports = route;