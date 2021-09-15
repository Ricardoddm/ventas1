import {Router} from 'express';
import contactsController from '../controllers/contactscontrollers';

// NOTA: Segun sea el caso, se utilizara un tipo de metodo diferente segun que se quiera hacer
// get:
// post:
// put:
// delete: 

class ContactsRoutes{
    public router: Router= Router();

    constructor(){
        this.config();
    }
   config() {
        //Indica las rutas validas según el metodo programado en el controlador salesroutes.ts 
        this.router.get('/', contactsController.listContacts);
        this.router.post('/', contactsController.createContact);

        //Estas rutas indican que se requiere un id o cualquier identificador de la venta 
        this.router.put('/:id', contactsController.updateContact);
        this.router.delete('/:id', contactsController.deleteContact);
    }
}
const contactsRoutes = new ContactsRoutes();

export default contactsRoutes.router;