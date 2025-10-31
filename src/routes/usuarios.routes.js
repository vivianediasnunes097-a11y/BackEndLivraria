import {
    criarusuario,
    listausuario,
    obterusuario,
    atualizarusuario,
    deletarusuario
} from "../controllers/usuarios.controller.js";
const express = require("express")
const router = express.Router;
router.get("/", listausuario)
router.get("/", criarusuario)
router.get("/",obterusuario)
router.get("/", atualizarusuario)
router.get("/", deletarusuario)