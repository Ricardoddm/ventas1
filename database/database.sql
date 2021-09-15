CREATE TABLE contacto (
    id_contacto INT(10) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nombre_contacto VARCHAR(50) NOT NULL,
    telefono VARCHAR(10),
    email VARCHAR(50),
    rfc VARCHAR(13) NOT NULL
);

CREATE TABLE pais (
    id_pais INT(10) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    pais VARCHAR(70) NOT NULL
);

CREATE TABLE estado (
    id_estado INT(10) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    estado VARCHAR(70) NOT NULL
);

CREATE TABLE comprador (
    id_comprador INT(10) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    empresa VARCHAR(50) NOT NULL,
    representante VARCHAR(45) NOT NULL,
    direccion TEXT NOT NULL,
    id_pais INT(10) NOT NULL,
    id_estado INT(10) NOT NULL,
    rfc VARCHAR(20) NOT NULL,
    CONSTRAINT fk_pais FOREIGN KEY(id_pais) REFERENCES pais(id_pais), 
    CONSTRAINT fk_estado FOREIGN KEY(id_estado) REFERENCES estado(id_estado)
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
    id_venta INT(10) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    id_vendedor INT(10) NOT NULL,
    id_producto INT(10) NOT NULL,
    subtotal DECIMAL(7,2) NOT NULL,
    cantidad INT(5) NOT NULL,
    total DECIMAL(7,2) NOT NULL,
    estado VARCHAR(30) NOT NULL,
    CONSTRAINT fk_empresa FOREIGN KEY(id_empresa) REFERENCES empresa(id_empresa),
    CONSTRAINT fk_vendedor FOREIGN KEY(id_vendedor) REFERENCES vendedor(id_vendedor), 
    CONSTRAINT fk_producto FOREIGN KEY(id_producto) REFERENCES producto(id_producto)
);



INSERT INTO contacto (nombre_contacto, telefono, email, rfc) 
VALUES ('Antonio Aguilera', '4492918634', 'anto@gmail.com', 'AUMA310898FRT');

INSERT INTO empresa (nombre_empresa, id_contacto, direccion, rfc)
VALUES ('Investel', '2', 'Av. Aguascalientes #234', 'AFTYG987');