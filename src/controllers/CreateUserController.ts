import { Request, Response } from 'express';

class CreateUserController {
    handle(request: Request, response: Response) {
        return response.json([
            {
                nome: 'Jair'
            },
            {
                nome: 'Joao'
            }
        ])
    }
}

export { CreateUserController }