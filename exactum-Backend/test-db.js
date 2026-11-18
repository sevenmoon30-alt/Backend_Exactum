const sequelize = require('./src/config/db'); // ajusta la ruta a donde está tu db.js

sequelize.authenticate()
  .then(() => {
    console.log('Conexión exitosa a Neon');
    return sequelize.close();
  })
  .catch((err) => {
    console.error('Error de conexión:', err.message);
  });