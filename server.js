// Import Express
import express from "express";
import bodyParser from 'body-parser';
import productRouter from './src/features/product/product.routes.js'

// Create Server
const server = express();

server.use(bodyParser.json());
//For all requests related to product, redirect to product routes.
server.use('/api/products', productRouter);

// default request handler
server.get("/", (req,res)=>{
    res.send("Welcome to Ecommerce APIs");
})

server.listen(3500,()=>{
    console.log("Server is runing at port 3500");
});

