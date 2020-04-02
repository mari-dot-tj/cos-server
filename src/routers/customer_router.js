const express = require("express")
const pool = require('../db_connection/connection.js')
const Customer = require("../../data_access_objects/customer.js")
const router = new express.Router()

let customer = new Customer(pool.pool)

/* Bag and bag_customer endpoints */

/* Customer endpoint */

router.get('/customer', async (req, res) => {
    try {
        let d =  await customer.getAll()
        res.send(d)

    } catch (error) {
        res.sendStatus(400)
    }
});

module.exports = router