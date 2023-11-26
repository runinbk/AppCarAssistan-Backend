import { DataTypes, Model } from "sequelize";
import db from "../../../database/connection";
import Usuario from "./usuario.model";

class Targeta extends Model {
    public id!: number;
    public numero!: number;
    public fecha_ven!: Date;
    public cvs!: string;
    public state!: boolean;
    public id_usuario!: number; // Llave foránea

    // Otras propiedades del modelo...

    // Definición de las asociaciones
    public static associate() {
        Targeta.belongsTo(Usuario, { foreignKey: "id_usuario" });
    }
}

Targeta.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        numero: {
            type: DataTypes.INTEGER,
        },
        fecha_ven: {
            type: DataTypes.DATE,
        },
        cvs: {
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
    },
    {
        sequelize: db,
        modelName: "Targeta",
        tableName: "targeta",
    }
);

export default Targeta;

