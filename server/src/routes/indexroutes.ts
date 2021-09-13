import {Router} from 'express';
import {indexController } from '../controllers/indexcontroller';
class DataRoutes{
    public router: Router= Router();
    constructor(){
        this.config();
    }
    config(): void{
        this.router.get('/', indexController.index);
    }
}
const dataRoutes =new DataRoutes();
export default dataRoutes.router;