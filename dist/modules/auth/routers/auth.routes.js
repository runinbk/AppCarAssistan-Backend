"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const validar_campos_1 = __importDefault(require("../../../middlewares/validar-campos"));
const auth_controller_1 = require("../controllers/auth.controller");
const router = (0, express_1.Router)();
router.post('/login', [
    validar_campos_1.default,
    (0, express_validator_1.check)('correo', 'El correo es obligatorio').isEmail(),
    (0, express_validator_1.check)('password', 'La contraseña es obligatoria').not().isEmpty(),
], auth_controller_1.login);
exports.default = router;
//# sourceMappingURL=auth.routes.js.map