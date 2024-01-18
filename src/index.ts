import express from 'express';
import router from './routes';
import mongoose from 'mongoose';

mongoose.connect('mongodb://mongodb:27017/mydatabase');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Erro na conexão com o banco de dados:'));
db.once('open', () => {
  console.log('Conexão com o banco de dados estabelecida com sucesso!');
});

const app = express();

app.use(express.json());
app.use(router);


const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () => console.log(
  `Server is running on PORT: ${PORT}`,
));

export default server;
