"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../../../database/connection"));
const usuario_model_1 = __importDefault(require("./usuario.model"));
class Targeta extends sequelize_1.Model {
    // Otras propiedades del modelo...
    // Definición de las asociaciones
    static associate() {
        Targeta.belongsTo(usuario_model_1.default, { foreignKey: "id_usuario" });
    }
}
Targeta.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    numero: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    fecha_ven: {
        type: sequelize_1.DataTypes.DATE,
    },
    cvs: {
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
}, {
    sequelize: connection_1.default,
    modelName: "Targeta",
    tableName: "targeta",
});
exports.default = Targeta;
//# sourceMappingURL=targeta.model.js.map