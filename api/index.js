const express = require('express');
const { connectMongo } = require('./db');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = 4001;

connectMongo(process.env.URL).then(()=>console.log("MongoDB connected!")).catch((err)=> console.log(err));

app.get('/test', (req, res) => {
    res.json({
        msg: 'This is testing!',
    })
})

app.post('/register', (req, res) => {
    const {username, password} = req.body;

})

app.listen(PORT, () => console.log(`Listening on port ${PORT}!`))