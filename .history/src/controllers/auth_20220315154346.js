export const register = async (req, res) => {
    try {
        const user = await User.findOne({
            username: req.body.username
        }).exec();
        res.json(user);
    } catch (error) {
        res.status(400).json({
            error: "Đăng ký không thành công"
        })
    }
}
export const login = async (req, res) => {
    try {
        
    } catch (error) {
        res.status(400).json({
            error: "Đăng nhập không thành công"
        })
    }
} 