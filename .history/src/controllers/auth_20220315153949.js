export const register = async (req, res) => {
    try {
        const user = await User.find({}).exec();
        res.json(products);
    } catch (error) {
        res.status(400).json({
            error: "Đăng ký không thành công"
        })
    }
}
export const login = async (req, res) => {
    try {
        
    } catch (error) {
    
    }
} 