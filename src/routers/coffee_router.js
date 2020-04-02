const express = require("express")
const pool = require('../db_connection/connection.js')
const Coffee = require("../../data_access_objects/coffee.js")
const router = new express.Router()

let coffee = new Coffee(pool.pool)

/* Coffee endpoint */

router.get('/coffee', async (req, res) => {
    try {
        let d =  await coffee.getAll()
        res.send(d)

    } catch (error) {
        res.sendStatus(400)
    }
})

router.get('/coffee/:id', async (req, res) => {
    try {
        let d =  await coffee.getByID(req.params.id)
        res.send(d)

    } catch (error) {
        res.sendStatus(400)
    }
})

module.exports = router