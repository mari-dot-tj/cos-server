const express = require("express")
const mysql = require("mysql")
const cors = require('cors')
const config = require('../../config.json')

const Customer = require("../data_access_objects/customer.js")
const Coffee = require("../data_access_objects/coffee.js")
const Ground_level = require("../data_access_objects/ground_level.js")
const Bag = require("../data_access_objects/bag.js")
const Order = require("../data_access_objects/order.js")

const app = express()

/** Authentication with database */
const pool = mysql.createPool({
    connectionLimit: 100,
    host: config.db.host,
    user: config.db.user,
    password: config.db.password,
    database: config.db.database,
    debug: false
})

let allowedOrigins = ['http://localhost:3000',
                      'http://localhost:8080']
app.use(cors({
  origin: function(origin, callback){
    // allow requests with no origin 
    // (like mobile apps or curl requests)
    if(!origin) return callback(null, true)
    if(allowedOrigins.indexOf(origin) === -1){
      let msg = 'The CORS policy for this site does not ' +
                'allow access from the specified Origin.'
      return callback(new Error(msg), false)
    }
    return callback(null, true)
  },
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS", "CALL"]
}))

let customer = new Customer(pool)
let coffee = new Coffee(pool)
let ground_level = new Ground_level(pool)
let bag = new Bag(pool)
let order = new Order(pool)

/* Coffee endpoint */

app.get('/coffee', async (req, res) => {
    try {
        let d =  await coffee.getAll()
        res.send(d)

    } catch (error) {
        res.sendStatus(400)
    }
})

app.get('/coffee/:id', async (req, res) => {
    try {
        let d =  await coffee.getByID(req.params.id)
        res.send(d)

    } catch (error) {
        res.sendStatus(400)
    }
})

/* Customer endpoint */

app.get('/customer', async (req, res) => {
    try {
        let d =  await customer.getAll()
        res.send(d)

    } catch (error) {
        res.sendStatus(400)
    }
});

/* Grind level endpoint */

app.get('/ground_level', async (req, res) => {
    try {
        let d =  await ground_level.getAll()
        res.send(d)

    } catch (error) {
        res.sendStatus(400)
    }
})

/* Bag and bag_customer endpoints */

app.get('/bag', async (req, res) => {
    try {
        let d =  await bag.getAll()
        res.send(d)

    } catch (error) {
        res.sendStatus(400)
    }
})

app.get('/bag_customer/:id', async (req, res) => {
    try {
        let d =  await bag.getDistinct(req.params.id)
        res.send(d)

    } catch (error) {
        res.sendStatus(400)
    }

})

/* Order endpoints */

app.get('/order', async (req, res) => {
    try {
        let d =  await order.getAll()
        res.send(d)

    } catch (error) {
        res.sendStatus(400)
    }
})

// const tryCatchHandler = ()
app.get('/test', async (req, res) => {
    
    try {

        let d =  await order.test(1)
        console.log(d[0][0].name)
        let jsonTest = d[0][0]
        
        let c = await order.test2(111)
        let t = c[0][0]

        if(t == null){
            console.log("No such row in database. Bad request.")
            return res.sendStatus(400)
        }

        console.log(t.customer_id)
        jsonTest = {...jsonTest, customer_id: t.customer_id}
        res.send(jsonTest)

    } catch (error) {
        res.sendStatus(400)
    }

})

app.listen(3000, () => {
    console.log("Server up and running on port 3000")
})

