module.exports = class Query {
    constructor(pool) {
      // Dependency Injection
      this.pool = pool;
    }
  
    query(sql, params, callback) {
      this.pool.getConnection((err, connection) => {
        if (err) {
          console.log("query: error connecting to database");
          callback(500, { error: "error connecting to database" });
        } else {
          console.log("query: running sql: " + sql);
          connection.query(sql, params, (err, rows) => {
            connection.release();
            if (err) {
              console.log(err);
              callback(500, { error: "error querying" });
            } else {
              console.log("query: returning rows");
              callback(200, rows);
            }
          });
        }
      });
    }
  };
  