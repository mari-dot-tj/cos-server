const express = require("express")
const pool = require('../db_connection/connection.js')
const Bag = require("../../data_access_objects/bag.js")
const router = new express.Router()

let bag = new Bag(pool.pool)

/* Bag and bag_customer endpoints */

router.get('/bag', async (req, res) => {
    try {
        let d =  await bag.getAll()
        res.send(d)

    } catch (error) {
        res.sendStatus(400)
    }
})

router.get('/bag_customer/:id', async (req, res) => {
    try {
        let d =  await bag.getDistinct(req.params.id)
        res.send(d)

    } catch (error) {
        res.sendStatus(400)
    }

})

module.exports = router