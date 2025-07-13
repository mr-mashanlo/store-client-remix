import { AuthController } from './controller';
import { AuthService } from './service';

const authService = new AuthService();

export const authController = new AuthController( authService );