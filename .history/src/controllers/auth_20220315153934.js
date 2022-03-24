export const register = async (req, res) => {
    try {
        const products = await Product.find({}).exec();
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