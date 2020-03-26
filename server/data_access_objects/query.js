module.exports = class Query {
    constructor(pool) {
      this.pool = pool;
    }

  query(sql, params) {
    return new Promise((resolve, reject) => {
      this.pool.getConnection((err, connection) => {
        if (err) {
          console.log("query: error connecting to database")
          reject("Error: error connection to database")
        } else {
          console.log("query: running sql: " + sql);
          connection.query(sql, params, (err, rows) => {
            connection.release();
            if (err) {
              console.log(err);
              reject("Error: error querying ")
            } else {
              console.log("query: returning rows")
              resolve(rows)
            }
          })
        }
      })


    })

  }
}
  