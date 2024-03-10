const verifyParamsUser = ( req, res, next) =>{
    
    const { email, password, rol, lenguage } = req.body;
    const campo = {
        email: "El campo email no puede estar vacio",
        password: "El campo password no puede estar vacio",
        rol: "El campo rol no puede estar vacio",
        lenguage: "El campo lenguage no puede estar vacio"
    }
    if(!email){
        return res.status(400).json({error: campo.email});
    }else if(!password){
        return res.status(400).json({error: campo.password});
    }else if(!rol){
        return res.status(400).json({error: campo.rol});
    }else if(!lenguage){
        return res.status(400).json({error: campo.lenguage});
    }
    next();
}

export { verifyParamsUser };