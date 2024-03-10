//Respuestas informativas (100–199),
// Respuestas satisfactorias (200–299),
// Redirecciones (300–399),
// Errores de los clientes (400–499),
// y errores de los servidores (500–599).

const ERRORS = [
    { code: "23502", status: 400,message: "El campo destino o presupuesto no puede estar vacio"},
    { code: "42P01", status: 500, message: "error en la conexion con la base de datos"},
    { code: "22P02", status: 400, message: "bad request" },
    { code: "42601", status: 400, messageS: "errro de sintaxis en la consulta" },
    { code: "auth_01", status: 400, message: "el usuario no existe" },
    { code: "auth_02", status: 400, message: "contraseña invalida" },
    { code: "auth_03", status: 401, message: "el token debe estar presente" },
    { code: "auth_04", status: 401, message: "el token no es valido" },
];  
export default ERRORS;
