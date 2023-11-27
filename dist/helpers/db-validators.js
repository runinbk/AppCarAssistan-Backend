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
exports.isRolForID = exports.isUserForID = exports.isEmailExist = exports.isRoleADM = exports.isRoleValue = void 0;
const usuario_model_1 = __importDefault(require("../modules/auth/models/usuario.model"));
const rol_model_1 = __importDefault(require("../modules/auth/models/rol.model"));
const isRoleValue = (rol) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const existRole = yield rol_model_1.default.findOne({ where: { rol: rol } });
        if (!existRole) {
            throw new Error(`El rol ${rol} no está registrado en la base de datos`);
        }
    }
    catch (error) {
        throw new Error(`Error al verificar el rol: ${error}`);
    }
});
exports.isRoleValue = isRoleValue;
const isRoleADM = (rol) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const existRole = yield rol_model_1.default.findOne({ where: { rol: rol } });
        if (!existRole) {
            throw new Error(`El rol ${rol} no está registrado en la base de datos`);
        }
    }
    catch (error) {
        throw new Error(`Error al verificar el rol: ${error}`);
    }
});
exports.isRoleADM = isRoleADM;
const isEmailExist = (correo) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const existEmail = yield usuario_model_1.default.findOne({ where: { correo: correo } });
        if (existEmail) {
            throw new Error(`El correo "${correo}" ya está registrado`);
        }
    }
    catch (error) {
        throw new Error(`Error al verificar el correo: ${error}`);
    }
});
exports.isEmailExist = isEmailExist;
const isUserForID = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const existUserID = yield usuario_model_1.default.findByPk(id);
        if (!existUserID) {
            throw new Error(`El ID ${id} no existe`);
        }
    }
    catch (error) {
        throw new Error(`Error al verificar el ID: ${error}`);
    }
});
exports.isUserForID = isUserForID;
const isRolForID = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const existRoleID = yield rol_model_1.default.findByPk(id);
        if (!existRoleID) {
            throw new Error(`El ID ${id} no existe - Rol`);
        }
    }
    catch (error) {
        throw new Error(`Error al verificar el Rol - ID: ${error}`);
    }
});
exports.isRolForID = isRolForID;
//# sourceMappingURL=db-validators.js.map