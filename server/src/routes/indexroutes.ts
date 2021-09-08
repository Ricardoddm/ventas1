importar  { Enrutador }  desde  'express' ;
importar  {  indexController  }  desde  '../controllers/indexcontroller' ;

class  IndexRoutes {
     enrutador público : Enrutador =  Enrutador ( ) ;
    constructor ( ) {
        esto . config ( ) ;
    }
    config ( ) : void {
        esto . enrutador . obtener ( '/' ,  indexController . index ) ;
    }
}
const  dataRoutes  = new  IndexRoutes ( ) ;
exportar  rutas de datos predeterminadas  . enrutador ;