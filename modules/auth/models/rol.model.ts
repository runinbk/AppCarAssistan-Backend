
import { DataTypes, Model } from "sequelize";
import db from "../../../database/connection";

class Rol extends Model {

    public id!: number;
    public rol!: string;
    public descripcion!: string;
    public state!: boolean;

    // Otras propiedades del modelo

}

Rol.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        rol: {
            type: DataTypes.STRING,
        },
        descripcion: {
            type: DataTypes.TEXT
        },
        state: {
            type: DataTypes.BOOLEAN
        }
    },
    {
        sequelize: db,
        modelName: "Rol",
        tableName: "rol",
    }
);

export default Rol;