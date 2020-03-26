const Query = require ("./query.js")

module.exports = class Order extends Query{
    
    	/**	Get all orders */
	getAll = async () => {
		return await super.query(
			"select * FROM Orders",
			[]
		)
    }

    test = async (id) => {
        const parameters = id
        return await super.query(
            "call test_proc(?)",
            parameters
        )
    }

    test2 = async (id) => {
        const parameters = id
        return await super.query(
            "call proc_make_user_order(?)",
            parameters
        )
    }
    
}

/* 
    createUserCase(data:data, callback){
        console.log('::::::::::: desc: ' + data.description + ' user_id: ' + data.user_id);
        let status_id = "1";
        let val = [data.description, data.longitude, data.latitude, status_id, data.user_id, data.category_id, data.zipcode, data.headline, data.picture];
        console.log("VALVALVALVALVALVLA: ", val)
        super.query(
            "INSERT INTO Cases  ( description, longitude, latitude, status_id, user_id, category_id, zipcode, headline, picture ) VALUES ( ?, ? ,?, ?, ?, ?, ?, ?, ? )",
            val,
            callback
        );
    }
*/
