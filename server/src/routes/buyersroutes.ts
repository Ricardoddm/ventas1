import {Router} from 'express';
import buyersController from '../controllers/buyerscontrollers';

// NOTA: Segun sea el caso, se utilizara un tipo de metodo diferente segun que se quiera hacer
// get:
// post:
// put:
// delete: 

class BuyersRoutes{
    public router: Router= Router();

    constructor(){
        this.config();
    }
   config() {
        //Indica las rutas validas según el metodo programado en el controlador contactsroutes.ts 
        this.router.get('/', buyersController.listBuyers);
        this.router.post('/', buyersController.createBuyers);

        //Estas rutas indican que se requiere un id o cualquier identificador de la venta 
        this.router.put('/:id', buyersController.updateBuyers);
        this.router.delete('/:id', buyersController.deleteBuyers);
    }
}
const buyersRoutes = new BuyersRoutes();

export default buyersRoutes.router;