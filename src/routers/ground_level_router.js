const express = require("express")
const pool = require('../db_connection/connection.js')
const Ground_level = require("../../data_access_objects/ground_level.js")
const router = new express.Router()

let ground_level = new Ground_level(pool.pool)

/* Bag and bag_customer endpoints */

/* Ground level endpoint */

router.get('/ground_level', async (req, res) => {
    try {
        let d =  await ground_level.getAll()
        res.send(d)

    } catch (error) {
        res.sendStatus(400)
    }
})

module.exports = router