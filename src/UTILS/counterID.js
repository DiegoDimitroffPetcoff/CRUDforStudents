const mongoose = require("mongoose");
const counterSchema = require("../MODELS/counterModel");


counterId = async () => {
    let cd = await counterSchema.findOneAndUpdate(
      //coloco el nombre autova para poder encontrarlo en la DBS
        { id: "autova" },
      //este de abajo indica la cantidad que va a aumentar la propiedad seq
      { $inc: { seq: 1 } },
      { new: true }
    );
  //este if sera para el caso de no encontrar un id:"autova", obteniendo un null crea el id 1
    if (cd === null) {
      cd = await counterSchema.create({
        id: "autova",
        seq: 1,
      });
    }  
    return cd;
  };

  module.exports = counterId