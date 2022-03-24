import Category from '../models/category';
import Product from '../models/product';

export const create = async (req, res) => {
    try {
        const category = await new Category(req.body).sava()
        res.json(category)
    } catch (error) {
        res.status(400).json({
            error:
        })
    }
}

export const read = async ( req, res) => {
    try {
        const category = await Category.findOne({_id: req.params.id}).exec();
        const products = await Product.find({category}).select("-category").exec();
        res.json({
            category,
            products
        })
    } catch (error) {
        res.status(400).json({error})
    }
} 