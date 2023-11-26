"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usuario_controller_1 = require("../controllers/usuario.controller");
const express_validator_1 = require("express-validator");
// import { isEmailExist, isUserForID } from "../helpers/db-validators";
// import validarCampos from "../middlewares/validar-campos";
// import validarJWT from "../middlewares/validar-jwt";
// import { isAdminRole } from "../middlewares/validar-rol";
const router = (0, express_1.Router)();
router.get('/', [
// validarJWT,
// validarCampos
], usuario_controller_1.gets);
router.get('/:id', [
    // check('id').custom(isUserForID),
    (0, express_validator_1.check)('id').isInt().withMessage('El campo id debe ser un número entero'),
    // validarJWT,
    // validarCampos
], usuario_controller_1.get);
// Crear usuario desde adm | Esto si te requiere token
router.post('/create', [
    // validarJWT,
    (0, express_validator_1.check)('nombre', 'El nombre es obligatorio').not().isEmpty(),
    (0, express_validator_1.check)('password', 'El password debe de ser de mas 6 de caracteres').isLength({ min: 6 }),
    // check('correo').custom(isEmailExist),
    // validarCampos
], usuario_controller_1.post);
// Crear usuario desde el market App -> Solo debo crear usuarios con el id_rol=1
// Esto no te requiere token
// En la biotacora añadir esta accion solamente como accion, sin registrar usuarios
router.post('/', [
    (0, express_validator_1.check)('nombre', 'El nombre es obligatorio').not().isEmpty(),
    (0, express_validator_1.check)('password', 'El password debe de ser de mas 6 de caracteres').isLength({ min: 6 }),
    // check('correo').custom(isEmailExist),
    // validarCampos
], usuario_controller_1.post);
router.put('/:id', [
    (0, express_validator_1.check)('id').isInt().withMessage('El campo id debe ser un número entero'),
    // validarJWT,
    // validarCampos
], usuario_controller_1.put);
router.delete('/del/:id', [
    (0, express_validator_1.check)('id').isInt().withMessage('El campo id debe ser un número entero'),
    // validarJWT,
    // //    isAdminRole,
    // validarCampos
], usuario_controller_1.delet);
router.delete('/:id', [
    (0, express_validator_1.check)('id').isInt().withMessage('El campo id debe ser un número entero'),
    // validarJWT,
    // validarCampos
], usuario_controller_1.deletState);
exports.default = router;
//# sourceMappingURL=usuario.routes.js.map