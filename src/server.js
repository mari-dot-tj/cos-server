const express = require("express")
const cors = require('cors')
const path = require('path')

const bagRouter = require("./routers/bag_router.js")
const orderRouter = require("./routers/order_router.js")
const coffeeRouter = require("./routers/coffee_router.js")
const customerRouter = require("./routers/customer_router.js")
const groundLevelRouter = require("./routers/ground_level_router")
const deliveryRouter = require("./routers/delivery_router")
const placeRouter = require("./routers/place_router")
const app = express()
const port = process.env.PORT

const allowedOrigins = ['http://localhost:3000',
                      'http://localhost:8080']
app.use(cors({
  origin: function(origin, callback){
    // allow requests with no origin 
    // (like mobile apps or curl requests)
    if(!origin) return callback(null, true)
    if(allowedOrigins.indexOf(origin) === -1){
      let msg = 'The CORS policy for this site does not ' +
                'allow access from the specified Origin.'
      return callback(new Error(msg), false)
    }
    return callback(null, true)
  },
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"]
}))

app.use(express.json())

app.use(bagRouter)
app.use(orderRouter)
app.use(coffeeRouter)
app.use(customerRouter)
app.use(groundLevelRouter)
app.use(deliveryRouter)
app.use(placeRouter)


app.listen(port, () => {
    console.log("Server up and running on port " + port)
})

