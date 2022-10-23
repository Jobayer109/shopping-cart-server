const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.port || 5000;

app.use(cors());
const allProducts = require("./data/data.json");

app.get("/products", (req, res) => {
  res.send(allProducts);
});

app.get("/product/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const singleProduct = allProducts.find((pd) => pd.id === id);
  res.send(singleProduct);

  if (!singleProduct) {
    res.send("Ops, No data found");
  }
});

app.get("/category/:name", (req, res) => {
  const name = req.params.name;
  const getCategory = allProducts.filter((pd) => pd.category === name);
  res.send(getCategory);
});

app.get("/", (req, res) => {
  res.send("Hello from Express");
});

app.listen(port, () => {
  console.log(`Server is running in port no: ${port}`);
});
