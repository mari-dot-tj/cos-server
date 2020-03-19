module.exports = class Query {
    constructor(pool) {
      // Dependency Injection
      this.pool = pool;
    }
  
    query(sql, params, callback) {
      this.pool.getConnection((err, connection) => {
        console.log("query: connected to database");
        if (err) {
          console.log("query: error connecting");
          callback(500, { error: "feil ved ved oppkobling" });
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
  