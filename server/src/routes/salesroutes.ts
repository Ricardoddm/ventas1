import {Router} from 'express';
import salesController from '../controllers/salescontrollers';

// NOTA: Segun sea el caso, se utilizara un tipo de metodo diferente segun que se quiera hacer
// get:
// post:
// put:
// delete: 

class SalesRoutes{
    public router: Router= Router();

    constructor(){
        this.config();
    }
   config() {
        //Indica las rutas validas según el metodo programado en el controlador salesroutes.ts 
        this.router.get('/', salesController.listSales);
        this.router.post('/', salesController.createSale);

        //Estas rutas indican que se requiere un id o cualquier identificador de la venta 
        this.router.put('/:id', salesController.updateSale);
        this.router.delete('/:id', salesController.deleteSale);
    }
}
const salesRoutes = new SalesRoutes();

export default salesRoutes.router;