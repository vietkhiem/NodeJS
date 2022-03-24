export const register = async (req, res) => {
    try {
        
    } catch (error) {
        
    }
}
export const login = async (req, res) => {
    try {
        const login = await Login.findOne({}).exec();
        res.json(login);
    } catch (error) {
        res.status(400).json({
            error: "Đăng nhập không thành công"
        })
    }
} 