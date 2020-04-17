const express = require("express")
const pool = require('../db_connection/connection.js')
const Bag = require("../../data_access_objects/bag.js")
const router = new express.Router()
const smw = require("../middleware/security")
const Customer = require("../../data_access_objects/customer.js")

const bag = new Bag(pool.pool)
const customer = new Customer(pool.pool)

/* Get all bags – authenticated only by admin */
router.get('/bag', async (req, res) => {
    try {
        let d =  await bag.getAll()
        res.send(d)

    } catch (error) {
        res.sendStatus(400)
    }
})

/* Get bags for specific customer */
router.get('/bag/me', smw.authToken(customer), async (req, res) => {
    try {
        let d =  await bag.getDistinct(req.customer.customer_id)
        res.send(d)

    } catch (error) {
        res.sendStatus(400)
    }

})

module.exports = router