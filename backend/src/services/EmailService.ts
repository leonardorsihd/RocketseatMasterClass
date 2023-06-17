import { IMessageDTO, IEmailService } from "../interfaces/IEmail";

class EmailService implements IEmailService {
    sendEmail({to, subject}: IMessageDTO) {
        console.log(`Email sent to ${to.name}: ${subject.subject}`);
    }
}

export default EmailService;