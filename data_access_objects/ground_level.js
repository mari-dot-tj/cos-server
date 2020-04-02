const Query = require ("./query.js")

module.exports = class Ground_level extends Query{
	
	/**	Get all ground levels */
	getAll = async () => {
		return await super.query(
			"select * FROM Ground_level",
			[]
		)
    }
    

}