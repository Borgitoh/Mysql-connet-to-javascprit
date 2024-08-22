const express = require('express');
const dotenv = require('dotenv');
const { getAllProduct, inserProduct, findByName } = require('./controller/produtos');
const app = express();
dotenv.config();

app.use(express.json());
app.listen(process.env.PORT_SERVER, ()=>{})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/produtos', async (req, res) => {
  try {
    if(req.params){

    }
    const produtos = await findByName(req.params);
    res.status(200).json(produtos)
  }catch (error){
    res.status(500).send("bad resquest")
    
  }
})

app.get('/produtos/:id', async (req, res) => {
  try {
    const produto = await getAllProduct(req.params.id);
    if (produto) {
      res.status(200).json(produto);
    } else {
      res.status(404).send('Produto não encontrado');
    }
  } catch (error) {
    res.status(500).send("Erro ao buscar produto");
  }
});

app.post('/produtos', async (req, res) => {
  try {
    const produtos = await inserProduct(req.body)
    res.status(200).json(produtos);
  }catch (error){
    console.log(error);
    res.status(500).send("bad resquest")
    
  }
})