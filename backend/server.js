
const express = require("express");
const connectDB = require("./config/db")
const productRoutes = require("./routes/productRoutes")
connectDB();
const PORT =  5000;

const app = express();

app.use(express.json());

app.use("/api/product", productRoutes)

app.listen(PORT, ()=> console.log(`Server started at ${PORT}`))