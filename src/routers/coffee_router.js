const express = require("express")
const pool = require('../db_connection/connection.js')
const Coffee = require("../../data_access_objects/coffee.js")
const router = new express.Router()
const smw = require("../middleware/security")
const Customer = require("../../data_access_objects/customer.js")

const coffee = new Coffee(pool.pool)
const customer = new Customer(pool.pool)

/* Get all types of coffee – only authenticated by admin */
/* router.get('/coffee', smw.authToken(customer), async (req, res) => {
    try {
        let d =  await coffee.getAll()
        res.send(d)

    } catch (error) {
        res.sendStatus(400)
    }
}) */

/* Get coffee for specific customer */
router.get('/coffee/me', smw.authToken(customer), async (req, res) => {
    try {
        let d =  await coffee.getDistinct(req.customer.customer_id)
        if(d[0] == null){
            throw new Error()
        }
        res.send(d)

    } catch (error) {
        res.sendStatus(400)
    }

})

/* Get one coffe by its id */
router.get('/coffee/:id', smw.authToken(customer) ,async (req, res) => {
    try {
        let d =  await coffee.getByID(req.params.id)
        if(d[0] == null){
            throw new Error()
        }
        res.send(d)

    } catch (error) {
        res.sendStatus(400)
    }
})



module.exports = router