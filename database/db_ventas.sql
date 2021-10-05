-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 14-09-2021 a las 21:31:45
-- Versión del servidor: 10.4.20-MariaDB
-- Versión de PHP: 8.0.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `db_ventas`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `compradores`
--

CREATE TABLE `compradores` (
  `id_comprador` int(10) NOT NULL,
  `comprador` varchar(60) NOT NULL,
  `id_contacto` int(10) NOT NULL,
  `id_direccion` int(10) NOT NULL
   
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `compradores` (`id_comprador`, `comprador`, `id_contacto`, `id_direccion`) VALUES
(1, `Ricardo`, `123`, 1, 1),
(2, `Antonio`, `123`, 2, 2),
(3, `Paloma`, `123`, 3, 3),
(4, `Pablo`, `123`, 4, 4);
-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `contactos`
--

CREATE TABLE `contactos` (
  `id_contacto` int(10) NOT NULL,
  `nombre_contacto` varchar(100) NOT NULL,
  `telefono` varchar(10) NOT NULL,
  `correo` varchar(45) NOT NULL,
  `RFC` varchar(13) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `contactos`
--

INSERT INTO `contactos` (`id_contacto`, `nombre_contacto`, `telefono`, `correo`, `RFC`) VALUES
(1, `Ricardo`, `123`, `ricardo@correo.com`, `ricardo123`),
(2, `Antonio`, `123`, `antonio@correo.com`, `antonio123`),
(3, `Paloma`, `123`, `paloma@correo.com`, `paloma123`),
(4, `Pablo`, `123`, `pablo@correo.com`, `pablo123`);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `facturas`
--

CREATE TABLE `facturas` (
  `id_factura` int(10) NOT NULL,
  `id_venta` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `direcciones`
--

CREATE TABLE `direcciones` (
  `id_direccion` int(10) NOT NULL,
  `pais` varchar(45) NOT NULL,
  `estado` varchar(45) NOT NULL,
  `municipio` varchar(45) NOT NULL,
  `colonia` varchar(45) NOT NULL,
  `direccion` varchar(45) NOT NULL,
  `codigo_postal` int(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `direcciones` (`id_direccion`, `pais`, `estado`, `municipio`, `colonia`, `direccion`, `codigo_postal`) VALUES
(1, `México`, `Aguascalientes`, `Aguascalientes`, `Victoria`, `calle 23`, `18896`),
(2, `México`, `Aguascalientes`, `Asientos`, `Guadalupe`, `calle 3`, `33451`),
(3, `México`, `Aguascalientes`, `Aguascalientes`, `San Gerardo`, `calle 332`, `12345`),
(4, `México`, `Jalisco`, `Teocaltiche` `Centro`, `calle 15`, `47200`);

-- --------------------------------------------------------
--
-- Estructura de tabla para la tabla `direcciones`
--

CREATE TABLE `direcciones_empresas` (
  `id_direccion_empresa` int(10) NOT NULL,
  `pais` varchar(45) NOT NULL,
  `estado` varchar(45) NOT NULL,
  `municipio` varchar(45) NOT NULL,
  `colonia` varchar(45) NOT NULL,
  `direccion` varchar(45) NOT NULL,
  `codigo_postal` int(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `consorcios`
--

CREATE TABLE `consorcios` (
  `id_consorcio` int(10) NOT NULL,
  `nombre_consorcio` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


INSERT INTO `consorcios` (`id_consorcio`, `nombre_consorcio`) VALUES
(1, 'Grupo Telecom México'),
(2, 'CompanyMX Ventures'),
(3, 'INTRA Corporativo'),
(4, 'Otros');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `empresas`
--

CREATE TABLE `empresas` (
  `id_empresa` int(10) NOT NULL,
  `nombre_empresa` varchar(45) NOT NULL,
  `descripcion` TEXT NOT NULL,
  `telefono` varchar(10) NOT NULL,
  `correo` varchar(45) NOT NULL,
  `RFC` varchar(13) NOT NULL,
  `id_consorcio` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `empresas` (`id_empresa`, `nombre_empresa`, `descripcion`, `telefono`, `correo`,`RFC`,`id_consorcio`) VALUES

(1, 'Nuevared', 'Especializada en servicios de internet de alta velocidad', '449 352 4965', 'contacto@nuevared.mx', '1234', 1),
(2, 'Codecenter', 'Especializada en servicios de internet de alta velocidad', '449-919-8289', 'proyectosespeciales@codecenter.mx', '1234', 1),
(3, 'Fibrared', '- Especializada en instalación de fibra óptica y servicios de red local', '1234', '1234@correo.com', '1234', 1),
(4, 'Integradora de conmutadores', 'Especializada en equipo activo de redes de datos', '1234', '1234@correo.com', '1234', 1),
(5, 'NEWSPACEVR', 'Especializada en desarrollo de productos de Realidad Virtual', '1234', '1234@correo.com', '1234', 1),
(6, 'CABRAA', '- Especializada en desarrollo de equipos tecnológicos para la salud', '1234', '1234@correo.com', '1234', 1),

(7, 'LinkThinks', 'Especializada en desarrollo de aplicaciones soft a la medida', '449 890 4902', 'info@linkthinks.com', '1234', 2),
(8, 'IoTDesigns', 'Especializada en infraestructura IoT con énfasis en Domótica', '449-919-8289', 'proyectosespeciales@codecenter.mx', '1234', 2),
(9, 'Firework', 'Especializada en guía app incubación e impulso a emprendedores', '1234', '1234@correo.com', '1234', 2),
(10, 'CowLlink', 'Especializada en soluciones tecnológicas para el ganado', '1234', '1234@correo.com', '1234', 2),
(11, 'eCondominium', 'Especializada en soluciones tecnológicas para condominios', '33 11 09 09 15', 'ventas@econdominium.mx', '1234', 2),
(12, 'Whealth4me', 'Especializada en seguimiento a salud integral de empleados', '1234', '1234@correo.com', '1234', 2),
(13, 'ARSA', '- Especializada en seguimiento a salud integral de empleados', '1234', '1234@correo.com', '1234', 2),

(14, 'SmartCam', 'Especializada en soluciones tecnológicas de seguridad', '1234', '1234@correo.com', '1234', 3),
(15, 'SmartEnergy', '- Especializada en soluciones tecnológicas para condominios', '800-443-4440', 'ventas@econdominium.mx', '1234', 3),
(16, 'SmartTel', '- Especializada en servicios de telcomunicaciones inalámbricas', '1234', 'office@smarttel.ro', '1234', 3),
(17, 'CBM', '- Especializada en servicios Blockchain', '1234', '1234@correo.com', '1234', 3),

(18, 'Creative Central', 'Especializada en infraestructura IoT con énfasis en Domótica', '449-919-8289', 'proyectosespeciales@codecenter.mx', '1234', 42),
(19, 'FamilIT', 'Especializada en guía app incubación e impulso a emprendedores', '1234', '1234@correo.com', '1234', 4),
(20, 'GEM', 'Especializada en soluciones tecnológicas para el ganado', '1234', '1234@correo.com', '1234', 4),
(21, 'ITC', '- Especializada en soluciones tecnológicas para condominios', '33 11 09 09 15', 'ventas@econdominium.mx', '1234', 4),
(22, 'Maker Center', '- Especializada en seguimiento a salud integral de empleados', '1234', '1234@correo.com', '1234', 4),
(23, 'KHK', '- Especializada en seguimiento a salud integral de empleados', '1234', '1234@correo.com', '1234', 4),
(24, '221B', 'Especializada en soluciones tecnológicas de seguridad', '1234', '1234@correo.com', '1234', 4),
(25, 'Borealix', '- Especializada en soluciones tecnológicas para condominios', '800-443-4440', 'ventas@econdominium.mx', '1234', 4),
(26, 'Borealix', '- Especializada en servicios de telcomunicaciones inalámbricas', '1234', 'office@smarttel.ro', '1234', 4),
(27, 'Aguascalient3D', '- Especializada en servicios Blockchain', '1234', '1234@correo.com', '1234', 4),
(28, 'CVR', 'Especializada en otorgar toda la infraestructura vial basada en tecnología', '449-919-8289', 'proyectosespeciales@codecenter.mx', '1234', 42);



-- --------------------------------------------------------
 
--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `id_producto` int(10) NOT NULL,
  `nombre_producto` varchar(45) NOT NULL,
  `descripcion` text NOT NULL,
  `precio_unitario` varchar(45),
  `stock` varchar(45) NOT NULL,
  `garantia` varchar(45) NOT NULL, 
  `servicio` TINYINT(1) NOT NULL, 
  `id_empresa` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `productos` (`id_producto`, `nombre_producto`, `descripcion`, `precio_unitario`, `stock`, `garantia`, `servicio`, `id_empresa`) VALUES

(1, 'Internet Paq.1 Privado Zona 100', 'Internet de 100mbps', '500', 'existente', 'si', 1, 1),
(2, 'Internet Paq.2 Privado Zona 500', 'Internet de 500mbps', '750', 'existente', 'si', 1, 1),
(3, 'Internet Paq.3 Privado Zona 1000', 'Internet de 1000mbps', '1000', 'existente', 'si', 1, 1),
(4, 'Internet Paq.4 Empresarial Zona 100', 'Internet de 100mbps', '1500', 'existente', 'si', 1, 1),
(5, 'Internet Paq.5 Empresarial Zona 500', 'Internet de 500mbps', '2500', 'existente', 'si', 1, 1),
(6, 'Internet Paq.6 Empresarial Zona 1000', 'Internet de 1000mbps',  '3500', 'existente', 'si', 1, 1),
(7, 'Paneles solares Paq. 1 2 paneles', 'Instacion de 2 paneles solares', '1500', 'existente', 'si', 0, 2),
(8, 'Paneles solares Paq. 2 5 paneles', 'Instacion de 2 paneles solares', '1500', 'existente', 'si', 0, 2),
(9, 'Paneles solares Paq. 3 10 paneles', 'Instacion de 2 paneles solares', '1500', 'existente', 'si', 0, 2),
(10, 'Paneles solares Paq. 4 50 paneles', 'Instacion de 2 paneles solares', '1500', 'existente', 'si', 0, 2),
(11, 'Silla de oficina', 'Silla de ofina', '2000', 'existente', 'si', 0, 3),
(12, 'Silla ergonomica', 'Silla ergonomica', '3500', 'existente', 'si', 0, 3);



-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `vendedores`
--

CREATE TABLE `vendedores` (
  `id_vendedor` int(10) NOT NULL,
  `nombre_vendedor` varchar(45) NOT NULL,
  `telefono` int(10) NOT NULL,
  `correo` varchar(45) NOT NULL,
  `RFC` varchar(13) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `vendedores` (`id_vendedor`, `nombre_vendedor`, `telefono`, `correo`, `RFC`) VALUES
(1, `Ricardo`, `123`, `ricardo@correo.com`, `ricardo123`),
(2, `Antonio`, `123`, `antonio@correo.com`, `antonio123`),
(3, `Paloma`, `123`, `paloma@correo.com`, `paloma123`),
(4, `Pablo`, `123`, `pablo@correo.com`, `pablo123`);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ventas`
--

CREATE TABLE `ventas` (
  `id_venta` int(10) NOT NULL,
  `id_comprador` int(10) NOT NULL,
  `id_vendedor` int(10) DEFAULT NULL,
  `id_producto` int(10) DEFAULT NULL,
  `cantidad` int(10) NOT NULL,
  `subtotal` int(10) NOT NULL,
  `iva` int(10) NOT NULL,
  `total` int(10) NOT NULL,
  `fecha` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `compradores`
--
ALTER TABLE `compradores`
  ADD PRIMARY KEY (`id_comprador`),
  ADD KEY `direcciones` (`id_direccion`),
  ADD KEY `contactos` (`id_contacto`);

--
-- Indices de la tabla `contactos`
--
ALTER TABLE `contactos`
  ADD PRIMARY KEY (`id_contacto`);

--
-- Indices de la tabla `facturas`
--
ALTER TABLE `facturas`
  ADD PRIMARY KEY (`id_factura`),
  ADD KEY `ventas` (`id_venta`);

--
-- Indices de la tabla `direcciones`
--
ALTER TABLE `direcciones`
  ADD PRIMARY KEY (`id_direccion`);

--
-- Indices de la tabla `direcciones_empresas`
--
ALTER TABLE `direcciones_empresas`
  ADD PRIMARY KEY (`id_direccion_empresa`);

--
-- Indices de la tabla `consorios`
--
ALTER TABLE `consorcios`
  ADD PRIMARY KEY (`id_consorcio`);

--
-- Indices de la tabla `empresas`
--
ALTER TABLE `empresas`
  ADD PRIMARY KEY (`id_empresa`),
  ADD KEY `consorcios` (`id_consorcio`);

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`id_producto`),
  ADD KEY `empresas` (`id_empresa`);

--
-- Indices de la tabla `vendedores`
--
ALTER TABLE `vendedores`
  ADD PRIMARY KEY (`id_vendedor`);

--
-- Indices de la tabla `ventas`
--
ALTER TABLE `ventas`
  ADD PRIMARY KEY (`id_venta`),
  ADD KEY `vendedores` (`id_vendedor`),
  ADD KEY `compradores` (`id_comprador`),
  ADD KEY `productos` (`id_producto`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `compradores`
--
ALTER TABLE `compradores`
  MODIFY `id_comprador` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `contactos`
--
ALTER TABLE `contactos`
  MODIFY `id_contacto` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `facturas`
--
ALTER TABLE `facturas`
  MODIFY `id_factura` int(10) NOT NULL AUTO_INCREMENT;
  
--
-- AUTO_INCREMENT de la tabla `direcciones`
--
ALTER TABLE `direcciones`
  MODIFY `id_direccion` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `direcciones_empresas`
--
ALTER TABLE `direcciones_empresas`
  MODIFY `id_direccion_empresa` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `consorcios`
--
ALTER TABLE `consorcios`
  MODIFY `id_consorcio` int(10) NOT NULL AUTO_INCREMENT;
  
--
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `empresas`
  MODIFY `id_empresa` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
  MODIFY `id_producto` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `vendedores`
--
ALTER TABLE `vendedores`
  MODIFY `id_vendedor` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `ventas`
--
ALTER TABLE `ventas`
  MODIFY `id_venta` int(10) NOT NULL AUTO_INCREMENT;
COMMIT; 

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;