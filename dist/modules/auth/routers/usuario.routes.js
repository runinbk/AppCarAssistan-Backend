"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usuario_controller_1 = require("../controllers/usuario.controller");
const express_validator_1 = require("express-validator");
const db_validators_1 = require("../../../helpers/db-validators");
const validar_campos_1 = __importDefault(require("../../../middlewares/validar-campos"));
const validar_jwt_1 = __importDefault(require("../../../middlewares/validar-jwt"));
// import { isAdminRole } from "../middlewares/validar-rol";
const router = (0, express_1.Router)();
router.get('/', [
    validar_jwt_1.default,
    validar_campos_1.default
], usuario_controller_1.gets);
router.get('/:id', [
    (0, express_validator_1.check)('id').custom(db_validators_1.isUserForID),
    (0, express_validator_1.check)('id').isInt().withMessage('El campo id debe ser un número entero'),
    validar_jwt_1.default,
    validar_campos_1.default
], usuario_controller_1.get);
// Crear usuario desde adm | Esto si te requiere token
router.post('/create', [
    validar_jwt_1.default,
    (0, express_validator_1.check)('nombre', 'El nombre es obligatorio').not().isEmpty(),
    (0, express_validator_1.check)('password', 'El password debe de ser de mas 6 de caracteres').isLength({ min: 6 }),
    (0, express_validator_1.check)('correo').custom(db_validators_1.isEmailExist),
    validar_campos_1.default
], usuario_controller_1.post);
// Crear usuario desde el market App -> Solo debo crear usuarios con el id_rol=1
// Esto no te requiere token
// En la biotacora añadir esta accion solamente como accion, sin registrar usuarios
router.post('/', [
    (0, express_validator_1.check)('nombre', 'El nombre es obligatorio').not().isEmpty(),
    (0, express_validator_1.check)('password', 'El password debe de ser de mas 6 de caracteres').isLength({ min: 6 }),
    (0, express_validator_1.check)('correo').custom(db_validators_1.isEmailExist),
    validar_campos_1.default
], usuario_controller_1.post);
router.put('/:id', [
    (0, express_validator_1.check)('id').isInt().withMessage('El campo id debe ser un número entero'),
    validar_jwt_1.default,
    validar_campos_1.default
], usuario_controller_1.put);
router.delete('/del/:id', [
    (0, express_validator_1.check)('id').isInt().withMessage('El campo id debe ser un número entero'),
    validar_jwt_1.default,
    //    isAdminRole,
    validar_campos_1.default
], usuario_controller_1.delet);
router.delete('/:id', [
    (0, express_validator_1.check)('id').isInt().withMessage('El campo id debe ser un número entero'),
    validar_jwt_1.default,
    validar_campos_1.default
], usuario_controller_1.deletState);
exports.default = router;
//# sourceMappingURL=usuario.routes.js.map