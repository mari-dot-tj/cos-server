const Query = require ("./query.js")

module.exports = class Customer extends Query{
	
	/**	Get all categories from the database */
	getAll (callback) {
		super.query(
			"select * FROM Customer",
			[],
			callback);
	}
}