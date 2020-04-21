const Query = require("./query.js")

module.exports = class Order extends Query {

    /**	Get all orders for customer*/
    getAllOnCustomer = async (id) => {
        return await super.query(
            "select * FROM Orders where customer_id = ?",
            [id]
        )
    }
    /**	Get one order for customer by order id*/
    getOneById = async (orderId, customerId) => {
        return await super.query(
            "select * FROM Orders where order_id = ? and customer_id = ?",
            [orderId, customerId]
        )
    }

    /**	POST new order from customer */
    makeUserOrder = async (order) => {
        const parameters = [order.info, order.delivery_date, order.production_date, order.customer_id, order.status_id, order.delivery_id, order.ref_id]
        return await super.query(
            "call proc_new_user_order(?, ?, ?, ?, ?, ?, ?)",
            parameters
        )
    }

    bindUserOrder = async (order) => {
        const parameters = order
        return await super.query(
            "insert into Order_coffee (coffee_id, order_id, bag_id, ground_level_id, quantity) values ?",
            [parameters]
        )
    }

    /**	GET all orders with details from db */
    getAllOnCustomerDetails = async (id) => {
        return await super.query(
            "call proc_get_customer_orders(?)",
            id
        )
    }

    /**	GET all orders with details from db */
    getOneOnCustomerDetails = async (id) => {
        return await super.query(
            "call proc_get_specific_customer_order(?)",
            id
        )
    }

    test = async (id) => {
        const parameters = id
        return await super.query(
            "call test_proc(?)",
            parameters
        )
    }

}
