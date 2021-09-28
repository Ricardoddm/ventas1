CREATE DATABASE db_ventas;

USE db_ventas;

CREATE TABLE contactos(
    id_contacto INT(10) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nombre_contacto VARCHAR(50) NOT NULL,
    telefono_contacto VARCHAR(12) NOT NULL,
    email_contacto VARCHAR(50)NOT NULL,
    rfc_contacto VARCHAR(13) NOT NULL
);

CREATE TABLE lugares(
	id_lugar INT(10) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    pais VARCHAR(50) NOT NULL,
    estado VARCHAR(50) NOT NULL,
    id_direccion INT(10) NOT NULL,
    CONSTRAINT fk_direccion FOREIGN KEY(id_direccion) REFERENCES direcciones(id_direccion)
);

CREATE TABLE direcciones(
    id_direccion INT(10) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    direccion VARCHAR(70) NOT NULL,
    colonia VARCHAR(40) NOT NULL,
    codigo_postal INT(5) NOT NULL
);

CREATE TABLE compradores(
	id_comprador INT(10) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    empresa_comprador VARCHAR(70) NOT NULL,
    id_contacto INT(10),
    id_lugar INT(10),
    rfc_comprador VARCHAR(13) NOT NULL,
    CONSTRAINT fk_contacto FOREIGN KEY(id_contacto) REFERENCES contactos(id_contacto),
    CONSTRAINT fk_lugar FOREIGN KEY(id_lugar) REFERENCES lugares(id_lugar)  
);

CREATE TABLE vendedores (
    id_vendedor INT(10) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nombre_vendedor VARCHAR(70) NOT NULL,
    telefono_vendedor VARCHAR(12) NOT NULL,
    email_vendedor VARCHAR(40) NOT NULL,
    rfc_vendedor VARCHAR(13) NOT NULL
);

CREATE TABLE consorcios(
    id_consorcio INT(10) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nombre_consorcio VARCHAR(40)
);

CREATE TABLE empresas(
    id_empresa INT(10) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nnombre_empresa VARCHAR(70) NOT NULL,
    telefono INT(10),
    correo INT(10),
    descripcion TEXT,
    rfc VARCHAR(13) NOT NULL,
    id_consorcio INT(10),
    CONSTRAINT fk_id_consorcio FOREIGN KEY(id_consorcio) REFERENCES consorcios(id_consorcio)
);

CREATE TABLE productos(
    id_producto INT(10) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nombre_producto VARCHAR(40) NOT NULL,
    descripcion TEXT NOT NULL,
    precio_unitario DECIMAL(7,2) NOT NULL,
    stock INT(7) NOT NULL,
    garantia INT(7) NOT NULL,
    id_empresa INT(10),
    CONSTRAINT fk_id_empresa FOREIGN KEY(id_empresa) REFERENCES empresas(id_empresa)
);

CREATE TABLE ventas(
	id_venta INT(10) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    fecha timestamp NOT NULL DEFAULT current_timestamp,
    id_comprador INT(10),
    id_vendedor INT(10),
    id_consorcio INT(10),
    CONSTRAINT fk_comprador FOREIGN KEY(id_comprador) REFERENCES compradores(id_comprador),
    CONSTRAINT fk_vendedor FOREIGN KEY(id_vendedor) REFERENCES vendedores(id_vendedor), 
    CONSTRAINT fk_id_consorcio FOREIGN KEY(id_consorcio) REFERENCES consorcios(id_consorcio)
);

CREATE TABLE facturas(
  id_factura INT(10) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  id_venta INT(10),
  CONSTRAINT fk_venta FOREIGN KEY(id_venta) REFERENCES ventas(id_venta)
);


/*INSERT INTO contactos (nombre_contacto, telefono, email, rfc) 
VALUES ('Antonio Aguilera', '4492918634', 'anto@gmail.com', 'AUMA310898FRT');

INSERT INTO lugares (id_lugar, pais, estado, direccion, cp) 
VALUES (2, 'México', 'Aguascalientes', 'Av. Arqueros 455', '20660');

INSERT INTO compradores (id_comprador, empresa_comprador, id_contacto, id_lugar, rfc)
VALUES (1,'Investel', '2', '1', 'AFTYG987');*/
