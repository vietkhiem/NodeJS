export const register = async (req, res) => {
    try {
        
    } catch (error) {

    }
}
export const login = async (req, res) => {
    try {
        const login = await Login.find({}).exec();
        res.json(login);
    } catch (error) {

    }
} 