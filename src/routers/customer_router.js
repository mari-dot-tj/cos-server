const express = require("express")
const pool = require('../db_connection/connection.js')
const Customer = require("../../data_access_objects/customer.js")
const router = new express.Router()
const smw = require("../middleware/security")

let customer = new Customer(pool.pool)

/* Retrive all customers */
router.get('/customer', async (req, res) => {
    try {
        let result = await customer.getAll()
        res.send(result)

    } catch (error) {
        res.sendStatus(400)
    }
})

/* Get customers credentials using id */
router.get('/customer/:id', async (req, res) => {
    try {
        let result = await customer.getOneCustomer(req.params.id)
        if (result[0] == null) {
            return res.sendStatus(404)
        }
        delete result[0].active
        delete result[0].password
        res.send(result[0])

    } catch (error) {
        res.sendStatus(400)
    }
})

/* Create new customer */ 
router.post('/customer', async (req, res) => {
    try {
        const rs = await customer.checkEmailExists(req.body.email)
        const count = rs[0]
        if(count.res > 0){
            console.log("I have to handle this later with email stuff when email already exists")
            return res.status(200).send({ msg: "An email has been sent for verification"})
        }
        //Add handling for checking that params are correct
        req.body.password = "TempPass" //TODO: Fix password gen and send to email
        let responsFromDB = await customer.createNewCustomer(req.body)
        const id = responsFromDB.insertID
        if (responsFromDB.affectedRows === 0) {
            return res.sendStatus(400)
        }
        res.status(201).send({ msg: "An email has been sent for verification"})

    } catch (error) {
        res.sendStatus(400)
    }
})

/* Update customer credetials */
router.put('/customer', smw.checkCustomerPassword(customer), smw.securePassword(), async (req, res) => {
    try {
        const id = req.body.customer_id
        delete req.body.customer_id
        const rs = await customer.updateCustomer(req.body, id)
        if (rs.affectedRows === 0) {
            return res.sendStatus(400)
        }
        res.sendStatus(200)

    } catch (error) {
        res.sendStatus(400)
    }
})

/* Endpoint for logging in with customer */
router.post('/customer/login', async (req, res) => {
    try {
        const { email, password } = req.body
        const rs = await customer.getOneCustomerByEmail(email)
        const customerData = rs[0]
        if (customerData == null) {
            return res.status(401).send("Unable to login")
        }
        const auth = await smw.authorize(password, customerData.password)
        if(!auth) return res.status(401).send("Unable to login")
        res.sendStatus(200)
    } catch (error) {
        res.status(401).send(error)
    }

})

router.put('/testp', smw.checkCustomerPassword(customer), smw.securePassword(), async (req, res) => {
    try {
        if (req.body.password == null) console.log("japp")
        console.log(res.locals.shouldSkipPassHash)
        console.log(req.body.password)
        console.log(req.body)
        delete req.body.customer_id
        console.log(req.body)
        res.send(req.body)

    } catch (error) {
        res.sendStatus(400)
    }
})

/* Try/catch handler */
function tryCatchHandler(func) {
    return async (rec, res, next) => {
        try {
            await func(rec, res, next)
        } catch (err) {
            res.status(500).send(err)
        }
    }
}

module.exports = router