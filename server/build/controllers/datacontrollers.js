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
const database_1 = __importDefault(require("../database"));
class DataController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            // res.json('listando datos'); 
            const ventas = yield database_1.default.query('SELECT * FROM ventas');
            res.json(ventas);
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //res.json({texto: 'dato ' + req.params.id});
            const { id } = req.params;
            const ventas = yield database_1.default.query('SELECT * FROM ventas WHERE id= ?', [id]); //devuelve el id seleccionado
            if (ventas.lenght > 0) { //si el nombre de la venta es mayor a 0, lo va a mostrar
                return res.json(ventas[0]);
            }
            res.status(404).json({ text: "No existe" }); //si no se encontro el nombre de la venta muestra un error
            console.log(ventas); //manda a llamar la consulta de arriba y lo devuelve por consola
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO ventas SET ?', [req.body]); //req.body lo llama de la pagina en donde se ingresan los datos
            res.json({ message: 'creado' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params; //obtiene el id de la venta
            yield database_1.default.query('DELETE FROM ventas WHERE id =?', [id]); //busca el id en la base de datos
            res.json({ message: 'Eliminado' }); //manda mensaje de eliminado
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE ventas set ? WHERE id = ? ', [req.body, id]); // actualiza los datos con el id siguiente
            res.json({ message: 'Actualizado' }); //manda mensaje de actualizado
        });
    }
}
const dataController = new DataController();
exports.default = dataController;

