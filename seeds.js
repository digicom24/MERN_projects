const mongoose = require("mongoose");
const Product = require("./models/product");

mongoose
  .connect("mongodb://localhost:27017/farmStand", {
    useNewUrlParser: true,
    keepAlive: true,
  })
  .then(() => {
    console.log("db Connection open!!!");
  })
  .catch((err) => {
    console.log("Error while connecting to db");
    console.log(err);
  });

const productSeeds = [
  {
    name: "ruby fruit",
    price: 20,
    category: "fruit",
  },
  {
    name: "veg",
    price: 30,
    category: "vegetable",
  },
  {
    name: "milk",
    price: 50,
    category: "dairy",
  },
  {
    name: "apple",
    price: 100,
    category: "fruit",
  },
  {
    name: "butter",
    price: 250,
    category: "dairy",
  },
];

Product.insertMany(productSeeds)
  .then((res) => {
    console.log("inserting into db");
    console.log(res);
  })
  .catch((e) => {
    console.log(e);
  });
