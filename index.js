const express = require('express');
const morgan = require('morgan');
const app = express();
const ejs = require('ejs');


// exec: npm start

// Settings (Motores de Plantillas)
app.set('appName','myServer');
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');  

// Middlewares
app.use(morgan('dev'));

// Rutas
app.get('/', (req, res) => {
  res.render('index.ejs');
});

app.get('/login', (req, res) => {
  res.render('login.ejs');
});

app.get('*', (req, res) => {
  res.send(`Archivo no encontrado...`);
});

app.listen(3000, function () {
  console.log('Server on port 3000!');
  console.log('Nombre de la App: ' + app.get('appName'));
});


