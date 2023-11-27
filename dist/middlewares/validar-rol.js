"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isUserRole = exports.haveRole = exports.isAdminRole = void 0;
const rol_model_1 = __importDefault(require("../modules/auth/models/rol.model"));
const isRol = (id_rol) => __awaiter(void 0, void 0, void 0, function* () {
    if (id_rol) {
        const rol = yield rol_model_1.default.findByPk(id_rol);
        if (rol) {
            return rol.rol;
        }
    }
    return null;
});
const isAdminRole = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    if (!req.user) {
        return res.status(500).json({
            msg: 'Se quiere validar el token primero antes de verificar el role',
        });
    }
    const { id_rol } = req.user;
    if (!id_rol) {
        return res.status(500).json({
            msg: 'Se quiere verificar el id_rol',
        });
    }
    // Obtener el rol de ese id
    const rol = yield isRol(id_rol);
    if (rol !== 'ADMIN') {
        return res.status(401).json({
            msg: 'No tienes permisos para ejecutar esta operación',
        });
    }
    next();
});
exports.isAdminRole = isAdminRole;
const isUserRole = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    if (!req.user) {
        return res.status(500).json({
            msg: 'Se quiere validar el token primero antes de verificar el role',
        });
    }
    const { id_rol } = req.user;
    if (!id_rol) {
        return res.status(500).json({
            msg: 'Se quiere verificar el id_rol',
        });
    }
    // Obtener el rol de ese id
    const rol = yield isRol(id_rol);
    if (rol !== 'USUARIO') {
        return res.status(401).json({
            msg: 'No tienes permisos para ejecutar esta operación',
        });
    }
    next();
});
exports.isUserRole = isUserRole;
const haveRole = (...roles) => {
    return (req, res, next) => {
        if (!req.user) {
            return res.status(500).json({
                msg: 'Se quiere verificar el role sin validar el token primero',
            });
        }
        if (!roles.includes('ADMIN_ROLE')) {
            return res.status(401).json({
                msg: `El servicio requiere uno de estos roles: ${roles}`,
            });
        }
        next();
    };
};
exports.haveRole = haveRole;
//# sourceMappingURL=validar-rol.js.map