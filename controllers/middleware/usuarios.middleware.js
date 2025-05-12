const jwt = require("jsonwebtoken");

exports.required = async (req, res, next) => { 
    try{
res.locals.idUsuario = 0;


const token = req.headers.authorization.split(" ")[1];
const decoded = jwt.decode(token, "senhadojwt");

if (decode.id){
    res.locals.idUsuario = decode.id;
    next();
}



if (decode,id){
    return res.status(401).send({
        "Mensagem": "Token inválido"
    });
}


    }catch (error){
return res.status(500).send({
        "error": " error"})
    }
 }
