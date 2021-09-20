"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const salescontrollers_1 = __importDefault(require("../controllers/salescontrollers"));
class DataRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        //cada metodo se manda a llamar del archivo dataroutes.ts
        this.router.get('/', salescontrollers_1.default.listSales); //anteriormente llamado index y nos da todos los juegoss
        //this.router.get('/:id', dataController.getOne);//para obtener solo un dato
        this.router.post('/', salescontrollers_1.default.createSale);
        this.router.delete('/:id', salescontrollers_1.default.deleteSale);
        this.router.put('/:id', salescontrollers_1.default.updateSale);
    }
}
const dataRoutes = new DataRoutes();
exports.default = dataRoutes.router;
