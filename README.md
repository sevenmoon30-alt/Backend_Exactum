# Exactum – Backend

API REST de **Exactum**, aplicación web para organizar las finanzas de personas naturales (espacio *Personal*) y emprendedores (espacio *Emprendimiento*). Proyecto Pedagógico Integrador (PPI) del Tecnológico de Antioquia, Equipo 02.

## Tecnologías

- Node.js 22 y Express
- Sequelize (ORM)
- PostgreSQL (Neon en producción)
- Autenticación con JWT y contraseñas cifradas con bcryptjs
- Docker
- Despliegue en Render

## Estructura

```
src/
├── config/        Conexión a la base de datos (Sequelize)
├── models/        Modelos de la base de datos
├── routes/        Definición de rutas
├── controllers/   Manejo de peticiones y respuestas
├── services/      Lógica de negocio
├── middlewares/   Autenticación JWT y validaciones
├── app.js         Configuración de Express (CORS, rutas)
└── server.js      Arranque del servidor y sincronización de tablas
```

## Módulos principales

- **Personal:** usuarios, movimientos, presupuestos.
- **Emprendimiento:** negocio, productos, clientes y proveedores, ventas, gastos y abonos (cuentas por cobrar y por pagar).

## Requisitos

- Node.js 22 o superior
- Una base de datos PostgreSQL (local o en Neon)

## Variables de entorno

Crea un archivo `.env` en la raíz (nunca lo subas a GitHub):

```dotenv
PORT=3000
DB_HOST=host-de-tu-base-de-datos
DB_PORT=5432
DB_NAME=exactum
DB_USER=usuario
DB_PASSWORD=contraseña
DB_DIALECT=postgres
JWT_SECRET=un_texto_largo_y_aleatorio
```

## Ejecución local

```bash
npm install
npm run dev
```

El servidor queda en `http://localhost:3000`. Al arrancar, Sequelize sincroniza las tablas en la base de datos.

## Probar la conexión a la base de datos

```bash
node test-db.js
```

Debe imprimir `Conexión exitosa a Neon`.

## Ejecución con Docker

```bash
docker build -t exactum-backend .
docker run -p 3000:3000 --env-file .env exactum-backend
```

## Despliegue

1. **Base de datos:** proyecto y base `exactum` en Neon (PostgreSQL).
2. **Backend:** Web Service en Render con entorno Docker. Si el `Dockerfile` está dentro de una subcarpeta del repositorio, se indica en *Root Directory*.
3. Se cargan en Render las mismas variables de entorno del `.env`.
4. Render entrega una URL pública, que usa el frontend en la variable `VITE_API_URL`.

> En el plan gratuito de Render el servicio se duerme tras un tiempo sin uso, y la primera petición puede tardar 50 segundos o más.

## Seguridad

- No subir `.env` ni credenciales al repositorio (están en `.gitignore` y `.dockerignore`).
- Usar un `JWT_SECRET` largo y distinto en cada entorno.
- La conexión a la base de datos usa SSL.

## Equipo

Santiago Henao, Manuel Henao, Leandro Hurtado y Andrés Camilo Alzate – Tecnológico de Antioquia.
