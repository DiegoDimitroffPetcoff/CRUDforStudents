const express = require('express');
const CrudController= require('../CONTROLLERS/crudController')
const ApiRoutes = express.Router();

ApiRoutes
.post("/", CrudController.Create)

.get("/", CrudController.Read)
.get("/:id", CrudController.ReadById)
.patch("/:id", CrudController.Update)
.delete("/:id", CrudController.Delete)

//  404 Rute
ApiRoutes.use((req, res) => {
    res.status(404).send("404 - Route not found");
  });

module.exports = ApiRoutes