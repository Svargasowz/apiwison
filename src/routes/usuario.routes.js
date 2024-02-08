import {Router} from 'express'
import {getUsuarios} from '../controllers/usuario.controller.js'
const router =Router()

router.get("/usuarios",getUsuarios)

export default router;