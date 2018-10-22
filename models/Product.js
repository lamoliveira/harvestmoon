const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
  userid: { type: String, required: true }, 
  product: { type: String, required: true },
  image: String,
  plantedon: String, 
  harveston: String,
  description: String,
  date: { type: Date, default: Date.now }
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
