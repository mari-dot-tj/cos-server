const Query = require ("./query.js")

module.exports = class Ground_level extends Query{
	
	/**	Get all ground levels */
	getAll (callback) {
		super.query(
			"select * FROM Ground_level",
			[],
			callback);
    }
    

}