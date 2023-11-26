"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../../../database/connection"));
const usuario_model_1 = __importDefault(require("../../auth/models/usuario.model"));
const taller_model_1 = __importDefault(require("./taller.model"));
class Tecnicos extends sequelize_1.Model {
    // Otras propiedades del modelo...
    // Definición de las asociaciones
    static associate() {
        Tecnicos.belongsTo(usuario_model_1.default, { foreignKey: "id_usuario" });
        Tecnicos.belongsTo(taller_model_1.default, { foreignKey: "id_taller" });
    }
}
Tecnicos.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    sueldo: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    hora_ini: {
        type: sequelize_1.DataTypes.STRING,
    },
    hora_fin: {
        type: sequelize_1.DataTypes.STRING,
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
    id_taller: {
        type: sequelize_1.DataTypes.INTEGER,
        references: {
            model: taller_model_1.default,
            key: "id",
        },
    },
}, {
    sequelize: connection_1.default,
    modelName: "Tecnicos",
    tableName: "tecnicos",
});
exports.default = Tecnicos;
//# sourceMappingURL=tecnicos.model.js.map