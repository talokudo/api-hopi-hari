const express = require('express');
const router = express.Router();
const login = require("../controllers/middleware/usuarios.middleware");

router.post("/",() => {console.log("Rota de filas")});
console.log("Rota de filas");

module.exports = router;
