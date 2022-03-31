import User from '../models/user';

export const userById = async (req, res, id) => {
    try {
        const user = await  User.findById(id).exec();
        if(!user)
    } catch (error) {
        
    }
}