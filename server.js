const express = require('express');
const app = express()

//TODO: AGREGAR LAS VARIABLES DE ENTORNO Y CONFIG.
//TODO: AGREGAR PARA QUE FUNCIONE CON TODOS LOS NUCLEOS DE LA PC
//----------------------------MIDDLEWARE-----------------------------------------
app.use(express.json());
app.use(express.urlencoded(({extended:true})))

//----------------------------ROUTE----------------------------------------------
const ApiRoutes = require('./src/ROUTES/routes')
app.use("/api", ApiRoutes);

//----------------------------DBS----------------------------------------------
const Dbs = require('./src/DBS/mongoose')
Dbs().catch(err => console.log(err));

//----------------------------PORT----------------------------------------------
const PORT = 8080;
const server= app.listen(PORT, ()=>{
    console.log(`Port ${PORT} is listening rigth now`)
})