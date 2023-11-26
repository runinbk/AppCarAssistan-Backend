"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../../../database/connection"));
class Rol extends sequelize_1.Model {
}
Rol.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    rol: {
        type: sequelize_1.DataTypes.STRING,
    },
    descripcion: {
        type: sequelize_1.DataTypes.TEXT
    },
    state: {
        type: sequelize_1.DataTypes.BOOLEAN
    }
}, {
    sequelize: connection_1.default,
    modelName: "Rol",
    tableName: "rol",
});
exports.default = Rol;
//# sourceMappingURL=rol.model.js.map