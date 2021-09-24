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
-- Use db_ventas

-- --------------------------------------------------------

--
<<<<<<< HEAD
-- Estructura de tabla para la tabla `compradores`
--

CREATE TABLE `compradores` (
  `id_comprador` int(11) NOT NULL,
  `empresa_comprador` varchar(45) NOT NULL,
  `contacto` int(45) NOT NULL,
  `lugar` varchar(45) NOT NULL,
  `RFC` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `contactos`
--

CREATE TABLE `contactos` (
  `id_contacto` int(11) NOT NULL,
  `nombre_contacto` varchar(45) NOT NULL,
  `telefono` varchar(45) NOT NULL,
  `correo` varchar(45) NOT NULL,
  `RFC` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `contactos`
--

INSERT INTO `contactos` (`id_contacto`, `nombre_contacto`, `telefono`, `correo`, `RFC`) VALUES
(1, 'ricardo1', '123', '123', '123'),
(2, 'ricardo1', '123', '123', '123'),
(3, 'ricardo1', '123', '123', '123');
=======
-- Estructura de tabla para la tabla `contactos`
--

CREATE TABLE `contactos` (
  `id_contacto` int(10) NOT NULL,
  `nombre_contacto` varchar(70) NOT NULL,
  `telefono` varchar(12) DEFAULT NULL,
  `email` varchar(40) DEFAULT NULL,
  `rfc` varchar(13) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `contactos`
--

INSERT INTO `contactos` (`id_contacto`, `nombre_contacto`, `telefono`, `email`, `rfc`) VALUES
(1, 'Juanito Perez', '524492918634', 'antonio.aguilerimon@', 'AUMA31089845');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `lugares`
--

CREATE TABLE `lugares` (
  `id_lugar` INT(10) NOT NULL,
  `pais` VARCHAR(50) NOT NULL,
  `estado` VARCHAR(50) NOT NULL,
  `direccion` VARCHAR(70) NOT NULL,
  `cp` INT(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `vendedor`
--

INSERT INTO `lugares` (`id_lugar`, `pais`, `estado`, `direccion`, `cp`) VALUES
(1, 'México', 'Aguascalientes', 'Av. Arqueros 455', '20266');
>>>>>>> Pablo

-- --------------------------------------------------------
--
<<<<<<< HEAD
-- Estructura de tabla para la tabla `facturas`
--

CREATE TABLE `facturas` (
  `id_factura` int(11) NOT NULL,
  `venta` int(11) NOT NULL
=======
-- Estructura de tabla para la tabla `compradores`
--

CREATE TABLE `compradores` (
	  `id_comprador` INT(10) NOT NULL,
    `empresa_comprador` VARCHAR(70) NOT NULL,
    `id_contacto` INT(10) DEFAULT NULL,
    `id_lugar` INT(10) NOT NULL,
    `rfc` VARCHAR(13) NOT NULL
>>>>>>> Pablo
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
<<<<<<< HEAD
-- Estructura de tabla para la tabla `lugares`
--

CREATE TABLE `lugares` (
  `id_lugar` int(11) NOT NULL,
  `pais` varchar(45) NOT NULL,
  `estado` varchar(45) NOT NULL,
  `direccion` varchar(45) NOT NULL,
  `codigo_postal` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='					';
=======
-- Volcado de datos para la tabla `compradores`
--

INSERT INTO `compradores` (`id_comprador`, `empresa_comprador`, `id_contacto`, `id_lugar`, `rfc`) VALUES
(1, 'Investel', 1, 1, 'INVT78411');
>>>>>>> Pablo

-- --------------------------------------------------------

--
<<<<<<< HEAD
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `id_producto` int(11) NOT NULL,
  `nombre_producto` varchar(45) NOT NULL,
  `descripcion` varchar(45) NOT NULL,
  `precio_unitario` varchar(45) NOT NULL,
  `existencia` varchar(45) NOT NULL,
  `garantia` varchar(45) NOT NULL
=======
-- Estructura de tabla para la tabla `vendedores`
--

CREATE TABLE `vendedores` (
  `id_vendedor` int(10) NOT NULL,
  `nombre_vendedor` varchar(70) NOT NULL,
  `telefono` varchar(12) NOT NULL,
  `email` varchar(40) NOT NULL
>>>>>>> Pablo
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `vendedores`
--

<<<<<<< HEAD
CREATE TABLE `vendedores` (
  `id_vendedor` int(11) NOT NULL,
  `nombre_vendedor` varchar(45) NOT NULL,
  `telefono` varchar(45) NOT NULL,
  `correo` varchar(45) NOT NULL,
  `RFC` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
=======
INSERT INTO `vendedores` (`id_vendedor`, `nombre_vendedor`, `telefono`, `email`) VALUES
(1, 'Antonio Martinez', '4494064398', 'a.gmail.com');
>>>>>>> Pablo

-- --------------------------------------------------------
--
-- Estructura de tabla para la tabla `productos
--

CREATE TABLE `productos` (
  `id_producto` int(10) NOT NULL,
  `nombre_producto` varchar(40) NOT NULL,
  `descripcion` text NOT NULL,
  `precio_unitario` decimal(7,2) NOT NULL,
  `existencia` int(7) NOT NULL,
  `garantia` INT(7) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`id_producto`, `nombre_producto`, `descripcion`, `precio_unitario`, `existencia`, `garantia`) VALUES
(1, 'Silla ejecutiva', 'Silla ergonómica para sentarse :p', '1200.00', 50, 6);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ventas`
--

CREATE TABLE `ventas` (
<<<<<<< HEAD
  `id_ventas` int(11) NOT NULL,
  `comprador` int(45) NOT NULL,
  `vendedor` int(45) DEFAULT NULL,
  `producto` int(45) DEFAULT NULL,
  `cantidad` varchar(45) NOT NULL,
  `subtotal` varchar(45) NOT NULL,
  `iva` varchar(45) NOT NULL,
  `total` varchar(45) NOT NULL,
  `fecha` int(11) NOT NULL DEFAULT current_timestamp()
=======
  `id_venta` int(10) NOT NULL,
  `fecha` timestamp NOT NULL DEFAULT current_timestamp(),
  `id_comprador` int(10) DEFAULT NULL,
  `id_vendedor` int(10) DEFAULT NULL,
  `id_producto` int(10) DEFAULT NULL,
  `subtotal` decimal(7,2) DEFAULT NULL,
  `cantidad` int(5) DEFAULT NULL,
  `total` decimal(7,2) DEFAULT NULL
>>>>>>> Pablo
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Índices para tablas volcadas
--

<<<<<<< HEAD
=======
INSERT INTO `ventas` (`id_venta`, `fecha`, `id_comprador`, `id_vendedor`, `id_producto`, `subtotal`, `cantidad`, `total`) VALUES
(1, '2021-09-09 22:47:50', 1, 1, 1, '3500.00', 3500, '3500.00'),
(2, '2021-09-09 22:56:42', 1, 1, 1, '4000.00', 4000, '4000.00');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `facturas`
--

CREATE TABLE `facturas` (
  `id_factura` int(10) NOT NULL,
  `id_venta` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `facturas`
--

INSERT INTO `facturas` (`id_factura`, `id_venta`) VALUES
(1, 1);



>>>>>>> Pablo
--
-- Indices de la tabla `compradores`
--
ALTER TABLE `compradores`
  ADD PRIMARY KEY (`id_comprador`),
  ADD KEY `contacto` (`contacto`);

--
-- Indices de la tabla `contactos`
--
ALTER TABLE `contactos`
  ADD PRIMARY KEY (`id_contacto`);

--
<<<<<<< HEAD
-- Indices de la tabla `facturas`
--
ALTER TABLE `facturas`
  ADD PRIMARY KEY (`id_factura`),
  ADD KEY `venta` (`venta`);

--
-- Indices de la tabla `lugares`
--
ALTER TABLE `lugares`
  ADD PRIMARY KEY (`id_lugar`);

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`id_producto`);
=======
-- Indices de la tabla `lugares`
--
ALTER TABLE `lugares`
  ADD PRIMARY KEY (`id_lugar`);

--
-- Indices de la tabla `compradores`
--
ALTER TABLE `compradores`
  ADD PRIMARY KEY (`id_comprador`),
  ADD KEY `fk_contacto` (`id_contacto`);
>>>>>>> Pablo

--
-- Indices de la tabla `vendedores`
--
ALTER TABLE `vendedores`
  ADD PRIMARY KEY (`id_vendedor`);

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`id_producto`);

--
-- Indices de la tabla `ventas`
--
ALTER TABLE `ventas`
<<<<<<< HEAD
  ADD PRIMARY KEY (`id_ventas`),
  ADD KEY `vendedor` (`vendedor`),
  ADD KEY `producto` (`producto`);
=======
  ADD PRIMARY KEY (`id_venta`),
  ADD KEY `fk_comrpador` (`id_comprador`),
  ADD KEY `fk_vendedor` (`id_vendedor`),
  ADD KEY `fk_producto` (`id_producto`);
>>>>>>> Pablo

--
-- Indices de la tabla `facturas`
--
ALTER TABLE `facturas`
  ADD PRIMARY KEY (`id_factura`),
  ADD KEY `fk_venta` (`id_venta`);



--
-- AUTO_INCREMENT de las tablas volcadas
--

--
<<<<<<< HEAD
-- AUTO_INCREMENT de la tabla `compradores`
--
ALTER TABLE `compradores`
  MODIFY `id_comprador` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `contactos`
--
ALTER TABLE `contactos`
  MODIFY `id_contacto` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `facturas`
--
ALTER TABLE `facturas`
  MODIFY `id_factura` int(11) NOT NULL AUTO_INCREMENT;
=======
-- AUTO_INCREMENT de la tabla `contactos`
--
ALTER TABLE `contactos`
  MODIFY `id_contacto` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `lugares`
ALTER TABLE `lugares`
  MODIFY `id_lugar` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `compradores`
--
ALTER TABLE `compradores`
  MODIFY `id_comprador` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `vendedores`
--
ALTER TABLE `vendedores`
  MODIFY `id_vendedor` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
  MODIFY `id_producto` int(10) NOT NULL AUTO_INCREMENT;
>>>>>>> Pablo

--
-- AUTO_INCREMENT de la tabla `lugares`
--
<<<<<<< HEAD
ALTER TABLE `lugares`
  MODIFY `id_lugar` int(11) NOT NULL AUTO_INCREMENT;
=======
ALTER TABLE `ventas`
  MODIFY `id_venta` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `facturas`
--
ALTER TABLE `facturas`
  MODIFY `id_factura` int(10) NOT NULL  AUTO_INCREMENT;


>>>>>>> Pablo

--
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
  MODIFY `id_producto` int(11) NOT NULL AUTO_INCREMENT;

--
<<<<<<< HEAD
-- AUTO_INCREMENT de la tabla `vendedores`
--
ALTER TABLE `vendedores`
  MODIFY `id_vendedor` int(11) NOT NULL AUTO_INCREMENT;
=======
-- Filtros para la tabla `compradores`
--
ALTER TABLE `compradores`
  ADD CONSTRAINT `fk_contacto` FOREIGN KEY (`id_contacto`) REFERENCES `contactos` (`id_contacto`),
  ADD CONSTRAINT `fk_lugar` FOREIGN KEY (`id_lugar`) REFERENCES `lugares` (`id_lugar`);
>>>>>>> Pablo

--
-- AUTO_INCREMENT de la tabla `ventas`
--
ALTER TABLE `ventas`
<<<<<<< HEAD
  MODIFY `id_ventas` int(11) NOT NULL AUTO_INCREMENT;
=======
  ADD CONSTRAINT `fk_comprador` FOREIGN KEY (`id_comprador`) REFERENCES `compradores` (`id_comprador`),
  ADD CONSTRAINT `fk_producto` FOREIGN KEY (`id_producto`) REFERENCES `productos` (`id_producto`),
  ADD CONSTRAINT `fk_vendedor` FOREIGN KEY (`id_vendedor`) REFERENCES `vendedores` (`id_vendedor`);

--
-- Filtros para la tabla `facturas`
--
ALTER TABLE `facturas`
  ADD CONSTRAINT `fk_venta` FOREIGN KEY (`id_venta`) REFERENCES `ventas` (`id_venta`);

>>>>>>> Pablo
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
