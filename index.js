const express = require('express')
const cors = require('cors');
const { connectio } = require('./db');
const mainRoutes = require('./Routes/mainRoutes');
const app = express();
require('dotenv').config()
app.use(express.json());

app.use(cors());

app.use(mainRoutes);


app.listen(process.env.port, async () => {
    try {
        await connectio;
        console.log('connected to db');
        console.log(`running at ${process.env.port}`);
    } catch (error) {

    }
})