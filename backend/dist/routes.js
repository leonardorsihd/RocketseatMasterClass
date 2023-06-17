"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UserController_1 = __importDefault(require("./controllers/UserController"));
const users = new UserController_1.default();
const routes = (0, express_1.Router)();
routes.get('/users', users.index);
routes.post('/users', users.create);
exports.default = routes;
