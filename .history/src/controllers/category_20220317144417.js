import Category from '../models/category';

export const create = async (req, res) => {
    try {
        const category = await new Category(req.body).sava()
        res.json(category)
    } catch (error) {
        res.status(400).json({error})
    }
}

export const read = async ( req, res) => {
    try {
        const category = await Category.findOne({_id: req.params.id}).exec();
        res.json(category)
    } catch (error) {
        res.status(400).json({error})
    }
} 