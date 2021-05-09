import express from 'express'; // when ES 5  modules not being used : const express = require("express")
import products from "./data/products.js"; //it is necessary to use .js according to ES 5 modules
import dotenv from "dotenv";

dotenv.config()

const app = express()

app.get('/', (req, res)=> {
    res.send("API is running")
})

app.get('/api/products', (req,res)=>{
    res.json(products)
}) 

app.get('/api/products/:id', (req,res)=>{
    const product = products.find(p=> p._id === req.params.id)
    res.json(product)
}) 

const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV } mode on port ${PORT}`))