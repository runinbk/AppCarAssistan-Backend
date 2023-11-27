import jwt, { JwtPayload } from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import User from "../modules/auth/models/usuario.model";

import config from "../server/config";

const key = config.JWT_AUTH || "e$tAcL@v3Es$cr3tA";

interface CustomRequest extends Request {
    user?: User;
}

const validarJWT = async (req: CustomRequest, res: Response, next: NextFunction) => {
    // console.log({req})
    const token = req.header('token');
    if (!token) {
        return res.status(401).json({
            msg: 'No hay token en la petición',
        });
    }

    try {
        const decodedToken = jwt.verify(token, key) as JwtPayload | undefined;
        if (!decodedToken) {
            throw new Error();
        }
        // decodificar token para obtener el id == uid
        const { uid } = decodedToken as { uid: string };
        // Leer el usuario que corresponde al uid
        const user = await User.findByPk(uid);

        if (!user) {
            return res.status(401).json({
                msg: 'Token no válido - usuario no existe en la DB',
            });
        }

        // Verificar si el uid tiene estado true
        if (!user.state) {
            return res.status(401).json({
                msg: 'Token no válido - usuario con estado: false',
            });
        }

        req.user = user;
        next();
    } catch (error) {
        res.status(401).json({
            msg: 'Token no válido',
            error
        });
    }
};

export default validarJWT;
