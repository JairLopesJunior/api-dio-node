import { Router, Request, Response } from 'express';
import { CreateUserController } from './controllers/CreateUserController';

const router = Router();
const createUserController = new CreateUserController();

router.get('/', (request: Request, response: Response) => {

    // TODAS AS FUNCIONALIDADES

    return response.json({mensagem: 'Bem vindo a nossa API'});
});

router.post('/usuarios', createUserController.handle);

export { router };