const express = require("express")
const pool = require('../db_connection/connection.js')
const Place = require("../../data_access_objects/place")
const router = new express.Router()

let place = new Place(pool.pool)

/* Get all zip_codes and places */
router.get('/place', async (req, res) => {
    try {
        let d =  await place.getAll()
        res.send(d)

    } catch (error) {
        res.sendStatus(400)
    }
})

/* Get one palce by zip_code */
router.get('/place/:id', async (req, res) => {
    try {
        let d =  await place.getOneByZip(req.params.id)
        res.send(d)

    } catch (error) {
        res.sendStatus(400)
    }
})

module.exports = router