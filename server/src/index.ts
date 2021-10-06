import express, { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';

import indexRoutes from './routes/indexroutes';
import salesRoutes from './routes/salesroutes';
import contactsRoutes from './routes/contactsroutes';
import buyersRoutes from './routes/buyersroutes';
import productsRoutes from './routes/productsroutes';

import productsController from './controllers/productscontrollers';
import productsroutes from './routes/productsroutes';

class Server {

    public app: Application;
    
    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }

    config(): void {
        this.app.set('port', process.env.PORT || 3000);

        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: false}));
    }

    routes(): void {
        this.app.use('/', indexRoutes);
        this.app.use('/api/sales', salesRoutes);
        this.app.use('/api/products', productsRoutes)
        this.app.use('/api/contacts', contactsRoutes);
        this.app.use('/api/buyers', buyersRoutes);
    }

    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server on port', this.app.get('port'));
        });
    }

}

const server = new Server();
server.start();