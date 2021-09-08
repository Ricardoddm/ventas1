import {Router} from 'express';
import dataController from '../controllers/datacontrollers';
class DataRoutes{
    public router: Router= Router();
    constructor(){
        this.config();
    }
   config(): void{//metodos para que la pagina reaccione
    //cada metodo se manda a llamar del archivo dataroutes.ts
        this.router.get('/', dataController.list);//anteriormente llamado index y nos da todos los juegoss
        this.router.get('/:id', dataController.getOne);//para obtener solo un dato
        this.router.post('/', dataController.create);
        this.router.delete('/:id', dataController.delete);
        this.router.put('/:id', dataController.update);
    }
}
const dataRoutes =new DataRoutes();
export default dataRoutes.router;