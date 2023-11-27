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
exports.login = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const usuario_model_1 = __importDefault(require("../models/usuario.model"));
const jwt_generate_1 = require("../../../helpers/jwt-generate");
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { correo, password } = req.body;
    try {
        // Verificar si el email existe
        const user = yield usuario_model_1.default.findOne({
            where: {
                correo: correo
            }
        });
        // const user = await Usuario.findOne({ correo });
        if (!user) {
            res.status(400).json({
                msg: 'Usuario / Password no son correctos - correo',
            });
            return;
        }
        // Si el usuario esta activo
        if (!user.state) {
            res.status(400).json({
                msg: 'Usuario / Password no son correctos - estado: false',
            });
            return;
        }
        // Verificar la contraseña
        const validPassword = yield bcrypt_1.default.compare(password, user.password);
        if (!validPassword) {
            res.status(400).json({
                msg: 'Usuario / Password no son correctos - password',
            });
            return;
        }
        // Generar en JWT
        const token = yield (0, jwt_generate_1.JWTgenerate)(user.id.toString());
        res.json({
            user,
            token,
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador',
        });
    }
});
exports.login = login;
//# sourceMappingURL=auth.controller.js.map