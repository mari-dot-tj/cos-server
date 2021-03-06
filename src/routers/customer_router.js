const express = require("express")
const pool = require('../db_connection/connection.js')
const Customer = require("../../data_access_objects/customer.js")
const router = new express.Router()
const smw = require("../middleware/security")
const { sendWelcomeEmail } = require("../emails/customer_account")

let customer = new Customer(pool.pool)

/* Retrive all customers – will be authenticated only by administrator
router.get('/customer', async (req, res) => {
    try {
        let result = await customer.getAll()
        res.send(result)

    } catch (error) {
        res.sendStatus(400)
    }
})
*/

/* Get customer profile based off of token */
router.get('/customer/me', smw.authToken(customer), async (req, res) => {
    try {
        delete req.customer.password
        res.send(req.customer)
    } catch (error) {
        res.sendStatus(400)
    }
})

/* Get customers credentials using id – will be authenticated only by administrator
router.get('/customer/:id', smw.authToken(customer) ,async (req, res) => {
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
*/

/* Create new customer */
router.post('/customer', smw.generateRandomString(), smw.securePassword(), async (req, res) => {
    try {
        const rs = await customer.checkEmailExists(req.body.email)
        const count = rs[0]
        if (count.res > 0) {
            return res.status(200).send({ msg: "An email has been sent for verification" })
        }
        //TODO: Fix password gen and send to email
        let responsFromDB = await customer.createNewCustomer(req.body)
        const id = responsFromDB.insertId

        if (responsFromDB.affectedRows === 0) {
            return res.sendStatus(400)
        }

        await sendWelcomeEmail(req.body.email, req.body.name, res.locals.tempPwd)
        res.status(201).send({ msg: "An email has been sent for verification" })

    } catch (error) {
        res.sendStatus(400)
    }
})

/* Update customer credetials without password*/
router.put('/customer', smw.authToken(customer), async (req, res) => {
    try {
        const id = req.customer.customer_id
        delete req.body.customer_id
        delete req.body.password
        const rs = await customer.updateCustomer(req.body, id)
        if (rs.affectedRows === 0) {
            return res.sendStatus(500)
        }
        res.sendStatus(200)

    } catch (error) {
        res.sendStatus(500)
    }
})

/* Update customer password
*  oldPassword, newPassword in req.body
*  Sends 401 (Unauthorized) for wrong oldPassword.
*  Sends 406 (Not acceptable) for newPassword === oldPassword
*/
router.put('/customer/sensitive', smw.authToken(customer), smw.checkCustomerPassword(), smw.securePassword(), async (req, res) => {
    try {
        const rs = await customer.updateCustomerPassword(req.body.password, req.customer.customer_id)
        if (rs.affectedRows === 0) {
            return res.sendStatus(500)
        }
        res.status(200).send({msg: "Password reset"})

    } catch (error) {
        res.sendStatus(500)
    }
})

/* Endpoint for logging in with customer */
router.post('/customer/login', async (req, res) => {
    try {
        const { email, password } = req.body
        const rs = await customer.getOneCustomerByEmail(email)
        const customerData = rs[0]
        if (customerData == null) {
            return res.status(401).send({ msg: "Unable to login" })
        }

        const auth = await smw.authorizePass(password, customerData.password)

        if (!auth) return res.status(401).send({ msg: "Unable to login" })

        delete customerData.password
        const token = await smw.generateAuthToken(customer, customerData.customer_id)
        res.status(200).send({ customer: customerData, token: token })

    } catch (error) {
        res.status(401).send(error)
    }

})

/* Logging out customer */
router.post('/customer/logout', smw.authToken(customer), async (req, res) => {
    try {
        const rs = await customer.deleteTokenAtLogout(req.token, req.customer.customer_id)
        if (rs.affectedRows === 0) {
            throw new Error()
        }

        res.status(200).send({ msg: "Logged out" })

    } catch (error) {
        res.status(500).send(error)
    }

})

/* Logging out customers all devices */
router.post('/customer/logout-all', smw.authToken(customer), async (req, res) => {
    try {
        const rs = await customer.deleteAllTokensOnCustomer(req.customer.customer_id)
        if (rs.affectedRows === 0) {
            throw new Error()
        }

        res.status(200).send({ msg: "Logged out of all devices" })

    } catch (error) {
        res.status(500).send(error)
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