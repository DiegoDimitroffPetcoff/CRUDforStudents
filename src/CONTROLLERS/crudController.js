const Service = require("../SERVICES/crudService");

//Body: Name, email, Skills


Create = async (req, res) => {
  let newUser = await Service.Create(req.body);
  res.status(200).send(newUser);
};

Read = async (req, res) => {
  try {
    let allUsers = await Service.Read();
    res.status(200).send(allUsers);
  } catch (error) {
    res.status(500).send("There has been an unexpected error ");
  }
};

ReadById = async (req, res) => {
  let userById = await Service.ReadById(req.params.id);

  try {
    if (userById.length === 0) {
      res.status(404).send("User not found");
    } else {
      res.status(200).send(userById);
    }
  } catch (error) {
    res.status(500).send("There has been an unexpected error ");
  }
};

Update = async (req, res) => {
  try {
    let userById = await Service.Update(req.params.id, req.body);

    if (userById == null) {
      res.status(404).send("User not founded to Edit");
    } else {
      res.status(200).send(userById);
    }
  } catch (error) {
    res.status(500).send("There has been an unexpected error ");
  }
};

Delete = async (req, res) => {
  try {
    let userById = await Service.Delete(req.params.id);
    if (userById == null) {
      res.status(404).send("User not founded to delete");
    } else {
      res.status(200).send(userById);
    }
  } catch (error) {
    res.status(500).send("There has been an unexpected error ");
  }
};

module.exports = {
  Create,
  Read,
  ReadById,
  Update,
  Delete,
};
