import { DataTypes, Model } from "sequelize";
import db from "../../../database/connection";
import Asistencia from "../models/asistencia.model";

class Img extends Model {
    public id!: number;
    public img!: string;
    public state!: boolean;
    public id_asistencia!: number; // Llave foránea

    // Otras propiedades del modelo...

    // Definición de las asociaciones
    public static associate() {
        Img.belongsTo(Asistencia, { foreignKey: "id_asistencia" });
    }
}

Img.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        img: {
            type: DataTypes.STRING,
        },
        state: {
            type: DataTypes.BOOLEAN,
        },
        id_asistencia: {
            type: DataTypes.INTEGER,
            references: {
                model: Asistencia,
                key: "id",
            },
        },
    },
    {
        sequelize: db,
        modelName: "Img",
        tableName: "img",
    }
);

export default Img;

