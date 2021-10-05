import {Request, Response} from 'express';
import db from'../database';

class ProductsController{
    public async listProducts(req: Request, res: Response ){

        //La consulta se ejecuta solo con un SELECT hacia la tabla que se requiera enlistar
        const products = await db.query('SELECT * FROM productos');

        res.json(products);
    }

    public async getProduct(req: Request, res: Response){
        const { id } = req.params;
        const product = await db.query('SELECT * FROM productos WHERE id_producto = ?', [id]);
        console.log(product);
        // Se debe enviar un objeto no un array para que este funcione con los mecanismos de ANGULAR
        res.json(product[0]);
        console.log(product[0]);  
    }

    public async createProduct(req: Request, res: Response){
        //Se muestra el cuerpo del request JSON
        console.log(req.body);

        //La consulta se aplica con el cuerpo del request JSON despues del signo de interrogacion (?)
        const product = db.query('INSERT INTO productos set ?', [req.body]);
        res.json(product);
    }

    public async updateProduct(req: Request, res: Response){
        const { id } = req.params;
        const productInfo = req.body;

        console.log(id);
        console.log(productInfo);

        await db.query('UPDATE productos SET ? WHERE id_productos = ?', [productInfo, id]);

        res.json({message: "Se actualizo un producto existente"});
    }

    public async deleteProduct(req: Request, res: Response){

        //En este metodo solo necesitamos el id de la venta o cualquier cosa que querramos eliminar
        const { id } = req.params;
        
        //Se ejecuta la consulta con el id del registro
        await db.query('DELETE FROM productos WHERE id_producto = ?', [id]);
        res.json({text:'Se ha eliminado un producto'});
    }
}

const productsController = new ProductsController();

export default productsController;