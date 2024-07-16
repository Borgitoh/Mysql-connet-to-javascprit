const connection = require('./conet');


connection.query('SELECT * FROM tb_produto', (error, results, fields) => {
  if (error) throw error;
  console.log('User data:', results);
});
