const express = require('express');


const app = express();
const port = process.env.PORT | 4000;


app.get('/', (req, res) => {
    res.send('Sample API Test');
});


app.listen(port, () => {
    console.log(`Server Running Port is ${port}`);
});