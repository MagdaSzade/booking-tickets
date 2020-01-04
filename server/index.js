import {seans} from "../client/src/__test__/bookingTicketTest";

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const db = require('./db');
const movieRouter = require('./routes/movie-router');
const userRouter = require('./routes/user-router');
const seanseRouter = require('./routes/seanse-router');


const app = express();
const apiPort = process.env.PORT || 9090;

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cors());
app.use(bodyParser.json());
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.get('/', (req, res) => {
    res.send('Hello World from backend !')
});

app.use('/api', movieRouter);
app.use('/api', userRouter);
app.use('/api', seanseRouter);
app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`));
