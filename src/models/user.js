const db = require('./../utils/db');

const createUser = (data) => {
    return new Promise((resolve, reject) => {
        try {
            db.push({
                id: db[db.length - 1].id + 1,
                name: data.name,
                username: data.username,
                email: data.email,
            })
            resolve();
        } catch (error) {
            reject(error);
        }
    });
}

const userById = (id) => {
    return new Promise((resolve, reject) => {
        try {
            const list = db.filter(user => user.id === id);
            resolve(list);
        } catch (error) {
            reject(error);
        }
    });
}

const findAll = () => {
    return new Promise((resolve, reject) => {
        try {
            resolve(db);
        } catch (error) {
            reject(error);
        }
    });
}

module.exports = {
    createUser, userById, findAll
}