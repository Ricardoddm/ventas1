import {Request, Response} from 'express';
import db from'../database';

class ContactsController{
    public async listContacts(req: Request, res: Response ): Promise<void>{

        //La consulta se ejecuta solo con un SELECT hacia la tabla que se requiera enlistar
        const contact = await db.query('SELECT * FROM contactos');

        res.json(contact);
    }

    public async getContact(req: Request, res: Response): Promise<any>{
        const { id } = req.params;
        const contact = await db.query('SELECT * FROM contactos WHERE id_contacto = ?', [id]);
        console.log(contact);
        // Se debe enviar un objeto no un array para que este funcione con los mecanismos de ANGULAR
        res.json(contact[0]);
        console.log(contact[0]);        
    }

    public async createContact(req: Request, res: Response): Promise<void>{
        //Se muestra el cuerpo del request JSON
        console.log(req.body);

        //La consulta se aplica con el cuerpo del request JSON despues del signo de interrogacion (?)
        const contact = db.query('INSERT INTO contactos set ?', [req.body]);
        res.json(contact);
    }

    public async updateContact(req: Request, res: Response): Promise<void>{
        const { id } = req.params;
        const contactInfo = req.body;

        console.log(id);
        console.log(contactInfo);

        await db.query('UPDATE contactos SET ? WHERE id_contacto = ?', [contactInfo, id]);

        res.json({message: "Se actualizo una venta existente"});
    }

    public async deleteContact(req: Request, res: Response): Promise<void>{

        //En este metodo solo necesitamos el id de la venta o cualquier cosa que querramos eliminar
        const { id } = req.params;
        
        //Se ejecuta la consulta con el id del registro
        await db.query('DELETE FROM contactos WHERE id_contacto = ?', [id]);
        res.json({text:'Se ha eliminado una venta'});
    }
}

const contactsController = new ContactsController();

export default contactsController;