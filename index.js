const express = require('express');
const app = express();
const cors = require('cors')
const errorMiddelware = require('./src/middelware/errorMiddelware');
const { server } = require('./src/config/config');
const routesUser = require('./src/routes/user');
const routeNotFound = require('./src/routes/notFound');

var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }

//middelware
app.use(cors(corsOptions));
app.use(express.json());
//routes
app.use(routesUser);
app.use(routeNotFound);
//errors
app.use(errorMiddelware);

app.listen(server.port, () => {
    console.log(`Server listening on port: ${server.port}`);
});