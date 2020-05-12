const express = require("express")
const pool = require('../db_connection/connection.js')
const Order = require("../../data_access_objects/order.js")
const Customer = require("../../data_access_objects/customer.js")
const router = new express.Router()
const smw = require("../middleware/security")
const { sendOrderConfirmation } = require("../emails/customer_account")

const order = new Order(pool.pool)
const customer = new Customer(pool.pool)

/* Get all orders to a specific customer*/
router.get('/order', smw.authToken(customer), async (req, res) => {
    try {
        let d = await order.getAllOnCustomerDetails(req.customer.customer_id)
        if (!d[0] === undefined || !d[0].length) {
            throw new Error()
        }
        res.send(d[0])

    } catch (error) {
        res.sendStatus(404)
    }
})

/* Get all fixed orders to a specific customer either active or not active*/
router.get('/order/fixed-order/active/:id', smw.authToken(customer), async (req, res) => {
    try {
        let id = req.params.id
        if (id === undefined) {
            return res.sendStatus(400)
        } else if (id >= 1) {
            id = 1
        } else {
            id = 0
        }

        let d = await order.getAllFixedOrdersOnCustomer(req.customer.customer_id, id)
        if (d[0] === undefined || !d[0].length) {
            throw new Error()
        }
        res.send(d[0])

    } catch (error) {
        res.sendStatus(400)
    }
})

/* Get one order by id*/
router.get('/order/:id', smw.authToken(customer), async (req, res) => {
    try {
        let d = await order.getOneOnCustomerDetails(req.params.id)
        if (!d[0] === undefined || !d[0].length) {
            throw new Error()
        }
        res.send(d[0])

    } catch (error) {
        res.sendStatus(404)
    }
})

/*
 * Post new user order.
 * Set interval and day_of_week to 0 if not fixed order 
 */
router.post('/order', smw.authToken(customer), async (req, res) => {
    try {
        const fullOrder = req.body
        console.log(fullOrder)
        if (fullOrder.order_interval < 1 || fullOrder.day_of_week < 1 || fullOrder.order_interval > 4 || fullOrder.day_of_week > 5 || fullOrder.order_interval === undefined || fullOrder.day_of_week === undefined) {
            fullOrder.order_interval = 0
            fullOrder.day_of_week = 0
        }

        fullOrder.customer_id = req.customer.customer_id
        let result = await order.makeUserOrder(fullOrder)
        const last_inserted_id = result[0][0]

        if (last_inserted_id == null) {
            console.log("Something went wrong makeing a new order.")
            return res.sendStatus(500)
        }
        let order_coffee = fullOrder.list
        for (let i = 0; i < order_coffee.length; i++) {
            order_coffee[i].splice(1, 0, last_inserted_id.last_inserted)
        }

        let result2 = await order.bindUserOrder(order_coffee)

        if (result2.affectedRows !== order_coffee.length) {
            await order.rollbackOrderOnError(last_inserted_id.last_inserted)
            return res.sendStatus(500)
        }
        await sendOrderConfirmation(req.customer.email, req.customer.name, last_inserted_id.last_inserted)

        res.send("Inserted " + result2.affectedRows + " rows for order nr. " + last_inserted_id.last_inserted)

    } catch (error) {
        res.sendStatus(400)
    }
})

/* Update orders active if fixed_order */
router.put('/order', smw.authToken(customer), async (req, res) => {
    try {
        if (req.body.active === undefined) {
            return res.sendStatus(400)
        } else if (req.body.active >= 1) {
            req.body.active = 1
        } else {
            req.body.active = 0
        }

        let rs = await order.updateFixedOrder(req.body.order_id, req.body.active)
        if (rs.affectedRows === 0) {
            return res.sendStatus(500)
        }
        res.sendStatus(200)

    } catch (error) {
        res.sendStatus(404)
    }
})


module.exports = router
