const express = require("express")
const pool = require('../db_connection/connection.js')
const Delivery = require("../../data_access_objects/delivery.js")
const router = new express.Router()

let delivery = new Delivery(pool.pool)

/* Delivery endpoints */

router.get('/delivery', async (req, res) => {
    try {
        let d =  await delivery.getAll()
        res.send(d)

    } catch (error) {
        res.sendStatus(400)
    }
})

module.exports = router