CREATE DATABASE ventas;

USE ventas;

CREATE TABLE contacto (
    id_contacto INT(10) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nombre_contacto VARCHAR(50) NOT NULL,
    telefono VARCHAR(10),
    email VARCHAR(50),
    rfc VARCHAR(13) NOT NULL
);

CREATE TABLE comprador (
    id_comprador INT(10) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    id_contacto INT(10),
    direccion VARCHAR(50) NOT NULL,
    rfc VARCHAR(12) NOT NULL,
    CONSTRAINT fk_contacto FOREIGN KEY(id_contacto) REFERENCES contacto(id_contacto)

);

CREATE TABLE vendedor (
    id_vendedor INT(10) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nombre_vendedor VARCHAR(50) NOT NULL,
    telefono VARCHAR(10) NOT NULL,
    email VARCHAR(30) NOT NULL

);

CREATE TABLE productos_y_servicios (
    id_productos_y_servicios INT(10) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nombre_producto VARCHAR(30) NOT NULL,
    descripcion TEXT NOT NULL,
    precio_unitario DECIMAL(7,2) NOT NULL,
    existencia INT(7) NOT NULL

);

CREATE TABLE ventas (
    id_venta INT(10) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    fecha timestamp NOT NULL DEFAULT current_timestamp,
    CONSTRAINT fk_comprador FOREIGN KEY(id_comprador) REFERENCES comprador(id_comprador),
    CONSTRAINT fk_vendedor FOREIGN KEY(id_vendedor) REFERENCES vendedor(id_vendedor), 
    CONSTRAINT fk_productos_y_servicios FOREIGN KEY(id_productos_y_servicios) REFERENCES productos_y_servicios(id_productos_y_servicios),
    cantidad INT(5),
    subtotal DECIMAL(7,2),
    iva DECIMAL(7,2),
    total DECIMAL(7,2)
    
);

CREATE TABLE ventas (    
    id_venta INT(10) NOT NULL AUTO_INCREMENT PRIMARY KEY,    
    fecha timestamp NOT NULL DEFAULT current_timestamp,   
    id_comprador INT(10),
    id_vendedor INT(10),
    id_productos_y_servicios INT(10),
    CONSTRAINT fk_comprador FOREIGN KEY(id_comprador) REFERENCES comprador(id_comprador),    
    CONSTRAINT fk_vendedor FOREIGN KEY(id_vendedor) REFERENCES vendedor(id_vendedor),     
    CONSTRAINT fk_productos_y_servicios FOREIGN KEY(id_productos_y_servicios) REFERENCES productos_y_servicios(id_productos_y_servicios),    
    cantidad INT(5),    
    subtotal DECIMAL(7,2),    
    iva DECIMAL(7,2),    
    total DECIMAL(7,2)    

);

CREATE TABLE facturas (
    id_factura INT(10) NOT NULL AUTO_INCREMENT PRIMARY KEY, 
    CONSTRAINT fk_venta FOREIGN KEY(id_venta) REFERENCES ventas(id_venta),
    fecha_impresion timestamp NOT NULL DEFAULT current_timestamp

);

DESCRIBE ventas;