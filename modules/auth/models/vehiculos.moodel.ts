import { DataTypes, Model } from "sequelize";
import db from "../../../database/connection";
import Usuario from "./usuario.model";

class Vehiculo extends Model {
    public id!: number;
    public placa!: string;
    public anio!: Date;
    public modelo!: string;
    public marca!: string;
    public color!: string;
    public img!: string;
    public state!: boolean;
    public id_usuario!: number; // Llave foránea

    // Otras propiedades del modelo...

    // Definición de las asociaciones
    public static associate() {
        Vehiculo.belongsTo(Usuario, { foreignKey: "id_usuario" });
    }
}

Vehiculo.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        placa: {
            type: DataTypes.STRING,
        },
        modelo: {
            type: DataTypes.STRING,
        },
        marca: {
            type: DataTypes.STRING,
        },
        img: {
            type: DataTypes.STRING,
        },
        anio: {
            type: DataTypes.DATE,
        },
        color: {
            type: DataTypes.INTEGER,
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
        modelName: "Vehiculo",
        tableName: "vehiculo",
    }
);

export default Vehiculo;

