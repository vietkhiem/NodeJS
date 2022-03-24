export const register = async (req, res) => {
    try {
        const user = await User.findOne({
            username: req.body.username
        }).exec((err, user) => {
            if (err) {
              res.status(500).send({ message: err });
              return;
            }
            if (user) {
              res.status(400).send({ message: "Failed! Username is already in use!" });
              return;
            }
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