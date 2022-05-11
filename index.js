const express = require('express');
const mysql = require('mysql');
const myConnection = require("express-myconnection");
const morgan = require("morgan");
const routes = require("./routes/web");
const usersRoutes = require("./routes/usersRoutes");
const app = express();


// port -- puerto 
app.set("port", process.env.PORT || 3000);

//middlelware ---
app.use(morgan('dev'));

//conecion a base de datos //
app.use(
  myConnection(
    mysql,
    {
      host: "localhost",
      user: "root",
      password: "",
      port: "3306",
      database: "plasticos_db",
    },
    "single"
  ));

//vistas 
app.set("view engine", "ejs");
app.set("views", "views");

//routes - rutas 
app.use('/', routes);
app.get('/users', usersRoutes);

//puerto de conexion 
app.listen(app.get("port"), () => {
  console.log(`Server started on port ${app.get("port")}`);
});