const express = require('express');
const CrudController= require('../CONTROLLERS/crudController')
const ApiRoutes = express.Router();

ApiRoutes
.post("/", CrudController.Create)

.get("/", CrudController.Read)
.get("/:id", CrudController.ReadById)
.patch("/", CrudController.Update)
.delete("/", CrudController.Delete)
module.exports = ApiRoutes