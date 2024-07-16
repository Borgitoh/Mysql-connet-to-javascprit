const { createPool } = require('mysql');

const pool = createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "store",
    connectionLimit: 10

})
pool.query(`select * from tb_produto`, function(err, result, fields) {

    if (err) {

        return console.log(err);

    }

    return console.log(result);

})