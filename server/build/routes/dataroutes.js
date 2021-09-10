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
        this.router.get('/', datacontrollers_1.default.index);
    }
}
const dataRoutes = new DataRoutes();
exports.default = dataRoutes.router;
