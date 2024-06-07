import { DecodeToken } from '../../middlewares/checkToken'; 
declare global {
  namespace Express {
    interface Request {
      token?: string;
      user?: DecodeToken;
    }
  }
}
