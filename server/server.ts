import express, { Application } from "express";
import cors from "cors";
const bodyParser = require('body-parser');

import config from "./config";

import db from "../database/connection";

// import authRoutes from "../routes/auth.routes";
import rolRoutes from "../modules/auth/routers/rol.routes";
import usuarioRoutes from "../modules/auth/routers/usuario.routes";
import vehiculoRoutes from "../modules/auth/routers/vehiculo.routes";
import targetaRoutes from "../modules/auth/routers/targeta.routes";
import tallerRoutes from "../modules/jobs/routers/taller.routes";
import tecnicosRoutes from "../modules/jobs/routers/tecnicos.routes";
import servicioRoutes from "../modules/jobs/routers/servicio.routes";
import asistenciaRoutes from "../modules/services/routers/asistencia.routes";
import imgRoutes from "../modules/services/routers/img.routes";

export class Server {
    private app: Application;
    private port: string | number | undefined;

    private apiPaths = {
        // auth: "/api/auth",
        rol: "/api/rol",
        usuario: "/api/usuario",
        vehiculo: "/api/vehiculo",
        targeta: "/api/targeta",
        taller: "/api/taller",
        tecnicos: "/api/tecnicos",
        servicio: "/api/servicio",
        asistencia: "/api/asistencia",
        img: "/api/img",
    };

    constructor() {
        this.app = express();
        this.port = config.PORT || "8000";

        //    Metodos iniciales
        this.dbConnection();
        this.middlewares();
        this.routes();
    }

    async dbConnection() {
        try {
            await db.authenticate();
            console.log("Database online");
        } catch (error) {
            console.log("Database ofline - " + error);
        }
    }

    middlewares() {
        // CORS
        this.app.use(cors());

        // LECTURA DEL BODY
        this.app.use(express.json());

        // CARPETA PUBLICA
        this.app.use(express.static("public"));

        this.app.use(bodyParser.json());
    }

    routes() {
        // this.app.use(this.apiPaths.auth, authRoutes);
        this.app.use(this.apiPaths.rol, rolRoutes);
        this.app.use(this.apiPaths.usuario, usuarioRoutes);
        this.app.use(this.apiPaths.vehiculo, vehiculoRoutes);
        this.app.use(this.apiPaths.targeta, targetaRoutes);
        this.app.use(this.apiPaths.taller, tallerRoutes);
        this.app.use(this.apiPaths.tecnicos, tecnicosRoutes);
        this.app.use(this.apiPaths.servicio, servicioRoutes);
        this.app.use(this.apiPaths.asistencia, asistenciaRoutes);
        this.app.use(this.apiPaths.img, imgRoutes);
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log("Servidor corriendo en le puerto : " + this.port);
        });
    }
}
