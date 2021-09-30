import {Request, Response} from 'express';
import db from'../database';

class SalesController{
    public async list (req: Request, res:Response){
       const contactos =await db.query('SELECT * FROM contactos')
        res.json (contactos)
    }
    public async create(req: Request, res: Response){
        await db.query('INSERT INTO contactos set ?',[req.body])
        res.json({message:'creado'})
    }
    public async delete(req:Request, res:Response){
        const {id}=req.params;
        await db.query('DELETE FROM contactos WHERE id_contacto= ?',[id]);
        res.json({Text: 'eliminado'})
    }
    public async update(req:Request, res:Response){
        const {id}=req.params;
        await db.query('UPDATE contactos set ? WHERE id_contacto=? ',[req.body, id]);
        res.json({Text: 'actualizado'});
    }
    public async getOne (req: Request, res:Response){
        const {id}=req.params;
        const contacto=await db.query('SELECT * FROM contactos WHERE id_contacto = ?',[id])
        res.json (contacto)
        console.log(contacto)
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
    
const salesController =new SalesController();
export default salesController;