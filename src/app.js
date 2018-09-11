const express = require('express');
const path = require('path');
const morgan = require('morgan');
const mysql = require('mysql');
const myConnection = require('express-myconnection');

const app = express();

//importar rutas
const rutas = require('./Routes/Routes');
//config
app.set('port',process.env.PORT || 3000);
app.set('view engine','ejs');
app.set('views', path.join(__dirname, 'views'));

//middlewares
app.use(morgan('dev'));
app.use(myConnection(mysql, {
    host: 'localhost',
    user: 'root',
    password: 'usbw',
    port: '3307',
    database: 'empleados'
}, 'single' ));
 app.use(express.urlencoded({extended:false}));

//rutas
app.use('/',rutas);
//Public
app.use(express.static(path.join(__dirname,'/public')));

app.listen(3000,()=>{
    console.log('Ejecutando puerto 3000');
})