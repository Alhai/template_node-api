import { NextFunction, Request, Response } from 'express';

import jwt from 'jsonwebtoken';

export interface DecodeToken {
    id: string;
    username: string;
    email: string;
    iat: number;
    exp: number;
}

export async function checkToken(req: Request, res: Response, next: NextFunction) {
    const fullToken = req.headers.authorization;

    if (!fullToken) {
        return res.status(401).send("No token provided");
    }

    const [typeToken, token] = fullToken.split(" ");
    if (typeToken !== "Bearer") {
        return res.status(401).send("Invalid token type");
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET!) as DecodeToken;
        req.token = token;
        req.user = decoded;
        next();
    } catch (error) {
        console.error('Error verifying token:', error);
        return res.status(401).send("Invalid token");
    }
}
