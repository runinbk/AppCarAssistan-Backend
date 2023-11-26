import { DataTypes, Model } from "sequelize";
import db from "../../../database/connection";
import Taller from "./taller.model";

class Servicio extends Model {
    public id!: number;
    public precio!: number;
    public servicio!: string;
    public descripcion!: string;
    public state!: boolean;
    public id_taller!: number; // Llave foránea

    // Otras propiedades del modelo...

    // Definición de las asociaciones
    public static associate() {
        Servicio.belongsTo(Taller, { foreignKey: "id_taller" });
    }
}

Servicio.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        precio: {
            type: DataTypes.INTEGER,
        },
        servicio: {
            type: DataTypes.STRING,
        },
        decripcion: {
            type: DataTypes.STRING,
        },
        state: {
            type: DataTypes.BOOLEAN,
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
        modelName: "Servicio",
        tableName: "servicio",
    }
);

export default Servicio;

