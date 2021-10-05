import {Request, Response} from 'express';
import db from'../database';

class VendorsController{
    public async listVendors(req: Request, res: Response ){

        //La consulta se ejecuta solo con un SELECT hacia la tabla que se requiera enlistar
        const vendor = await db.query('SELECT * FROM vendedores');

        res.json(vendor);
    }

    public async getVendor(req: Request, res: Response): Promise<any>{
        const { id } = req.params;
        const vendor = await db.query('SELECT * FROM vendedores WHERE id_vendedor = ?', [id]);
        console.log(vendor);
        // Se debe enviar un objeto no un array para que este funcione con los mecanismos de ANGULAR
        res.json(vendor[0]);
        console.log(vendor[0]);        
    }

    public async createVendor(req: Request, res: Response){
        //Se muestra el cuerpo del request JSON
        console.log(req.body);

        //La consulta se aplica con el cuerpo del request JSON despues del signo de interrogacion (?)
        const vendor = db.query('INSERT INTO vendedores set ?', [req.body]);
        res.json(vendor);
    }

    public async updateVendor(req: Request, res: Response){
        const { id } = req.params;
        const vendorInfo = req.body;

        console.log(id);
        console.log(vendorInfo);

        await db.query('UPDATE vendedores SET ? WHERE id_vendedor = ?', [vendorInfo, id]);

        res.json({message: "Se actualizo la información del vendedor"});
    }

    public async deleteVendor(req: Request, res: Response){

        //En este metodo solo necesitamos el id de la venta o cualquier cosa que querramos eliminar
        const { id } = req.params;
        
        //Se ejecuta la consulta con el id del registro
        await db.query('DELETE FROM vendedores WHERE id_vendedor = ?', [id]);
        res.json({text:'Se ha eliminado al vendedor'});
    }
}

const vendorsController = new VendorsController();

export default vendorsController;