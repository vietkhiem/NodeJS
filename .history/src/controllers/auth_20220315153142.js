export const register = async (req, res) => {
    try {
        const user = new User({
            username: req.body.username,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 8)
        });
    } catch (error) {
        
    }
}
export const login = async (req, res) => {
    try {
        
    } catch (error) {
    
    }
} 