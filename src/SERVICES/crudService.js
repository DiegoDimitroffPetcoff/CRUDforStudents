const mongoose = require("mongoose");
const userSchema = require("../MODELS/users");
const counterId = require("../UTILS/counterID");


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

Update = async(id, updates) => {
  
  let updatedUser = await userSchema.findOneAndUpdate(
    {id: `${id}` },
    updates,{new:true}
    )
  return updatedUser;

};

Delete = async(id) => {
let deletedUser = await userSchema.findOneAndDelete({ id });
return deletedUser;};

module.exports = {
  Create,
  Read,
  ReadById,
  Update,
  Delete,
};
