const express = require("express");
const mysql = require("mysql");
const config = require('../../config.json');

const Customer = require("../data_access_objects/customer.js");

const app = express()

/** Authentication with database */
//const db = JSON.parse(config)
const pool = mysql.createPool({
    connectionLimit: 100,
    host: config.db.host,
    port: config.db.port,
    user: config.db.user,
    password: config.db.password,
    database: config.db.database,
    debug: false
});

let customer = new Customer(pool);

app.get('/customer', (req, res) => {
    customer.getAll((status, data) => {
        res.status(status);
        //res.send(data + " neesf");
        res.json(data);
        console.log(data)
    })
});

app.get('', (req, res) => {
    res.send("Heii hssei")
})


app.listen(3000, () => {
    console.log("Server up and running on port 3000")
})


/*
var mysql = require("mysql");

var pool = mysql.createPool({
        connectionLimit : 100,
        host     : '85.10.205.173',
        port     :  3306,
        user     : '*******',
        password : '*******',
        database : '*******',
    });

exports.getConnection = function(callback) {
  pool.getConnection(function(err, conn) {
    if(err) {
      return callback(err);
    }
    callback(err, conn);
  });
};


  query(sql, params, callback) {
    this.pool.getConnection((err, connection) => {
      console.log(" connected to database");
      if (err) {
        console.log(" error connecting");
        callback(500, { error: "feil ved ved oppkobling" });
      } else {
        console.log(" running sql: " + sql);
        connection.query(sql, params, (err, rows) => {
          connection.release();
          if (err) {
            console.log(err);
            callback(500, { error: "error querying" });
          } else {
            console.log(" returning rows");
            callback(200, rows);
          }
        });
      }
    });
  }
*/