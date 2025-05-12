const mysql = require('../../mysql'); 






exports. entrarFila = async (req, res) => {
try{

    const resultados = await mysql.execute(
        `  insert into lines (id_user, id_ride) values (?, ?)`,
        [res.locals.idUsuario, req.params.idride]);
  
    return res.status(200).send({
        "Mensagem": "Usuário entrou na fila com sucesso"
    });
}catch(error){
    return res.status(500).send({
        "error": error
    });
}
}