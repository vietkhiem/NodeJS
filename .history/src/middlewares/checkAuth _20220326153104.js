import expressJWT from "express-jwt";

export const checkAuth = (req, res,next) => {
    const isAdmin = true;
    if(isAdmin){
        next();
    } else {
        console.log('Chim cute');
    }
} 

export const requiredSignin = expressJWT({
    algorithms: ['HS256'],
    secret: '12345',
    requestProperty: "auth" // req.auth
});

export const isAuth = (req, res, next) => {
    const status = req.profile._id == req.auth._id;
    if(!status){
        req.status(401).json({
            
        })
    }
}