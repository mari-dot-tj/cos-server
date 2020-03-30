const Query = require("./query.js")

module.exports = class Delivery extends Query {

	/**	Get all delivery options */
	getAll = async () => {
		return await super.query(
			"select * FROM Delivery",
			[]
		)
	}

	/**	Get all mail delivery prices */
	getAllWithPrice = async () => {
		return await super.query(
			"select * FROM Mail_price",
			[]
		)
	}

}