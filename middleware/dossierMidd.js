const getDossier = async (req, res, next) => {

    const params = req.body
    const SQLquery = req.query
    const url = req.url
    
    console.log(
        `Fecha: ${new Date()}
        Ruta: ${url}
        Parametros: ${params} 
        Querys: ${SQLquery}`  
    )
    next()
}

export { getDossier }