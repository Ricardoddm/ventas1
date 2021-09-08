"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const datacontrollers_1 = __importDefault(require("../controllers/datacontrollers"));
class DataRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        //cada metodo se manda a llamar del archivo dataroutes.ts
        this.router.get('/', datacontrollers_1.default.list); //anteriormente llamado index y nos da todos los juegoss
        this.router.get('/:id', datacontrollers_1.default.getOne); //para obtener solo un dato
        this.router.post('/', datacontrollers_1.default.create);
        this.router.delete('/:id', datacontrollers_1.default.delete);
        this.router.put('/:id', datacontrollers_1.default.update);
    }
}
const dataRoutes = new DataRoutes();
exports.default = dataRoutes.router;


