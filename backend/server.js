import express from 'express'; // when ES 5  modules not being used : const express = require("express")
//import products from "./data/products.js"; //it is necessary to use .js according to ES 5 modules
import dotenv from "dotenv";
import connectDB from "./config/db.js";
//import products from "./data/products.js";
import colors from 'colors';
import productRoutes from "./routes/productRoutes.js";
import {notFound, errorHandler} from "./middleware/errorMiddleware.js";

dotenv.config()

connectDB()

const app = express()

app.use((req, res, next) => { //middlewares
    console.log(req.originalUrl) // whenever we make any request, we will get "hello" in console
    next()
})

app.get('/', (req, res)=> {
    res.send("API is running")
})

// app.get('/api/products', (req,res)=>{
//     res.json(products)
// }) 

// app.get('/api/products/:id', (req,res)=>{
//     const product = products.find(p=> p._id === req.params.id)
//     res.json(product)
// }) 

app.use('/api/products', productRoutes);

app.use(notFound);

app.use(errorHandler);

const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV } mode on port ${PORT}`.yellow.bold))