import express, {Request, Response} from 'express';

const server = express();

server.get('/', (request: Request, response: Response) => {

    // TODAS AS FUNCIONALIDADES

    return response.json({mensagem: 'Bem vindo a nossa API'});
});

server.listen(5000, () => {
    console.log('Servidor on na porta 5000');
});