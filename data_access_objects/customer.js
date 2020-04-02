const Query = require ("./query.js")

module.exports = class Customer extends Query{
	
	/**	Get all customers from the database */
	getAll = async () => {
		return await super.query(
			"select * FROM Customer",
			[]
		)
	}
}