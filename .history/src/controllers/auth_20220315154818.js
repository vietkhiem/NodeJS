export const register = async (req, res) => {
    try {
        const user = await User.findOne({
            username: req.body.username,
            email: req.body.email
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
        const logins = await Login.find({
            username: req.body.username
        }).exec();
        res.json(logins);
    } catch (error) {
        res.status(400).json({
            error: "Đăng nhập không thành công"
        })
    }
} 