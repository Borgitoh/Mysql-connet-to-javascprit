const connection = require('../server/conet');

function getAllProduct() {
  return new Promise((resolve, reject) => {
    connection.query('SELECT * FROM tb_produto', (error, results) => {
      if (error) {
        return reject(error);
      }
      resolve(results);
    });
  });
}

function inserProduct(body) {
  return new Promise((resolve, reject) => {
    const query = 'INSERT INTO tb_produto (desc_produto, preco_normal, preco_desconto) VALUES (?, ?, ?)';
    connection.query(query, [body.descProduto, body.precoNormal, body.precoDesconto], (error, results) => {
      if (error) {
        return reject(error);
      }
      resolve(`Produto adicionado com ID: ${results.insertId}`);
    });
  });
}

function findByName(body) {
    return new Promise((resolve, reject) => {
      const query = 'SELECT * FROM tb_produto where desc_produto = ?';
      connection.query(query, [body.descProduto], (error, results) => {
        if (error) {
          return reject(error);
        }
        resolve(results);
      });
    });
  }

module.exports = { getAllProduct, inserProduct, findByName };





  