const express = require("express")
const pool = require('../db_connection/connection.js')
const Delivery = require("../../data_access_objects/delivery.js")
const router = new express.Router()
const Customer = require("../../data_access_objects/customer.js")
const smw = require("../middleware/security")

const customer = new Customer(pool.pool)
const delivery = new Delivery(pool.pool)

/* Delivery endpoints */

router.get('/delivery', smw.authToken(customer), async (req, res) => {
    try {
        let d =  await delivery.getAll()
        res.send(d)

    } catch (error) {
        res.sendStatus(400)
    }
})

router.get('/mail_price', smw.authToken(customer), async (req, res) => {
    try {
        let d =  await delivery.getAllWithPrice()
        res.send(d)

    } catch (error) {
        res.sendStatus(400)
    }
})

module.exports = router