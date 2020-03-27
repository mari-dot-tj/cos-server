const express = require("express")
const pool = require('../db_connection/connection.js')
const Order = require("../../data_access_objects/order.js")
const router = new express.Router()

let order = new Order(pool.pool)

/* Order endpoints */

router.get('/order', async (req, res) => {
    try {
        let d =  await order.getAll()
        res.send(d)

    } catch (error) {
        res.sendStatus(400)
    }
})

// const tryCatchHandler = ()
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
