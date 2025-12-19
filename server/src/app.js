const express = require('express');
const path = require('path');
require('dotenv').config();
const serverConfig = require('./configs/server.config');
const apiRouter = require('./routes/api.route');

const app = express();

serverConfig(app);

app.use('/api', apiRouter);
app.use(express.static(path.join(__dirname, '..', 'dist')));
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'dist', 'index.html'));
});

const { PORT } = process.env || 3001;

app.listen(PORT, () => console.log(`Сервер запущен на порту ${PORT}`));
