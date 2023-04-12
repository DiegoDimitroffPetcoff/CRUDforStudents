const mongoose = require("mongoose");
const userSchema = require("../MODELS/users");
const counterId = require("../UTILS/counterID");

//TODO:BUSCAR LA MANERA DE AGREGAR UN ID EN MONGO PARA LUEGO AGREGAR EL BUSCADOR BY ID
Create = async (user) => {
  //counterId() es una funcion para generar un numero que va incrementando en uno
  let id = await counterId();
  user.id = id.seq;
  let newUser = await userSchema.create(user);
  return newUser;
};

Read = async () => {
  let allUsers = await userSchema.find({});
  return allUsers;
};

ReadById = async (id) => {
  let allUsers = await userSchema.find({ id: `${id}` });
  return allUsers;
};

Update = () => {};

Delete = () => {};

module.exports = {
  Create,
  Read,
  ReadById,
  Update,
  Delete,
};
