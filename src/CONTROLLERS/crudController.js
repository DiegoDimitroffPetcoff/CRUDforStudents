const Service = require("../SERVICES/crudService");

//Body: Name, email, Skills

//TODO: AGREGAR GESTOR DE ERRORES EN LAS PROMESAS
Create = async (req, res) => {
  let newUser = await Service.Create(req.body);
  res.status(200).send(newUser);
};

Read = async (req, res) => {
  let allUsers = await Service.Read();
  res.status(200).send(allUsers);
};

ReadById = async (req, res) => {
  let userById = await Service.ReadById(req.params.id);
  res.status(200).send(userById);
};

Update = (req, res) => {
  console.log("read");
  res.send("works!");
};

Delete = (req, res) => {
  console.log("read");
  res.send("works!");
};

module.exports = {
  Create,
  Read,
  ReadById,
  Update,
  Delete,
};
