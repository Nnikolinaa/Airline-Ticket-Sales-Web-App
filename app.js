const express = require('express');
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require("body-parser");


//body parser must be configured - we will use it for POST and PUT requests
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

require('dotenv/config');
//this is how you allow all http request s to your web application /web server
app.use(cors());
app.options('*', cors());
const api = process.env.API_URL;

// Declare Routes
const flightOffersRouter = require('./routers/flightoffers.controller');
const ticketReservationsRouter = require('./routers/ticketreservations.controller');
const usersProfilesRouter = require('./routers/userprofiles.controller');

//Middleware

app.use(express.json());
app.use(morgan('tiny'));

//Routes 
app.use(`${api}/`, flightOffersRouter);
app.use(`${api}/`, ticketReservationsRouter);
app.use(`${api}/`, usersProfilesRouter);


//Mongo
mongoose.connect(process.env.CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'airlineoffers-db'
}).then(()=> {
    console.log("Connection is ready");
})
.catch((err)=>{
    console.log(err);
})

app.listen(3000, () => {
    console.log(api)
    console.log('Server is running at port 3000');
});
