const express = require("express");
const mysql = require("mysql");
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

let customer = new Customer(pool);
let coffee = new Coffee(pool);


app.get('/coffee', (req, res) => {
    coffee.getAll((status, data) => {
        res.status(status);
        res.json(data);
        console.log(data)
    })
});

app.get('/coffee/:id', (req, res) => {
    coffee.getByID(req.params.id, (status, data) => {
        res.status(status);
        res.json(data);
    })
});


// app.get('/customer', (req, res) => {
//     customer.getAll((status, data) => {
//         res.status(status);
//         res.json(data);
//         console.log(data)
//     })
// });

app.get('', (req, res) => {
    res.send("Heii hssei")
})


app.listen(3000, () => {
    console.log("Server up and running on port 3000")
})

