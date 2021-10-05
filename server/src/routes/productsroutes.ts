import {Router} from 'express';
import productsController from '../controllers/productscontrollers';

// NOTA: Segun sea el caso, se utilizara un tipo de metodo diferente segun que se quiera hacer
// get:
// post:
// put:
// delete: 

class ProductsRoutes{
    public router: Router= Router();

    constructor(){
        this.config();
    }
   config() {
        //Indica las rutas validas según el metodo programado en el controlador salesroutes.ts 
        this.router.get('/', productsController.listProducts);
        this.router.post('/', productsController.createProduct);

        //Estas rutas indican que se requiere un id o cualquier identificador de la venta 
        this.router.put('/:id', productsController.updateProduct);
        this.router.delete('/:id', productsController.deleteProduct);
        this.router.get('/:id', productsController.getProduct);
    }
}
const productsRoutes = new ProductsRoutes();

export default productsRoutes.router;