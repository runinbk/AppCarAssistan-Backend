import { DataTypes, Model, Sequelize } from "sequelize";
import db from "../../../database/connection";
import Usuario from "../../auth/models/usuario.model";

class Taller extends Model {
    public id!: number;
    public nombre!: string;
    public ubicacion!: string;
    public state!: boolean;
    public id_usuario!: number; // Llave foránea

    // Otras propiedades del modelo...

    // Definición de las asociaciones
    public static associate() {
        Taller.belongsTo(Usuario, { foreignKey: "id_usuario" });
    }
}

Taller.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nombre: {
            type: DataTypes.STRING,
        },
        ubicacion: {
            type: DataTypes.STRING
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
    },
    {
        sequelize: db,
        modelName: "Taller",
        tableName: "taller",
    }
);

export default Taller;
