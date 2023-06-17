export interface IEmailSubject {
    subject: string;
    body: string;
    attachments?: Array<string>;
}

export interface IEmailTo {
    name: string;
    email: string;
}

export interface IMessageDTO{
    to: IEmailTo;
    subject: IEmailSubject;
}

export interface IEmailService{
    sendEmail(response: IMessageDTO): void;
}