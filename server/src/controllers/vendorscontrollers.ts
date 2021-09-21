import {Request, Response} from 'express';
import db from'../database';

class VendorsController{
    public async listBuyers(req: Request, res: Response ){

        //La consulta se ejecuta solo con un SELECT hacia la tabla que se requiera enlistar
        const sales = await db.query('SELECT * FROM comprador');

        res.json(sales);
    }

    public async createContact(req: Request, res: Response){
        //Se muestra el cuerpo del request JSON
        console.log(req.body);

        //La consulta se aplica con el cuerpo del request JSON despues del signo de interrogacion (?)
        const sales = db.query('INSERT INTO contacto set ?', [req.body]);
        res.json(sales);
    }

    public async updateContact(req: Request, res: Response){
        const { id } = req.params;
        const saleInfo = req.body;

        console.log(id);
        console.log(saleInfo);

        await db.query('UPDATE contacto SET ? WHERE id_contacto = ?', [saleInfo, id]);

        res.json({message: "Se actualizo una venta existente"});
    }

    public async deleteContact(req: Request, res: Response){

        //En este metodo solo necesitamos el id de la venta o cualquier cosa que querramos eliminar
        const { id } = req.params;
        
        //Se ejecuta la consulta con el id del registro
        await db.query('DELETE FROM contacto WHERE id_contacto = ?', [id]);
        res.json({text:'Se ha eliminado una venta'});
    }
}

const vendorsController = new VendorsController();

export default vendorsController;