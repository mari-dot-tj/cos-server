const express = require("express")
const pool = require('../db_connection/connection.js')
const Order = require("../../data_access_objects/order.js")
const Customer = require("../../data_access_objects/customer.js")
const router = new express.Router()
const smw = require("../middleware/security")
const { sendOrderConfirmation } = require("../emails/customer_account")

let order = new Order(pool.pool)
let customer = new Customer(pool.pool)

/* Get all orders to a specific customer*/
router.get('/order', smw.authToken(customer), async (req, res) => {
    try {
        let d =  await order.getAllOnCustomer(req.customer.customer_id)
        if(d[0] == null){
            throw new Error()
        }
        res.send(d)

    } catch (error) {
        res.sendStatus(404)
    }
})

/* Get one order to a specific customer*/
router.get('/order/:id', smw.authToken(customer), async (req, res) => {
    try {
        let d =  await order.getOneById(req.params.id, req.customer.customer_id)
        if(d[0] == null){
            throw new Error()
        }
        res.send(d)

    } catch (error) {
        res.sendStatus(404)
    }
})

router.post('/order', smw.authToken(customer), async (req, res) => {
    try {
        const fullOrder = req.body
        fullOrder.customer_id = req.customer.customer_id
        let result =  await order.makeUserOrder(fullOrder)
        const last_inserted_id = result[0][0]
        // const last_inserted_id = {last_inserted: 1111}

        if(last_inserted_id == null){
            console.log("Something went wrong makeing new order.")
            return res.sendStatus(500)
        }

        let order_coffee = fullOrder.list
        for (let i = 0; i < order_coffee.length; i++){
            order_coffee[i].splice(1, 0, last_inserted_id.last_inserted)
        }

        let result2 = await order.bindUserOrder(order_coffee)

        if(result2.affectedRows !== order_coffee.length){
            console.log("Should rollback last insert in Orders on id: " + last_inserted_id.last_inserted)
            return res.sendStatus(500)
        }
        await sendOrderConfirmation(req.customer.email, req.customer.name, last_inserted_id.last_inserted)

        res.send("Inserted " + result2.affectedRows + " rows for order nr. " + last_inserted_id.last_inserted)

    } catch (error) {
        res.sendStatus(400)
    }
})

router.get('/test', async (req, res) => {
    
    try {

        let d =  await order.test(1)
        console.log(d[0][0].name)
        let jsonTest = d[0][0]
        
        let c = await order.test2(1)
        let t = c[0][0]

        if(t == null){
            console.log("No such row in database. Bad request.")
            return res.sendStatus(400)
        }

        console.log(t.customer_id)
        jsonTest = {...jsonTest, customer_id: t.customer_id}
        res.send(jsonTest)

    } catch (error) {
        res.sendStatus(400)
    }

})

module.exports = router
