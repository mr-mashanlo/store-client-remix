import { AuthController } from './controller';
import { AuthService } from './service';

export const authController = new AuthController( new AuthService() );