import {Request, Response} from 'express';
import db from'../database';

class SalesController{
    public listSales(req: Request, res: Response ){
        db.query('DESCRIBE ventas');
        //res.json('ventas'); 
        res.json({text:'ventas'});
    }

    public createSale(req: Request, res: Response){
        console.log(req.body);
        db.query('INSERT INTO contacto set ?', [req.body]);
        res.json({text:'Se creo una venta'});
    }

    public updateSale(req: Request, res: Response){
        res.json({text:'Se actulizo una venta existente'});
    }

    public deleteSale(req: Request, res: Response){
        res.json({text:'Se ha eliminado una venta'});
    }
}

const salesController= new SalesController();

export default salesController;