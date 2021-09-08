"use strict";
importar;
{
    Enrutador;
}
desde;
'express';
importar;
{
    indexController;
}
desde;
'../controllers/indexcontroller';
class IndexRoutes {
    constructor() {
        this.público = Enrutador();
        esto.config();
    }
    config() {
        esto.enrutador.obtener('/', indexController.index);
    }
}
const dataRoutes = new IndexRoutes();
exportar;
rutas;
de;
datos;
predeterminadas.enrutador;
