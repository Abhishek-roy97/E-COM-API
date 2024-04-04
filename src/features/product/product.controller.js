import ProductModel from "./product.model.js";

export default class ProductController{
    getAllProducts(req, res){
        const products = ProductModel.GetAll();
        res.status(200).send(products);
    }
    addProduct(req, res){
        console.log(req.body);
        const { name, price, sizes} = req.body;
        const newProduct = {
            name,
            price: parseFloat(price),
            sizes: sizes.split(','),    //It will split the sizes from ',' and return a array.
            imageUrl: req.file.filename,
        }
        const createRecord = ProductModel.add(newProduct);
        res.status(201).send(createRecord);
    }

    rateProduct(req, res){}

    getOneProduct(req, res){}
}