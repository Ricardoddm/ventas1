import {Router} from 'express';
import vendorsController from '../controllers/vendorscontrollers';

// NOTA: Segun sea el caso, se utilizara un tipo de metodo diferente segun que se quiera hacer
// get:
// post:
// put:
// delete: 

class VendorsRoutes{
    public router: Router= Router();

    constructor(){
        this.config();
    }
   config() {
        //Indica las rutas validas según el metodo programado en el controlador vendorsroutes.ts 
        this.router.get('/', vendorsController.listVendors);
        this.router.post('/', vendorsController.createVendor);

        //Estas rutas indican que se requiere un id o cualquier identificador de la venta 
        this.router.get('/:id', vendorsController.getVendor);
        this.router.put('/:id', vendorsController.updateVendor);
        this.router.delete('/:id', vendorsController.deleteVendor);
    }
}
const vendorsRoutes = new VendorsRoutes();

export default vendorsRoutes.router;