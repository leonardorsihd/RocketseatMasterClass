import { Router } from "express";
import UserController from "./controllers/UserController";

const users = new UserController();
const routes = Router();

routes.get('/users', users.index);
routes.post('/users', users.create);


export default routes;