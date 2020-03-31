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

// router.get('/test2', (req, res) => {

//     let order123 = [[1, 2, 3, 4], [4, 4, 4, 4], [5, 5, 5, 5]]

//     for (let i = 0; i < order123.length; i++){
//         order123[i].splice(1, 0, 1)
//     }
//     console.log(order123)
//     res.send("order123.list")
// })
router.post('/order', async (req, res) => {
    try {
        const fullOrder = req.body
        let result =  await order.makeUserOrder(req.body)
        const last_inserted_id = result[0][0]
        // const last_inserted_id = {last_inserted: 1111}

        if(last_inserted_id == null){
            console.log("Something went wrong makeing new order.")
            return res.sendStatus(500)
        }
        //If JS-object is sent from client remove JSON.parse part
        // let order_coffee = JSON.parse(fullOrder.list)
        let order_coffee = fullOrder.list
        for (let i = 0; i < order_coffee.length; i++){
            order_coffee[i].splice(1, 0, last_inserted_id.last_inserted)
        }

        console.log(order_coffee)
        let result2 = await order.bindUserOrder(order_coffee)

        if(result2.affectedRows !== order_coffee.length){
            console.log("Should rollback last insert in Orders on id: " + last_inserted_id.last_inserted)
            return res.sendStatus(500)
        }

        res.send("Inserted " + result2.affectedRows + " rows for order nr. " + last_inserted_id.last_inserted)

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
