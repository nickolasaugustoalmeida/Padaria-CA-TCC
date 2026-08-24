import app from './config/index.js'
import db from './config/db.js'

const port = Number(process.env.PORT || 3006);

db.connect((error) => {
  if (error) {
    console.error('Não foi possível conectar ao banco de dados:', error.message);
    process.exitCode = 1;
    return;
  }

  console.log('Banco de dados conectado');

  app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
  });
});
