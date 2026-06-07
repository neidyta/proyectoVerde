# EcoDaily

Descripción

EcoDaily es una aplicación web desarrollada para registrar hábitos diarios relacionados con el consumo de agua, energía, generación de residuos y medios de transporte utilizados por los usuarios. A partir de estos datos, el sistema calcula una estimación de la huella ambiental y proporciona recomendaciones para promover hábitos sostenibles.

## Tecnología

- Node.js
- Express.js
- HTML
- CSS
- JavaScript
- Jest (Pruebas unitarias)
- ESLint (Calidad de código)
- Git y GitHub

## Arquitectura general

El proyecto sigue el patrón MVC:

- Models: gestión de datos de usuarios y hábitos.
- Views: interfaces HTML del sistema.
- Controllers: lógica de negocio.
- Routes: definición de rutas y endpoints.

Estructura:

src/
├── controllers/
├── models/
├── routes/
├── views/
├── public/
└── app.js

## Instalación

1. Clonar

git clone URL_DEL_REPOSITORIO

2. Ingresar al proyecto

cd EcoDaily

3. Instalar dependencias

npm install

## Ejecución local

Modo normal:

npm start

Modo desarrollo:

npm run dev

La aplicación estará disponible en:

http://localhost:3000

## Pruebas

Ejecutar pruebas unitarias:

npm test
