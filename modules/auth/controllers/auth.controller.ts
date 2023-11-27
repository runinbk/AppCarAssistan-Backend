import { Request, Response } from 'express';
import bcrypt from 'bcrypt';

import Usuario from '../models/usuario.model';
import { JWTgenerate } from '../../../helpers/jwt-generate';

const login = async (req: Request, res: Response): Promise<void> => {
    const { correo, password } = req.body;

    try {
        // Verificar si el email existe
        const user = await Usuario.findOne({
            where: {
                correo: correo
            }
        });

        // const user = await Usuario.findOne({ correo });
        if (!user) {
            res.status(400).json({
                msg: 'Usuario / Password no son correctos - correo',
            });
            return;
        }

        // Si el usuario esta activo
        if (!user.state) {
            res.status(400).json({
                msg: 'Usuario / Password no son correctos - estado: false',
            });
            return;
        }

        // Verificar la contraseña
        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) {
            res.status(400).json({
                msg: 'Usuario / Password no son correctos - password',
            });
            return;
        }

        // Generar en JWT
        const token = await JWTgenerate(user.id.toString());
        res.json({
            user,
            token,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador',
        });
    }
};

export {
    login,
};


