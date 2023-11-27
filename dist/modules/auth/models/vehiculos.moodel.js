"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../../../database/connection"));
const usuario_model_1 = __importDefault(require("./usuario.model"));
class Vehiculo extends sequelize_1.Model {
    // Otras propiedades del modelo...
    // Definición de las asociaciones
    static associate() {
        Vehiculo.belongsTo(usuario_model_1.default, { foreignKey: "id_usuario" });
    }
}
Vehiculo.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    placa: {
        type: sequelize_1.DataTypes.STRING,
    },
    modelo: {
        type: sequelize_1.DataTypes.STRING,
    },
    marca: {
        type: sequelize_1.DataTypes.STRING,
    },
    img: {
        type: sequelize_1.DataTypes.STRING,
    },
    anio: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    color: {
        type: sequelize_1.DataTypes.INTEGER,
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
    modelName: "Vehiculo",
    tableName: "vehiculo",
});
exports.default = Vehiculo;
//# sourceMappingURL=vehiculos.moodel.js.map