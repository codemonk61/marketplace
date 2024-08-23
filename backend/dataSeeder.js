const envVar = require("dotenv").config();

const productsData = require("./data/products")
const connectDB = require("./config/db");
const product = require("./models/product")

connectDB();

const importData = async () => {
 try {
    await product.deleteMany({})
    await product.insertMany(productsData)
    process.exit();
 } catch (error) {
    process.exit(1)
 }
}

importData();