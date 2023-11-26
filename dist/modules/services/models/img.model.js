"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../../../database/connection"));
const asistencia_model_1 = __importDefault(require("../models/asistencia.model"));
class Img extends sequelize_1.Model {
    // Otras propiedades del modelo...
    // Definición de las asociaciones
    static associate() {
        Img.belongsTo(asistencia_model_1.default, { foreignKey: "id_asistencia" });
    }
}
Img.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    img: {
        type: sequelize_1.DataTypes.STRING,
    },
    state: {
        type: sequelize_1.DataTypes.BOOLEAN,
    },
    id_asistencia: {
        type: sequelize_1.DataTypes.INTEGER,
        references: {
            model: asistencia_model_1.default,
            key: "id",
        },
    },
}, {
    sequelize: connection_1.default,
    modelName: "Img",
    tableName: "img",
});
exports.default = Img;
//# sourceMappingURL=img.model.js.map