"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
//import dataController from './controllers/dataController';
class DataRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        //this.router.get('/', dataController.index);
    }
}
const dataRoutes = new DataRoutes();
exports.default = dataRoutes.router;
