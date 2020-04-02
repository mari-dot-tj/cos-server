const Query = require ("./query.js")

module.exports = class Bag extends Query{
    
    	/**	Get all bag sizes */
	getAll = async () => {
		return await super.query(
			"select * FROM Bag",
			[]
		)
    }

	/**	Get bag sizes for spesific customer */
	getDistinct = async (id) => {
		return await super.query(
			"select distinct Bag.bag_id, Bag.size, Bag.grams from Bag inner join Bag_customer on Bag_customer.bag_id = Bag.bag_id where Bag_customer.customer_id = ?",
			[id]
		)
    }
    
}
