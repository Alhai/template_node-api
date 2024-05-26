import { DecodeToken } from '../../middlewares/checkToken'; // Assurez-vous que le chemin est correct

declare global {
  namespace Express {
    interface Request {
      token?: string;
      user?: DecodeToken;
    }
  }
}
