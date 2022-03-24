import Category from '../models/category';

export const create = async (req, res) => {
    try {
        const category = await new Category(req.body).sava()
        res.json(category)
    } catch (error) {
        res.status(400).json({error})
    }
}
 