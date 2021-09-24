  
import {Router} from 'express';
<<<<<<< HEAD
import { indexController } from '../controllers/indexcontroller';

class IndexRoutes{
=======
import {indexController } from '../controllers/indexcontroller';
class DataRoutes{
>>>>>>> Pablo
    public router: Router= Router();
    constructor(){
        this.config();
    }
    config(): void{
        this.router.get('/', indexController.index);
    }
}
const dataRoutes =new IndexRoutes();
export default dataRoutes.router;
