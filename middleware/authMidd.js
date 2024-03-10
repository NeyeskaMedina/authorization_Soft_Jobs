const authorizationMidd = (req, res, next) =>{
    const token = req.headers("Authorization");
    if(!token){
        return res.status(401).json({ error: "No existe el token !!!" });
    }
    next();
}

export { authorizationMidd }