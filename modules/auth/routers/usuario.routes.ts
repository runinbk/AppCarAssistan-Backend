import { Router } from "express";
import {
    get,
    gets,
    post,
    put,
    delet,
    deletState
} from "../controllers/usuario.controller";
import { check } from "express-validator";
// import { isEmailExist, isUserForID } from "../helpers/db-validators";
// import validarCampos from "../middlewares/validar-campos";
// import validarJWT from "../middlewares/validar-jwt";
// import { isAdminRole } from "../middlewares/validar-rol";

const router = Router();

router.get('/', [
    // validarJWT,
    // validarCampos
], gets);

router.get('/:id', [
    // check('id').custom(isUserForID),
    check('id').isInt().withMessage('El campo id debe ser un número entero'),
    // validarJWT,
    // validarCampos
], get);

// Crear usuario desde adm | Esto si te requiere token
router.post('/create', [
    // validarJWT,
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('password', 'El password debe de ser de mas 6 de caracteres').isLength({ min: 6 }),
    // check('correo').custom(isEmailExist),
    // validarCampos
], post);

// Crear usuario desde el market App -> Solo debo crear usuarios con el id_rol=1
// Esto no te requiere token
// En la biotacora añadir esta accion solamente como accion, sin registrar usuarios
router.post('/', [
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('password', 'El password debe de ser de mas 6 de caracteres').isLength({ min: 6 }),
    // check('correo').custom(isEmailExist),
    // validarCampos
], post);

router.put('/:id', [
    check('id').isInt().withMessage('El campo id debe ser un número entero'),
    // validarJWT,
    // validarCampos
], put);

router.delete('/del/:id', [
    check('id').isInt().withMessage('El campo id debe ser un número entero'),
    // validarJWT,
    // //    isAdminRole,
    // validarCampos
], delet);

router.delete('/:id', [
    check('id').isInt().withMessage('El campo id debe ser un número entero'),
    // validarJWT,
    // validarCampos
], deletState);

export default router;
