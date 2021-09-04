CREATE TABLE contacto (
    id_contacto INT(10) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nombre_contacto VARCHAR(50) NOT NULL,
    telefono VARCHAR(10),
    email VARCHAR(20),
    rfc VARCHAR(13) NOT NULL
);

CREATE TABLE empresa (
    id_empresa INT(10) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nombre_empresa VARCHAR(20) NOT NULL,
    id_contacto INT(10),
    direccion VARCHAR(30) NOT NULL,
    rfc VARCHAR(12) NOT NULL,
    CONSTRAINT fk_contacto FOREIGN KEY(id_contacto) REFERENCES contacto(id_contacto)
);

CREATE TABLE vendedor (
    id_vendedor INT(10) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nombre_vendedor VARCHAR(20) NOT NULL,
    telefono VARCHAR(10) NOT NULL,
    email VARCHAR(20) NOT NULL
);

CREATE TABLE producto (
    id_producto INT(10) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nombre_producto VARCHAR(30) NOT NULL,
    descripcion TEXT NOT NULL,
    precio_unitario DECIMAL(7,2) NOT NULL,
    existencia INT(7) NOT NULL
);

CREATE TABLE ventas (
    id_venta INT(10) NOT NULL,
    fecha timestamp NOT NULL DEFAULT current_timestamp,
    id_empresa INT(10),
    id_vendedor INT(10),
    id_producto INT(10),
    subtotal DECIMAL(7,2),
    cantidad INT(5),
    total DECIMAL(7,2),
    CONSTRAINT fk_empresa FOREIGN KEY(id_empresa) REFERENCES empresa(id_empresa),
    CONSTRAINT fk_vendedor FOREIGN KEY(id_vendedor) REFERENCES vendedor(id_vendedor), 
    CONSTRAINT fk_producto FOREIGN KEY(id_producto) REFERENCES producto(id_producto)
);

