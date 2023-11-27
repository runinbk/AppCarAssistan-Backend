import jwt from 'jsonwebtoken';
import config from "../server/config";

const key = config.JWT_AUTH || "e$tAcL@v3Es$cr3tA";

const JWTgenerate = (uid: string = ''): Promise<string> => {
    return new Promise((resolve, reject) => {
        const payload = { uid };

        jwt.sign(
            payload,
            key as string,
            {
                expiresIn: '48h',
            },
            (err, token) => {
                if (err) {
                    console.log(err);
                    reject('No se pudo generar el token');
                } else {
                    if (token) {
                        resolve(token);
                    } else {
                        reject('El token es indefinido');
                    }
                }
            }
        );
    });
};

export {
    JWTgenerate,
};
