const { Plant } = require('../db');

const createPlant = async (req, res) => {
  const { name , size, color } = req.body;

  const plant = Plant.build({ name , size, color  });
  await plant.save();
  res.status(200).send(plant);
};

const listPlant = async (req, res) => {
  const newPlant = await Plant.findAll();
  res.status(200).send(newPlant);
};


const getPlant= async (req, res) => {
  const addPlant = await Plant.findAll({
    where: {
      id: req.params.id,
    },
  });

  if (addPlant.length > 0) {
    res.status(200).send(addPlant[0]);
  } else {
    res.status(404).send(`Could not find user with id ${req.params.id}`);
  }
};


// update


module.exports = {
  createPlant,
  listPlant,
  getPlant,
};
