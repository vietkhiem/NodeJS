import expressJWT from "express-jwt";

export const checkAuth = (req, res,next) => {
    const isAdmin = true;
    if(isAdmin){
        next();
    } else {
        console.log('Chim cute');
    }
} 

export const requi

export const isAuth = (req, res, next) => {

}