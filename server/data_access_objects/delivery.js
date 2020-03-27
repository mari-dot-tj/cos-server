const Query = require ("./query.js")

module.exports = class Delivery extends Query{
    
    /**	Get all delivery options */
	getAll = async () => {
		return await super.query(
			"select * FROM Delivery",
			[]
		)
    }
    
}