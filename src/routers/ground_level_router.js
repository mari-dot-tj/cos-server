const express = require("express")
const pool = require('../db_connection/connection.js')
const Ground_level = require("../../data_access_objects/ground_level.js")
const router = new express.Router()
const Customer = require("../../data_access_objects/customer.js")
const smw = require("../middleware/security")

const customer = new Customer(pool.pool)
const ground_level = new Ground_level(pool.pool)

router.get('/ground_level', smw.authToken(customer), async (req, res) => {
    try {
        let d =  await ground_level.getAll()
        if(d[0] == null){
            throw new Error()
        }
        res.send(d)

    } catch (error) {
        res.sendStatus(400)
    }
})

module.exports = router