"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../../../database/connection"));
const taller_model_1 = __importDefault(require("./taller.model"));
class Servicio extends sequelize_1.Model {
    // Otras propiedades del modelo...
    // Definición de las asociaciones
    static associate() {
        Servicio.belongsTo(taller_model_1.default, { foreignKey: "id_taller" });
    }
}
Servicio.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    precio: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    servicio: {
        type: sequelize_1.DataTypes.STRING,
    },
    descripcion: {
        type: sequelize_1.DataTypes.STRING,
    },
    state: {
        type: sequelize_1.DataTypes.BOOLEAN,
    },
    id_taller: {
        type: sequelize_1.DataTypes.INTEGER,
        references: {
            model: taller_model_1.default,
            key: "id",
        },
    },
}, {
    sequelize: connection_1.default,
    modelName: "Servicio",
    tableName: "servicio",
});
exports.default = Servicio;
//# sourceMappingURL=servicio.model.js.map