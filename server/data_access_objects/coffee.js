const Query = require ("./query.js")

module.exports = class Coffee extends Query{
	
	/**	Get all coffee from the database */
	getAll (callback) {
		super.query(
			"select * FROM Coffee",
			[],
			callback);
    }
    
    	/**	Get one coffee with id from the database */
	getByID (id, callback) {
		super.query(
			"select * FROM Coffee WHERE coffee_id = ?",
			[id],
			callback);
    }
    
	/**	Get coffee within one category */
	getSameCatagory (id, callback) {
		super.query(
			"select * FROM Coffee WHERE category_id = ?",
			[id],
			callback);
	}

}