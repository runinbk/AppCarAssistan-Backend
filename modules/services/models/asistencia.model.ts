import { DataTypes, Model, Sequelize } from "sequelize";
import db from "../../../database/connection";
import Usuario from "../../auth/models/usuario.model";
import Taller from "../../jobs/models/taller.model";
import Servicio from "../../jobs/models/servicio.model";
import Tecnico from "../../jobs/models/tecnicos.model";

class Asistencia extends Model {
    public id!: number;
    public id_usuario!: number; // Llave foránea
    public id_taller!: number; // Llave foránea
    public id_servicio!: number; // Llave foránea
    public id_tecnico!: number; // Llave foránea
    public ubicacion!: string;
    public str_ruta!: string;
    public costo!: number;
    public pago_targeta!: boolean;
    public state_verif!: boolean;
    public state!: boolean;

    // Otras propiedades del modelo...

    // Definición de las asociaciones
    public static associate() {
        Asistencia.belongsTo(Usuario, { foreignKey: "id_usuario" });
        Asistencia.belongsTo(Taller, { foreignKey: "id_taller" });
        Asistencia.belongsTo(Servicio, { foreignKey: "id_servicio" });
        Asistencia.belongsTo(Tecnico, { foreignKey: "id_tecnico" });
    }
}

Asistencia.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        costo: {
            type: DataTypes.INTEGER,
        },
        str_ruta: {
            type: DataTypes.STRING,
        },
        ubicacion: {
            type: DataTypes.STRING,
        },
        state_verif: {
            type: DataTypes.BOOLEAN,
        },
        pago_targeta: {
            type: DataTypes.BOOLEAN,
        },
        state: {
            type: DataTypes.BOOLEAN,
        },
        id_usuario: {
            type: DataTypes.INTEGER,
            references: {
                model: Usuario,
                key: "id",
            },
        },
        id_taller: {
            type: DataTypes.INTEGER,
            references: {
                model: Taller,
                key: "id",
            },
        },
        id_servicio: {
            type: DataTypes.INTEGER,
            references: {
                model: Servicio,
                key: "id",
            },
        },
        id_tecnico: {
            type: DataTypes.INTEGER,
            references: {
                model: Tecnico,
                key: "id",
            },
        },
    },
    {
        sequelize: db,
        modelName: "Asistencia",
        tableName: "asistencia",
    }
);

export default Asistencia;

