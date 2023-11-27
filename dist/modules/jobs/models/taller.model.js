"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../../../database/connection"));
const usuario_model_1 = __importDefault(require("../../auth/models/usuario.model"));
class Taller extends sequelize_1.Model {
    // Otras propiedades del modelo...
    // Definición de las asociaciones
    static associate() {
        Taller.belongsTo(usuario_model_1.default, { foreignKey: "id_usuario" });
    }
}
Taller.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nombre: {
        type: sequelize_1.DataTypes.STRING,
    },
    ubicacion: {
        type: sequelize_1.DataTypes.STRING
    },
    state: {
        type: sequelize_1.DataTypes.BOOLEAN,
    },
    id_usuario: {
        type: sequelize_1.DataTypes.INTEGER,
        references: {
            model: usuario_model_1.default,
            key: "id",
        },
    },
}, {
    sequelize: connection_1.default,
    modelName: "Taller",
    tableName: "taller",
});
exports.default = Taller;
//# sourceMappingURL=taller.model.js.map