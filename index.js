const express = require('express');
const app = express();

//middelware
app.use((req, res, next) => {
    console.log('middelware');
});

app.listen(8000, () => {
    console.log(`Server listening on port: 8000`);
});