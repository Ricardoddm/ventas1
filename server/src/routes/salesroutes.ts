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
        this.router.get('/', salesController.list);
        this.router.get('/:id', salesController.getOne);
        this.router.post('/', salesController.create);
        this.router.delete('/:id', salesController.delete);
        this.router.put('/:id', salesController.update);
        
    }
}
const salesRoutes = new SalesRoutes();

export default salesRoutes.router;