"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../../../database/connection"));
const usuario_model_1 = __importDefault(require("../../auth/models/usuario.model"));
const taller_model_1 = __importDefault(require("../../jobs/models/taller.model"));
const servicio_model_1 = __importDefault(require("../../jobs/models/servicio.model"));
const tecnicos_model_1 = __importDefault(require("../../jobs/models/tecnicos.model"));
class Asistencia extends sequelize_1.Model {
    // Otras propiedades del modelo...
    // Definición de las asociaciones
    static associate() {
        Asistencia.belongsTo(usuario_model_1.default, { foreignKey: "id_usuario" });
        Asistencia.belongsTo(taller_model_1.default, { foreignKey: "id_taller" });
        Asistencia.belongsTo(servicio_model_1.default, { foreignKey: "id_servicio" });
        Asistencia.belongsTo(tecnicos_model_1.default, { foreignKey: "id_tecnico" });
    }
}
Asistencia.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    costo: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    str_ruta: {
        type: sequelize_1.DataTypes.STRING,
    },
    ubicacion: {
        type: sequelize_1.DataTypes.STRING,
    },
    state_verif: {
        type: sequelize_1.DataTypes.BOOLEAN,
    },
    pago_targeta: {
        type: sequelize_1.DataTypes.BOOLEAN,
    },
    state: {
        type: sequelize_1.DataTypes.BOOLEAN,
    },
    pago: {
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
    id_servicio: {
        type: sequelize_1.DataTypes.INTEGER,
        references: {
            model: servicio_model_1.default,
            key: "id",
        },
    },
    id_tecnico: {
        type: sequelize_1.DataTypes.INTEGER,
        references: {
            model: tecnicos_model_1.default,
            key: "id",
        },
    },
}, {
    sequelize: connection_1.default,
    modelName: "Asistencia",
    tableName: "asistencia",
});
exports.default = Asistencia;
//# sourceMappingURL=asistencia.model.js.map