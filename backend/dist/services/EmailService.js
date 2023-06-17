"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class EmailService {
    sendEmail({ to, subject }) {
        console.log(`Email sent to ${to.name}: ${subject.subject}`);
    }
}
exports.default = EmailService;
