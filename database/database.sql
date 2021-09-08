CREATE DATABASE ventas;

USE ventas;

CREATE TABLE Contacto (
    id_contacto INT(10) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nombre_contacto VARCHAR(50) NOT NULL,
    telefono VARCHAR(10),
    email VARCHAR(20),
    rfc VARCHAR(13) NOT NULL
);

CREATE TABLE Comprador (
    id_comprador INT(10) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(20) NOT NULL,
    id_contacto INT(10),
    direccion VARCHAR(30) NOT NULL,
    rfc VARCHAR(12) NOT NULL,
    CONSTRAINT fk_contacto FOREIGN KEY(id_contacto) REFERENCES contacto(id_contacto)
);

CREATE TABLE Vendedor (
    id_vendedor INT(10) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nombre_vendedor VARCHAR(20) NOT NULL,
    telefono VARCHAR(10) NOT NULL,
    email VARCHAR(20) NOT NULL
);

CREATE TABLE Productos_o_Servicios (
    id_producto_o_servicio INT(10) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nombre_producto VARCHAR(30) NOT NULL,
    descripcion TEXT NOT NULL,
    precio_unitario DECIMAL(7,2) NOT NULL,
    existencia INT(7) NOT NULL
);

CREATE TABLE Ventas (
    id_venta INT(10) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    fecha timestamp NOT NULL DEFAULT current_timestamp,
    id_empresa INT(10),
    id_vendedor INT(10),
    id_producto INT(10),
    cantidad INT(5),
    subtotal DECIMAL(7,2),
    iva DECIMAL(7,2),
    total DECIMAL(7,2),
    CONSTRAINT fk_comprador FOREIGN KEY(id_comprador) REFERENCES Comprador(id_comprador),
    CONSTRAINT fk_vendedor FOREIGN KEY(id_vendedor) REFERENCES Vendedor(id_vendedor), 
    CONSTRAINT fk_productos_o_servicios FOREIGN KEY(id_productos_o_servicio) REFERENCES Productos_o_Servicios(id_producto_o_servicio)
);

CREATE TABLE Facturas (
    id_factura INT(10) NOT NULL AUTO_INCREMENT PRIMARY KEY, 
    CONSTRAINT fk_ventas FOREIGN KEY(id_venta) REFERENCES Ventas(id_venta),
    fecha_impresion timestamp NOT NULL DEFAULT current_timestamp
);

DESCRIBE ventas;
