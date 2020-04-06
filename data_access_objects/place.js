const Query = require("./query.js")

module.exports = class Place extends Query {

    /**	Get all zip_codes and places */
    getAll = async () => {
        return await super.query(
            "select * FROM Place",
            []
        )
    }

    /**	Get place by zip_code */
    getOneByZip = async (zip) => {
        return await super.query(
            "select province FROM Place where zip_code = ?",
            [zip]
        )
    }
}