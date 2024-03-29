import {Router} from 'express';
import { indexController } from '../controllers/indexcontroller';

class IndexRoutes{
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
