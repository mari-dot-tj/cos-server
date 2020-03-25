const Query = require ("./query.js")

module.exports = class Bag extends Query{
    
    	/**	Get all bag sizes */
	getAll (callback) {
		super.query(
			"select * FROM Bag",
			[],
			callback);
    }

	/**	Get bag sizes for spesific customer */
	getDistinct (id, callback) {
		super.query(
			"select distinct Bag.bag_id, Bag.size, Bag.grams from Bag inner join Bag_customer on Bag_customer.bag_id = Bag.bag_id where Bag_customer.customer_id = ?",
			[id],
			callback);
    }
    
}

/* 
	getCategoriesForOrganization(id: number, callback: mixed){
		super.query(
			"SELECT DISTINCT Category.category_id, Category.description FROM Category INNER JOIN Org_cat ON Org_cat.category_id = Category.category_id WHERE Org_cat.org_id = ?",
			[id],
			callback
		)
	}
*/