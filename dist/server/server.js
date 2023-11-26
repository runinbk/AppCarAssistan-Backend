"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const bodyParser = require('body-parser');
const config_1 = __importDefault(require("./config"));
const connection_1 = __importDefault(require("../database/connection"));
// import authRoutes from "../routes/auth.routes";
const rol_routes_1 = __importDefault(require("../modules/auth/routers/rol.routes"));
const usuario_routes_1 = __importDefault(require("../modules/auth/routers/usuario.routes"));
const vehiculo_routes_1 = __importDefault(require("../modules/auth/routers/vehiculo.routes"));
const targeta_routes_1 = __importDefault(require("../modules/auth/routers/targeta.routes"));
const taller_routes_1 = __importDefault(require("../modules/jobs/routers/taller.routes"));
const tecnicos_routes_1 = __importDefault(require("../modules/jobs/routers/tecnicos.routes"));
const servicio_routes_1 = __importDefault(require("../modules/jobs/routers/servicio.routes"));
const asistencia_routes_1 = __importDefault(require("../modules/services/routers/asistencia.routes"));
const img_routes_1 = __importDefault(require("../modules/services/routers/img.routes"));
class Server {
    constructor() {
        this.apiPaths = {
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
        this.app = (0, express_1.default)();
        this.port = config_1.default.PORT || "8000";
        //    Metodos iniciales
        this.dbConnection();
        this.middlewares();
        this.routes();
    }
    dbConnection() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield connection_1.default.authenticate();
                console.log("Database online");
            }
            catch (error) {
                console.log("Database ofline - " + error);
            }
        });
    }
    middlewares() {
        // CORS
        this.app.use((0, cors_1.default)());
        // LECTURA DEL BODY
        this.app.use(express_1.default.json());
        // CARPETA PUBLICA
        this.app.use(express_1.default.static("public"));
        this.app.use(bodyParser.json());
    }
    routes() {
        // this.app.use(this.apiPaths.auth, authRoutes);
        this.app.use(this.apiPaths.rol, rol_routes_1.default);
        this.app.use(this.apiPaths.usuario, usuario_routes_1.default);
        this.app.use(this.apiPaths.vehiculo, vehiculo_routes_1.default);
        this.app.use(this.apiPaths.targeta, targeta_routes_1.default);
        this.app.use(this.apiPaths.taller, taller_routes_1.default);
        this.app.use(this.apiPaths.tecnicos, tecnicos_routes_1.default);
        this.app.use(this.apiPaths.servicio, servicio_routes_1.default);
        this.app.use(this.apiPaths.asistencia, asistencia_routes_1.default);
        this.app.use(this.apiPaths.img, img_routes_1.default);
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log("Servidor corriendo en le puerto : " + this.port);
        });
    }
}
exports.Server = Server;
//# sourceMappingURL=server.js.map