"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JWTgenerate = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = __importDefault(require("../server/config"));
const key = config_1.default.JWT_AUTH || "e$tAcL@v3Es$cr3tA";
const JWTgenerate = (uid = '') => {
    return new Promise((resolve, reject) => {
        const payload = { uid };
        jsonwebtoken_1.default.sign(payload, key, {
            expiresIn: '48h',
        }, (err, token) => {
            if (err) {
                console.log(err);
                reject('No se pudo generar el token');
            }
            else {
                if (token) {
                    resolve(token);
                }
                else {
                    reject('El token es indefinido');
                }
            }
        });
    });
};
exports.JWTgenerate = JWTgenerate;
//# sourceMappingURL=jwt-generate.js.map