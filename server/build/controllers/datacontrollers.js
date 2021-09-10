"use strict";
/* import {Request, Response} from 'express';
import db from'../database';
class DataController{
    public async list(req: Request, res: Response ){//este era el metodo index pero cambio de nombre
       // res.json('listando datos');
       const ventas =await db.query ('SELECT * FROM ventas');
       res.json(ventas);
    }
    public async getOne(req:Request, res:Response){
        //res.json({texto: 'dato ' + req.params.id});
        const {id}= req.params;
        const ventas = await db.query('SELECT * FROM ventas WHERE id= ?', [id]);//devuelve el id seleccionado
        res.json(ventas);
    
        //console.log(ventas);//manda a llamar la consulta de arriba y lo devuelve por consola
        
    }
    public async create (req: Request, res: Response) {//async nos funciona con await para decir que es un metodo asincrono
        await db.query('INSERT INTO ventas SET ?', [req.body]);//req.body lo llama de la pagina en donde se ingresan los datos
        res.json({message: 'creado'});

    }
    public async delete(req: Request, res: Response){
        const {id} = req.params; //obtiene el id de la venta
        await db.query('DELETE FROM ventas WHERE id =?', [id])//busca el id en la base de datos
        res.json({message: 'Eliminado'});//manda mensaje de eliminado
    }
    public async update(req: Request, res: Response){
        const {id}= req.params;
        await db.query('UPDATE ventas set ? WHERE id = ? ', [req.body, id]);// actualiza los datos con el id siguiente
        res.json({message: 'Actualizado'});//manda mensaje de actualizado
    }
}
const dataController= new DataController();
export default dataController;
*/ 
