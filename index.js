const express = require('express');
const app = express();
const { server } = require('./src/config/config');
const routesUser = require('./src/routes/user');
const routeNotFound = require('./src/routes/notFound');

//middelware
app.use(express.json());
//routes
app.use(routesUser);
app.use(routeNotFound);

app.listen(server.port, () => {
    console.log(`Server listening on port: ${server.port}`);
});