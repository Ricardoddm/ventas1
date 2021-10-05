import {Request, Response} from 'express';
import db from'../database';

class SalesController{

    // Metodo que enlista todas las ventas que se tienen guardadas en la tabla de ventas
    public async listSales(req: Request, res: Response ){

        //La consulta se ejecuta solo con un SELECT hacia la tabla que se requiera enlistar
        const sales = await db.query('SELECT * FROM ventas');

        res.json(sales);
    }

    // Metodo que genera un registro en la tabla de ventas
    public async createSale(req: Request, res: Response){
        
        //Se muestra el cuerpo del request JSON
        console.log(req.body);

        //La consulta se aplica con el cuerpo del request JSON despues del signo de interrogacion (?)
        const sales = db.query('INSERT INTO contacto set ?', [req.body]);
        res.json(sales);
    }

    // Metodo que actualiza los campos de un registro mediante su id en la tabla de ventas
    public async updateSale(req: Request, res: Response){
        const { id } = req.params;
        const saleInfo = req.body;

        console.log(id);
        console.log(saleInfo);

        await db.query('UPDATE contacto SET ? WHERE id_contacto = ?', [saleInfo, id]);

        res.json({message: "Se actualizo una venta existente"});
    }

    // Metodo para eliminar un registro completo de la tabla de ventas
    public async deleteSale(req: Request, res: Response){

        //En este metodo solo necesitamos el id de la venta o cualquier cosa que querramos eliminar
        const { id } = req.params;
        
        //Se ejecuta la consulta con el id del registro
        await db.query('DELETE FROM contacto WHERE id_contacto = ?', [id]);
        res.json({text:'Se ha eliminado una venta'});
    }

    // Metodo que enlista todos los consorcios registrados en la tabla de consorcios
    public async listConsortium(req: Request, res: Response){
        const consortium = await db.query('SELECT * FROM consorcios');
        console.log(consortium);
        res.json(consortium);
    }

    // Metodo que realiza un LEFT JOIN para obtener las empresas ligadas al consorcio que el usuario selecciono
    public async listEnterprise(req: Request, res: Response){
        const { id } = req.params;

        const enterprises = await db.query('SELECT e.id_empresa, e.nombre_empresa FROM empresas e LEFT JOIN consorcios c ON e.id_consorcio = c.id_consorcio WHERE e.id_consorcio = ?', [id]);
        res.json(enterprises);
    }

    public async listProducts(req: Request, res: Response){
        const { id } = req.params;

        const products = await db.query('SELECT p.id_producto, p.nombre_producto FROM productos p LEFT JOIN empresas e ON p.id_empresa = e.id_empresa WHERE e.id_empresa = ?', [id]);
        res.json(products); 
    }
}
const salesController =new SalesController();
export default salesController;