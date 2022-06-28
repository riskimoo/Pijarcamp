import express  from "express";
import { 
    getAllProduct,
    createProduct,
    getProduct,
    updateProduct,
    deleteProduct
 } from "../controller/Products.js";

const router = express.Router();

router.get('/', getAllProduct);
router.post('/', createProduct);
router.get('/:id', getProduct);
router.patch('/:id', updateProduct);
router.delete('/:id', deleteProduct);

export default router;