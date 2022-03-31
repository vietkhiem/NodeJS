import User from '../models/user';

export const userById = async (req, res, id) => {
    try {
        const user = await  User.findById(id).exec();
        if(!user){
            res.status(400).json({
                message: "Không tìm thấy user"
            })
        }
    } catch (error) {
        req.profile = user
    }
}