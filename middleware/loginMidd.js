const verifyParamsLogin = ( req, res, next) =>{
    
    const { email, password } = req.body;
    const campo = {
        email: "El campo email no puede estar vacio",
        password: "El campo password no puede estar vacio"
    }
    if(!email){
        return res.status(400).json({error: campo.email});
    }else if(!password){
        return res.status(400).json({error: campo.password});
    }
    next();
}

export { verifyParamsLogin };