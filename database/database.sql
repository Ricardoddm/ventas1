CREATE DATABASE db_ventas;

USE db_ventas;

CREATE TABLE contactos (
    id_contacto INT(10) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nombre_contacto VARCHAR(50) NOT NULL,
    telefono INT(10),
    correo VARCHAR(20),
    rfc VARCHAR(13) NOT NULL
);

CREATE TABLE compradores (
    id_comprador INT(10) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nombre_empresa VARCHAR(20) NOT NULL,
    id_contacto INT(10),
    lugar VARCHAR(30) NOT NULL,
    rfc VARCHAR(12) NOT NULL,
    CONSTRAINT fk_contacto FOREIGN KEY(id_contacto) REFERENCES contacto(id_contacto)
);

CREATE TABLE vendedores (
    id_vendedor INT(10) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nombre_vendedor VARCHAR(20) NOT NULL,
    telefono VARCHAR(10) NOT NULL,
    email VARCHAR(20) NOT NULL
);

CREATE TABLE productos (
    id_producto INT(10) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nombre_producto VARCHAR(30) NOT NULL,
    descripcion TEXT NOT NULL,
    precio_unitario DECIMAL(7,2) NOT NULL,
    existencia INT(7) NOT NULL
);

CREATE TABLE ventas (
    id_ventas INT(10) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    fecha timestamp NOT NULL DEFAULT current_timestamp,
    id_comprador INT(10),
    id_vendedor INT(10),
    id_producto INT(10),
    subtotal DECIMAL(7,2),
    cantidad INT(5),
    total DECIMAL(7,2),
    CONSTRAINT fk_empresa FOREIGN KEY(id_comprador) REFERENCES empresa(id_comprador),
    CONSTRAINT fk_vendedor FOREIGN KEY(id_vendedor) REFERENCES vendedor(id_vendedor), 
    CONSTRAINT fk_producto FOREIGN KEY(id_producto) REFERENCES producto(id_producto)
);

CREATE TABLE facturas (
    id_factura INT(10) NOT NULL AUTO_INCREMENT PRIMARY KEY, 
    id_ventas INT(10),
    CONSTRAINT fk_ventas FOREIGN KEY(id_ventas) REFERENCES ventas(id_ventas)
);

DESCRIBE db_ventas;
