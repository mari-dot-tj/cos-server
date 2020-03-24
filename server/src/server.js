const express = require("express");
const mysql = require("mysql");
var cors = require('cors');
const config = require('../../config.json');

const Customer = require("../data_access_objects/customer.js");
const Coffee = require("../data_access_objects/coffee.js");

const app = express()

/** Authentication with database */
const pool = mysql.createPool({
    connectionLimit: 100,
    host: config.db.host,
    user: config.db.user,
    password: config.db.password,
    database: config.db.database,
    debug: false
});

let allowedOrigins = ['http://localhost:3000',
                      'http://localhost:8080'];
app.use(cors({
  origin: function(origin, callback){
    // allow requests with no origin 
    // (like mobile apps or curl requests)
    if(!origin) return callback(null, true);
    if(allowedOrigins.indexOf(origin) === -1){
      let msg = 'The CORS policy for this site does not ' +
                'allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  }
}));

let customer = new Customer(pool);
let coffee = new Coffee(pool);


app.get('/coffee', (req, res) => {
    // coffee.getAll((status, data)).then((coffees) =>{
    //     if(!coffees){
    //         res.status(404).send()
    //     }
    //     res.json(coffees)
    // }).catch((e) => {
    //     res.status(status).send()
    // })
    
    coffee.getAll((status, data) => {
        res.status(status);
        res.json(data);
    })
});

app.get('/coffee/:id', (req, res) => {
    coffee.getByID(req.params.id, (status, data) => {
        res.status(status);
        res.json(data);
    })
});


app.get('/customer', (req, res) => {
    customer.getAll((status, data) => {
        res.status(status);
        res.json(data);
    })
});

app.get('', (req, res) => {
    res.send("Heii hssei")
})


app.listen(3000, () => {
    console.log("Server up and running on port 3000")
})

