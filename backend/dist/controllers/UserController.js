"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const EmailService_1 = __importDefault(require("../services/EmailService"));
class UserController {
    // name
    // email
    constructor() {
    }
    index(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield axios_1.default.get('https://randomuser.me/api/?results=10')
                .then((response) => res.json(response.data)).catch((err) => {
                res.json(err);
            });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const emailService = new EmailService_1.default();
            emailService.sendEmail({ to: {
                    name: 'Leonardo Souza Nunes',
                    email: 'leonardo@habeasdata.com.br',
                }, subject: {
                    subject: 'Teste de envio de email',
                    body: 'Teste de envio de email para a API',
                    attachments: ['file.py', 'file.js', 'file.ts']
                } });
            res.send('Email enviado');
        });
    }
}
exports.default = UserController;
