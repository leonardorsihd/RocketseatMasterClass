import { Request, Response } from "express";
import axios, {AxiosResponse} from "axios";
import EmailService from "../services/EmailService";

class UserController {
    // name
    // email
    constructor() {
    }

    async index(req: Request, res: Response) {
        await axios.get('https://reqres.in/api/users?page=1')
        .then((response: AxiosResponse) => res.json(response.data)).catch((err) => {
            res.json(err);
        });
    }

    async create(req: Request, res: Response) {
        const emailService = new EmailService();
        emailService.sendEmail({to:{
            name: 'Leonardo Souza Nunes',
            email: 'leonardo@habeasdata.com.br',
        }, subject: {
            subject: 'Teste de envio de email',
            body: 'Teste de envio de email para a API',
            attachments: ['file.py', 'file.js', 'file.ts']
        }});
        res.send('Email enviado');
    }
}

export default UserController;