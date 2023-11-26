"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const vehiculo_controller_1 = require("../controllers/vehiculo.controller");
// import validarCampos from "../middlewares/validar-campos";
// import validarJWT from "../middlewares/validar-jwt";
// import { isAdminRole } from "../middlewares/validar-rol";
const router = (0, express_1.Router)();
router.get('/', [
// validarJWT,
//  isAdminRole,
// validarCampos
], vehiculo_controller_1.gets);
router.get('/:id', [
    (0, express_validator_1.check)('id').isInt().withMessage('El campo id debe ser un número entero'),
    // validarJWT,
    // isAdminRole,
    // validarCampos
], vehiculo_controller_1.get);
router.post('/', [
    // validarJWT,
    // isAdminRole,
    (0, express_validator_1.check)('rol', 'El rol es obligatorio').not().isEmpty(),
    (0, express_validator_1.check)('descripcion', 'La descripcion es obligatoria').not().isEmpty(),
    // validarCampos
], vehiculo_controller_1.post);
router.put('/:id', [
    (0, express_validator_1.check)('id').isInt().withMessage('El campo id debe ser un número entero'),
    // validarJWT,
    // isAdminRole,
    // validarCampos
], vehiculo_controller_1.put);
router.delete('/del/:id', [
    (0, express_validator_1.check)('id').isInt().withMessage('El campo id debe ser un número entero'),
    // validarJWT,
    // isAdminRole,
    // validarCampos
], vehiculo_controller_1.delet);
router.delete('/:id', [
    (0, express_validator_1.check)('id').isInt().withMessage('El campo id debe ser un número entero'),
    // validarJWT,
    // isAdminRole,
    // validarCampos
], vehiculo_controller_1.deletState);
exports.default = router;
//# sourceMappingURL=targeta.routes.js.map