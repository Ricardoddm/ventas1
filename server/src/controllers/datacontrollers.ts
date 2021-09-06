import {Request, Response} from 'express';
import db from'../database';
class DataController{
    public index(req: Request, res: Response ){
        db.query('DESCRIBE db_ventas' );
        res.json('db_ventas'); 
    }
}
const dataController= new DataController();
export default dataController;