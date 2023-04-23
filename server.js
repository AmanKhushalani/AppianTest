require('dotenv').config();
const express = require('express');

const app = express();

const PORT = process.env.PORT

app.use(express.urlencoded({extended: false}));

app.all('/', (req, res)=>{res.status(200).json({"Message":"Hemlo ! from Appian Test."})});

// Listening for requests //
app.listen(PORT, ()=>{
    console.log(`Server is listening @ http://localhost:${PORT}`);
});