import {Request, Response} from 'express';
import db from'../database';

class SalesController{
    public async listSales(req: Request, res: Response ){

        //La consulta se ejecuta solo con un SELECT hacia la tabla que se requiera enlistar
        const sales = await db.query('SELECT * FROM ventas');

        res.json(sales);
    }

    public async createSale(req: Request, res: Response){
        //Se muestra el cuerpo del request JSON
        console.log(req.body);

        //La consulta se aplica con el cuerpo del request JSON despues del signo de interrogacion (?)
        const sales = db.query('INSERT INTO contacto set ?', [req.body]);
        res.json(sales);
    }

    public async updateSale(req: Request, res: Response){
        const { id } = req.params;
        const saleInfo = req.body;

        console.log(id);
        console.log(saleInfo);

        await db.query('UPDATE contacto SET ? WHERE id_contacto = ?', [saleInfo, id]);

        res.json({message: "Se actualizo una venta existente"});
    }

    public async deleteSale(req: Request, res: Response){

        //En este metodo solo necesitamos el id de la venta o cualquier cosa que querramos eliminar
        const { id } = req.params;
        
        //Se ejecuta la consulta con el id del registro
        await db.query('DELETE FROM contacto WHERE id_contacto = ?', [id]);
        res.json({text:'Se ha eliminado una venta'});
    }

    public async listConsortium(req: Request, res: Response){
        const consortium = await db.query('SELECT * FROM consorcios');
        console.log(consortium);
        res.json(consortium);
    }

    public async listEnterprise(req: Request, res: Response){
        const { id } = req.params;

        const enterprises = await db.query('SELECT e.nombre_empresa, c.nombre_consorcio FROM empresas e LEFT JOIN consorcios c ON e.id_consorcio = c.id_consorcio WHERE e.id_empresa = ?', [id]);
        res.json(enterprises);
    }
}

const salesController = new SalesController();

export default salesController;