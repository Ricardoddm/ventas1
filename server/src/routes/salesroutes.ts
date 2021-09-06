import {Router} from 'express';
import salesController from '../controllers/salescontrollers';

class SalesRoutes{
    public router: Router= Router();

    constructor(){
        this.config();
    }
   config() {
        this.router.get('/', salesController.listSales);
        this.router.post('/', salesController.createSale);
        this.router.put('/:id', salesController.updateSale);
        this.router.delete('/:id', salesController.deleteSale);
    }
}
const salesRoutes =new SalesRoutes();

export default salesRoutes.router;