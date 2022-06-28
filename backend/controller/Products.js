import Product from "../models/productModel.js"

export const getAllProduct = async (req, res) =>{
    try {
        const products = await Product.findAll();
        res.json(products);  
    } catch (error) {
        res.json({message: error.message});
    }
};

export const createProduct = async (req, res) =>{
    try {
        await Product.create(req.body);
        res.json({
            "messages": "Produk dibuat"
        });  
    } catch (error) {
        res.json({message: error.message});
    }
};

export const getProduct = async (req, res) =>{
    try {
        const products = await Product.findAll({
            where: {
                id: req.params.id
            }
        });
        res.json(products[0]);  
    } catch (error) {
        res.json({message: error.message});
    }
};

export const updateProduct = async (req, res) =>{
    try {
        await Product.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.json({
            "messages": "Produk diperbarui"
        });  
    } catch (error) {
        res.json({message: error.message});
    }
};

export const deleteProduct = async (req, res) =>{
    try {
        await Product.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({
            "messages": "Produk didelete"
        });  
    } catch (error) {
        res.json({message: error.message});
    }
};