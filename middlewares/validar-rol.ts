import { Request, Response, NextFunction } from 'express';
import User from "../modules/auth/models/usuario.model";
import Rol from "../modules/auth/models/rol.model";
import { Identifier } from 'sequelize';

interface CustomRequest extends Request {
    user?: User;
    // user?: {
    //   id_rol?: Identifier;
    //   rol?: string;
    // };
}

const isRol = async (id_rol: Identifier | undefined) => {
    if (id_rol) {
        const rol = await Rol.findByPk(id_rol);
        if (rol) {
            return rol.rol;
        }
    }
    return null;
};


const isAdminRole = async (req: CustomRequest, res: Response, next: NextFunction) => {
    if (!req.user) {
        return res.status(500).json({
            msg: 'Se quiere validar el token primero antes de verificar el role',
        });
    }

    const { id_rol } = req.user;
    if (!id_rol) {
        return res.status(500).json({
            msg: 'Se quiere verificar el id_rol',
        });
    }

    // Obtener el rol de ese id
    const rol = await isRol(id_rol);

    if (rol !== 'ADMIN') {
        return res.status(401).json({
            msg: 'No tienes permisos para ejecutar esta operación',
        });
    }

    next();
};

const isUserRole = async (req: CustomRequest, res: Response, next: NextFunction) => {
    if (!req.user) {
        return res.status(500).json({
            msg: 'Se quiere validar el token primero antes de verificar el role',
        });
    }

    const { id_rol } = req.user;
    if (!id_rol) {
        return res.status(500).json({
            msg: 'Se quiere verificar el id_rol',
        });
    }

    // Obtener el rol de ese id
    const rol = await isRol(id_rol);

    if (rol !== 'USUARIO') {
        return res.status(401).json({
            msg: 'No tienes permisos para ejecutar esta operación',
        });
    }

    next();
};

const haveRole = (...roles: string[]) => {
    return (req: CustomRequest, res: Response, next: NextFunction) => {
        if (!req.user) {
            return res.status(500).json({
                msg: 'Se quiere verificar el role sin validar el token primero',
            });
        }
        if (!roles.includes('ADMIN_ROLE')) {
            return res.status(401).json({
                msg: `El servicio requiere uno de estos roles: ${roles}`,
            });
        }
        next();
    };
};

export { isAdminRole, haveRole, isUserRole };
