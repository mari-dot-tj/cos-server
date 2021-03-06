const Query = require("./query.js")

module.exports = class Coffee extends Query {

	/**	Get all coffee from the database */
	getAll = async () => {
		return await super.query(
			"select * FROM Coffee",
			[]
		)
	}

	/**	Get one coffee with id from the database */
	getByID = async (id) => {
		return await super.query(
			"select * FROM Coffee WHERE coffee_id = ?",
			[id]
		)
	}

	/**	Get coffee within one category */
	getSameCatagory = async (id) => {
		return await super.query(
			"select * FROM Coffee WHERE category_id = ?",
			[id]
		)
	}

	/**	Get coffee for spesific customer */
	getDistinct = async (id) => {
		return await super.query(
			"select distinct Coffee.coffee_id, Coffee.name, Coffee.description from Coffee inner join Customer_coffee on Customer_coffee.coffee_id = Coffee.coffee_id where Customer_coffee.customer_id = ?",
			[id]
		)
	}

}