import { DataTypes, Model } from "sequelize";
import db from "../../../database/connection";
import Usuario from "../../auth/models/usuario.model";
import Taller from "./taller.model";

class Tecnicos extends Model {
    public id!: number;
    public sueldo!: number;
    public hora_ini!: string;
    public hora_fin!: string;
    public state!: boolean;
    public id_usuario!: number; // Llave foránea
    public id_taller!: number; // Llave foránea

    // Otras propiedades del modelo...

    // Definición de las asociaciones
    public static associate() {
        Tecnicos.belongsTo(Usuario, { foreignKey: "id_usuario" });
        Tecnicos.belongsTo(Taller, { foreignKey: "id_taller" });
    }
}

Tecnicos.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        sueldo: {
            type: DataTypes.INTEGER,
        },
        hora_ini: {
            type: DataTypes.STRING,
        },
        hora_fin: {
            type: DataTypes.STRING,
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
    },
    {
        sequelize: db,
        modelName: "Tecnicos",
        tableName: "tecnicos",
    }
);

export default Tecnicos;

